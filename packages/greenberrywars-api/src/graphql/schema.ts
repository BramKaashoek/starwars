import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-koa';
import { merge } from 'lodash';

// these typedefs are here to have a framework to grow from
const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Query: {},
};

const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(resolvers),
});

export default schema;
