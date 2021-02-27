import S3 from "aws-sdk/clients/s3";
import { config } from "./config";
import { CustomBucketParams } from "./generated/types";

const defaultBucketParams: CustomBucketParams = {
  bucketName: config.bucket.name,
  region: config.bucket.region,
  accessKeyId: config.bucket.access,
  accessKeySecret: config.bucket.accessSecret,
};

export const s3Service = (s3Params?: CustomBucketParams) => {
  const params = s3Params ?? defaultBucketParams;
  if (
    !params.bucketName ||
    !params.region ||
    !params.accessKeyId ||
    !params.accessKeySecret
  ) {
    throw new Error(
      "Error, missing bucket info. to set up a default bucket see the README."
    );
  }

  const s3 = new S3({
    region: params.region,
    accessKeyId: params.accessKeyId,
    secretAccessKey: params.accessKeySecret,
  } as S3.ClientConfiguration);

  return {
    getFiles: async () => {
      const content = await getContent(s3, {
        Bucket: params.bucketName,
      });
      return content;
    },
  };
};

const getContent = async (
  s3: S3,
  bucketParams: S3.ListObjectsV2Request,
  allKeys: Array<S3.Object> = []
) => {
  const response = await s3
    .listObjectsV2(bucketParams)
    .promise()
    .catch((e) => {
      throw new Error("Error getting object list: " + e);
    });

  if (!response) {
    throw new Error("no response");
  }
  if (!response.Contents) {
    return allKeys;
  }
  response.Contents.map((obj) => allKeys.push(obj));

  if (response.NextContinuationToken) {
    bucketParams.ContinuationToken = response.NextContinuationToken;
    await getContent(s3, bucketParams, allKeys);
  }
  return allKeys;
};
