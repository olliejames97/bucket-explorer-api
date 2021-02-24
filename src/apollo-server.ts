import { ApolloServer } from "apollo-server-lambda";

import { resolvers } from "./resolvers";
import { schema } from "./schema";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs: schema,
  playground: true,
});

export const graphqlHandler = apolloServer.createHandler();
