import { config } from "./config";
export const resolvers = {
  Query: {
    hello: () => "world",
    secret: () => config.secretTest ?? "nope",
  },
};
