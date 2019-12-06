import { planetsResolver } from './planets/planets';
import { speciesTypeDefs } from './species/speciesTypes';
import { planetTypeDefs } from './planets/planetTypes';
import { charactersResolver } from './character/characters';
import { gql, makeExecutableSchema } from 'apollo-server-koa';
import { merge } from 'lodash';
import { characterTypeDefs } from './character/characterTypes';
import { movieTypeDefs } from './movies/movieTypes';
import { moviesResolver } from './movies/movies';
import { speciesResolver } from './species/species';

// these typedefs are here to have a framework to grow from
// the rest of the typedefs and resolvers are defined in their own folders
const typeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const resolvers = {
  Query: {},
};

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, characterTypeDefs, movieTypeDefs, planetTypeDefs, speciesTypeDefs],
  resolvers: merge(resolvers, charactersResolver, moviesResolver, planetsResolver, speciesResolver),
});

export default schema;
