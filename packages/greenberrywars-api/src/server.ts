import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import router from 'koa-router';

import schema from './graphql/schema';
import config from './config/config';

const app = new Koa();

const rootRouter = new router();

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

app.listen(config.server.port);
