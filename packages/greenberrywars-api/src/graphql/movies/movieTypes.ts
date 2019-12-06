import { gql } from 'apollo-server-koa';
import { Type, Field, generateTypeDefs, Int } from 'typescript-typedefs';

@Type()
export class Movie {
  @Field()
  title: string;

  @Field(Int)
  id: number;
}

const generatedTypeDefs = generateTypeDefs([Movie]);

export const movieTypeDefs = gql`
  extend type Query {
    movies(speciesId: Int, planetId: Int): [Movie!]!
  }

  ${generatedTypeDefs}
`;
