import { config } from "./config";
import { Resolvers } from "./generated/types";
import { getFiles } from "./s3";
import { s3ObjectToGqlFile } from "./helpers";

export const resolvers: Resolvers = {
  Query: {
    files: async () => {
      const files = await getFiles();
      console.log("files", files);
      return files.map(s3ObjectToGqlFile);
    },
  },
};
