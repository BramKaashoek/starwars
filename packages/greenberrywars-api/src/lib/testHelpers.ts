import supertest from 'supertest';
import * as http from 'http';
import Koa from 'koa';
import getApp from '../lib/app';

export async function testGraphQl(query: string): Promise<supertest.Response> {
  const app = await getTestApp();
  const response = await supertest(http.createServer(app.callback()))
    .post('/graphql')
    .send({ query });
  if (response.status !== 200) {
    console.error('koa error: ', response.text);
  }
  return response.body;
}

// so app isnt initialized for each test
const memoizedGetTestApp = (): (() => Promise<Koa>) => {
  let app = undefined;

  return async (): Promise<Koa> => {
    if (app) return app;
    app = await getApp();
    return app;
  };
};

const getTestApp = memoizedGetTestApp();
