import { Movie } from './types';

const resolvers = {
  Query: {
    movies: (
      _: unknown,
      __: unknown,
      { dataSources }: any
    ): Promise<Movie[]> => dataSources.moviesAPI.getMovies(),
  },
};

export default resolvers;
