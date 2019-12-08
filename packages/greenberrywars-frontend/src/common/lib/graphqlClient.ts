import ApolloClient from 'apollo-boost';
import config from '../config/config';

const graphqlClient = new ApolloClient({ uri: config.api.url });

export default graphqlClient;
