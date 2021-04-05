import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: String
    title: String
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;

export default typeDefs;
