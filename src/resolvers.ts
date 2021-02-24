import { config } from "./config";
import { Resolvers } from "./generated/types";
import { s3ObjectToGqlFile } from "./helpers";
import { s3Service } from "./s3";

export const resolvers: Resolvers = {
  Query: {
    files: async (_, args) => {
      const s3 = s3Service(args.bucket ?? undefined);
      const files = await s3.getFiles();

      return files.map((e) =>
        s3ObjectToGqlFile(e, args ? args.bucket?.bucketName : undefined)
      );
    },
  },
};
