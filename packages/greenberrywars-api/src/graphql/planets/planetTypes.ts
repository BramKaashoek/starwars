import { gql } from 'apollo-server-koa';
import { Type, Field, generateTypeDefs, Int } from 'typescript-typedefs';

@Type()
export class Planet {
  @Field()
  name: string;

  @Field(Int)
  id: number;
}

const generatedTypeDefs = generateTypeDefs([Planet]);

export const planetTypeDefs = gql`
  extend type Query {
    planets(speciesId: Int, movieId: Int): [Planet!]!
  }

  ${generatedTypeDefs}
`;
