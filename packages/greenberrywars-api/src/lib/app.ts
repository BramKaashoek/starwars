import { fetchCharacters } from './../graphql/character/characters';
import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import router from 'koa-router';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';

import schema from '../graphql/schema';
import { fetchPlanets } from '../graphql/planets/planets';

const getApp = async () => {
  const app = new Koa();

  // gotta prefetch the characters so we can enrich species and planets
  await fetchCharacters();

  // gotta prefetch planets so we can enrich Characters in the subresolver, but after raw characters have been fetched since we need that to enrich planets
  await fetchPlanets();

  const rootRouter = new router();
  app.use(cors());
  app.use(koaBody());

  rootRouter.get(
    '/',
    async (ctx): Promise<void> => {
      ctx.body = 'This is a GraphQL API, please go to /graphql';
    },
  );

  app.use(rootRouter.routes());
  app.use(rootRouter.allowedMethods());

  const apolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({ app });
  return app;
};

export default getApp;
