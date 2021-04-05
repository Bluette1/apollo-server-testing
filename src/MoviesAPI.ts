import { RESTDataSource } from 'apollo-datasource-rest';
import { Movie } from './types';
import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

export default class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://movie-example.api.com/';
  }

  async getMovies(): Promise<Movie[]> {
    return await this.get(
      'movies',
    );
  }
}
