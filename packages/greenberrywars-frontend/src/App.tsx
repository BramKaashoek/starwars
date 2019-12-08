import React from 'react';
import graphqlClient from './common/lib/graphqlClient';
import { ApolloProvider } from 'react-apollo';
import CharacterContainer from './modules/characters/scenes/CharacterContainer';
import Frame from './modules/frame/scenes/Frame';

const App: React.FC = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <Frame>
        <CharacterContainer />
      </Frame>
    </ApolloProvider>
  );
};

export default App;
