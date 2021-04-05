import MoviesAPI from './MoviesAPI';

const dataSources = (): any => ({
  moviesAPI: new MoviesAPI(),
});

export default dataSources;
