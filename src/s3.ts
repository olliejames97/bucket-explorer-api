import S3 from "aws-sdk/clients/s3";
import { config } from "./config";

const bucketConfig = {
  bucketName: config.bucket.name,
  region: config.bucket.region,
  accessKeyId: config.bucket.access,
  secretAccessKey: config.bucket.accessSecret,
};

const s3 = new S3(bucketConfig);

export const getFiles = async () => {
  const content = await getContent({
    Bucket: bucketConfig.bucketName,
  });

  return content;
};

const getContent = async (
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
    await getContent(params, allKeys); // RECURSIVE CALL
  }
  return allKeys;
};
