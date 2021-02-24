import S3 from "aws-sdk/clients/s3";
import { config } from "./config";
import { CustomBucketParams } from "./generated/types";

const defaultBucketParams: CustomBucketParams = {
  bucketName: config.bucket.name,
  region: config.bucket.region,
  accessKeyId: config.bucket.access,
  accessKeySecret: config.bucket.accessSecret,
};

export const s3Service = (bucketParams?: CustomBucketParams) => {
  const params = bucketParams ?? defaultBucketParams;
  const s3 = new S3(params);
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
  params: S3.ListObjectsV2Request,
  allKeys: Array<S3.Object> = []
) => {
  const response = await s3
    .listObjectsV2(params)
    .promise()
    .catch((e) => {
      throw new Error(e);
    });

  if (!response) {
    throw new Error("no response");
  }
  if (!response.Contents) {
    return allKeys;
  }
  response.Contents.map((obj) => allKeys.push(obj));

  if (response.NextContinuationToken) {
    params.ContinuationToken = response.NextContinuationToken;
    await getContent(s3, params, allKeys);
  }
  return allKeys;
};
