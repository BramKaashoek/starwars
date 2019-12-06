import superagent from 'superagent';
import { ApolloError } from 'apollo-server-koa';

export const sa = {
  get: async (url: string) => {
    try {
      const res = await superagent.get(url);
      if (res.statusCode !== 200 && res.statusCode !== 201) console.error(res.statusCode);
      if (res.statusCode >= 400) throw new ApolloError('fetch error', res.statusCode);
      return res.body;
    } catch (err) {
      throw new ApolloError('FETCH ERROR: ', err.message);
    }
  },
};
