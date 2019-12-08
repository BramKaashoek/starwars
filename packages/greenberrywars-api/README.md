# API

## How to run

`yarn` and `yarn start`. `yarn test` for tests.

## Why Typescript?

Fail early, Fail often. I prefer to have problems in dev over problems in prod.

## Why koa?

Koa is very similar to express, slightly smaller and more modular. I like the ctx, I like the error management.

## Why Apollo?

Because I Love Apollo. Nothing comes close in functionality and user experience.

## Why typescript-typedefs?

Its an open source package I spent 3 days on because I was too lazy to do 15 minutes of work. It lets me generate TS types and GraphQL TypeDefs at the same time.

## Why are the external API calls in the specs not mocked out?

I would have done that in an actualy production project, but I did not bother to do it for this one

## The data problem

The problem with the data is that there is no species <-> planet connection, other than through character.
Therefore I enriched all planets with species and all species with their planets (inhabitted, not homeworld), so more interesting data can be shown to the user

## Folder structure

Most of the logic can be found in the graphql folder. Koa is only used as a thin wrapper around apollo.
