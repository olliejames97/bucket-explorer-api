import { ApolloServer } from "apollo-server-lambda";

import { resolvers } from "./resolvers";
import { schema } from "./schema";

const apolloServer = new ApolloServer({
  resolvers: resolvers as any,
  typeDefs: schema,
});

export const graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: "*",
    credentials: false,
  },
});
