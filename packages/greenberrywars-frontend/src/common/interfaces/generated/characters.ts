/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: characters
// ====================================================

export interface characters_characters_planet {
  __typename: "Planet";
  name: string;
}

export interface characters_characters {
  __typename: "Character";
  id: number;
  name: string;
  planet: characters_characters_planet;
}

export interface characters {
  characters: characters_characters[];
}

export interface charactersVariables {
  speciesId?: number | null;
  movieId?: number | null;
  planetId?: number | null;
}
