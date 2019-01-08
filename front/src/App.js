import React, { Component, Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import client from "./apolloClient";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Fragment>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/detail"} component={Detail} />
          </Fragment>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
