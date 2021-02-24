import { gql } from "apollo-server-lambda";

export const schema = gql`
  type Query {
    hello: String!
    secret: String
    files: [File]!
  }

  type File {
    link: String!
    name: String!
  }
`;
