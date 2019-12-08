import { Planet } from './../planets/planetTypes';
import { gql } from 'apollo-server-koa';
import { Type, Field, generateTypeDefs, Int } from 'typescript-typedefs';

@Type()
export class Character {
  @Field(Int)
  id: number;

  @Field()
  name: string;

  @Field()
  planet: Planet;
}

const generatedTypeDefs = generateTypeDefs([Character]);

export const characterTypeDefs = gql`
  extend type Query {
    characters(speciesId: Int, planetId: Int, movieId: Int): [Character!]!
  }

  ${generatedTypeDefs}
`;
