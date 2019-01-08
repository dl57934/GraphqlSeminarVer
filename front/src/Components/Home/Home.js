import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Fragment } from "react";
import React, { Component } from "react";

const HOME_QUERY = gql`
  query getMovieList {
    getMovieList {
      id
      title
      genres
      torrents {
        url
        size
        quality
      }
    }
  }
`;

const changeAge = gql`
  mutation changeAge($name: String!, $age: String!) {
    changeAge(name: $name, age: $age)
  }
`;

export default class Home extends Component {
  componentWillMount() {
    this.setState({
      name: "",
      age: ""
    });
  }

  render() {
    const { name, age } = this.state;
    return (
      <Query query={HOME_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return "loading";
          return (
            <div>
              <input
                name="name"
                value={name}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
              <input
                name="age"
                value={age}
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
              <Mutation mutation={changeAge}>
                {(changeAge, { data }) => {
                  return (
                    <button
                      onClick={() => {
                        console.log(data);
                        return changeAge({ variables: { name, age } });
                      }}
                    />
                  );
                }}
              </Mutation>
            </div>
          );
        }}
      </Query>
    );
  }
}
