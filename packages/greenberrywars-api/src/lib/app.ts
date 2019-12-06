import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import router from 'koa-router';
import koaBody from 'koa-bodyparser';
import cors from '@koa/cors';

import schema from '../graphql/schema';

const app = new Koa();

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

export default app;
