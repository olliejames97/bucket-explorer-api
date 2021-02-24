import { gql } from "apollo-server-lambda";

export const schema = gql`
  type Query {
    files(bucket: CustomBucketParams): [File]!
  }

  type File {
    link: String!
    name: String!
    size: Int
    lastModified: String
  }

  input CustomBucketParams {
    bucketName: String!
    region: String!
    accessKeyId: String!
    accessKeySecret: String!
  }
`;
