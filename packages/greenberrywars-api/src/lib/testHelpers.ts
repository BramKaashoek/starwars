import supertest from 'supertest';
import * as http from 'http';
import app from '../lib/app';
function testRest(): supertest.SuperTest<supertest.Test> {
  return supertest(http.createServer(app.callback()));
}

export async function testGraphQl(query: string): Promise<supertest.Response> {
  const response = await testRest()
    .post('/graphql')
    .send({ query });
  if (response.status !== 200) {
    /* tslint:disable-next-line: no-console */
    console.error('koa error: ', response.text);
  }
  return response.body;
}
