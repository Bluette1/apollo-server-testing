// src/resolvers.test.ts

import gql from 'graphql-tag';

import { Movie } from './types';

import testServer from './testUtils/testServer';
import moviesSample from './testUtils/moviesSample';
import MoviesAPI from './MoviesAPI';

describe('MoviesAPI', () => {
  it('fetches all movies', async () => {
    // We cannot stub a protected method,
    // so we declare the type as 'any'
    const moviesAPI: any = new MoviesAPI();

    // We create a stub because we don't
    // want to call an external service.
    // We also want to use it for testing.
    const getStub = (): Promise<Movie[]> => Promise.resolve(moviesSample());
    moviesAPI.get = jest.fn(getStub);

    // We use a test server instead of the actual one.
    const { query } = testServer(() => ({ moviesAPI }));

    const GET_MOVIES = gql`
      query GetMovies {
        movies {
          id
          title
        }
      }
    `;

    // A query is made as if it was a real service.
    const res = await query({ query: GET_MOVIES });

    // We ensure that the errors are undefined.
    // This helps us to see what goes wrong.
    expect(res.errors).toBe(undefined);

    // We check to see if the `movies`
    // endpoint is called properly.
    expect(moviesAPI.get).toHaveBeenCalledWith(
      'movies',
    );

    // We check to see if we have
    // all the movies in the sample.
    expect(res?.data?.movies).toEqual(moviesSample());
  });
});
