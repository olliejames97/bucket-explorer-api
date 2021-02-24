import { gql } from "apollo-server-lambda";

export const schema = gql`
  type Query {
    files: [File]!
  }

  type File {
    link: String!
    name: String!
    size: Int
    lastModified: String
  }
`;
