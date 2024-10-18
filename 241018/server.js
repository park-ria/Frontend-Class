import { ApolloServer, gql } from "apollo-server";
//const {ApolloServer} = require("apollo-server");

const typeDefs = gql`
  type Query {
    text: String
    film: String
    allFilms: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
