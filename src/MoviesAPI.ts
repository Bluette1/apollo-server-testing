import { RESTDataSource } from 'apollo-datasource-rest';
import { Movie } from './types';

export default class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://movie-example.api.com/';
  }

  async getMovies(): Promise<Movie[]> {
    return this.get(
      'movies',
    );
  }
}
