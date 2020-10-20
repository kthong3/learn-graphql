import React from 'react';
import BookList from './components/BookList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>React Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
