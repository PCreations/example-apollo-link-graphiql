import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/graphiql/graphiql.css'
import GraphiQL from 'graphiql';

import { execute } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({
  uri: 'http://api.githunt.com/graphql'
});

ReactDOM.render(
  <GraphiQL fetcher={(operation) => execute(link, operation)}/>,
  document.getElementById('root'),
);
