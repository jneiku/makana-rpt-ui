import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  // TODO: via environment config
  uri: "http://localhost:4000"
});

const QueryView = ({ data: { loading, feed } }) => (
  <div>
    {loading ? (
      <div>loading...</div>
    ) : (
      feed.map(({ id, title }) => <div key={id}>{title}</div>)
    )}
  </div>
);

const QueryFeed = compose(
  graphql(
    gql`
      query feed {
        feed {
          id
          title
        }
      }
    `
  )
)(QueryView);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <QueryFeed />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
