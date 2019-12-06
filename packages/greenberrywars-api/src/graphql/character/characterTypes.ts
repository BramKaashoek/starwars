import { gql } from 'apollo-server-koa';
import { Type, Field, generateTypeDefs, Int } from 'typescript-typedefs';

@Type()
export class Character {
  @Field()
  name: string;

  @Field(Int)
  id: number;
}

const generatedTypeDefs = generateTypeDefs([Character]);

export const characterTypeDefs = gql`
  extend type Query {
    characters(speciesId: Int, planetId: Int, movieId: Int): [Character!]!
  }

  ${generatedTypeDefs}
`;
