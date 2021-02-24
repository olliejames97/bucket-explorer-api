import { config } from "./config";
import { Resolvers } from "./generated/types";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "world",
    secret: () => config.secretTest ?? "nope",
  },
};
