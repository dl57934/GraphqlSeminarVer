import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./ApolloClient";
import { BrowserRouter, Route } from "react-router-dom";
import home from "./home";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route path={"/"} component={home} exact={true} />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
