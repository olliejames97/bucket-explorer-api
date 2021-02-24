import { S3 } from "aws-sdk";
import { File } from "./generated/types";
import { config } from "./config";

export const s3ObjectToGqlFile = (obj: S3.Object): File => ({
  link: `https://${config.bucket.name}.s3.amazonaws.com/${obj.Key}`,
  name: obj.Key ?? "no-name",
  size: obj.Size,
  lastModified: obj.LastModified
    ? obj.LastModified.toLocaleDateString("en-GB")
    : undefined,
});
