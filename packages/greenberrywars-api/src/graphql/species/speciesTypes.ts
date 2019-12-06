import { gql } from 'apollo-server-koa';
import { Type, Field, generateTypeDefs, Int } from 'typescript-typedefs';

@Type()
export class Species {
  @Field()
  name: string;

  @Field(Int)
  id: number;
}

const generatedTypeDefs = generateTypeDefs([Species]);

export const speciesTypeDefs = gql`
  extend type Query {
    species(planetId: Int, movieId: Int): [Species!]!
  }

  ${generatedTypeDefs}
`;
