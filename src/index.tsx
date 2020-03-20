import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from "apollo-cache-inmemory";
import App from './App';



const cache = new InMemoryCache({dataIdFromObject: (obj: any) => obj.projectID || null,  addTypename: false });

const client = new ApolloClient({
  cache,
  uri: "https://g8rcvhx1f9.execute-api.us-east-1.amazonaws.com/dev/graphql"
  // uri: "http://localhost:4500/graphql"
});

const WithApollo = () => (
  <ApolloProvider client={client} >
      <App/>
  </ApolloProvider>
)
ReactDOM.render(<WithApollo />, document.getElementById('root'));
