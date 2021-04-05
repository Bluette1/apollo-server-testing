import MoviesAPI from './MoviesAPI';

const dataSources = (): any => {
  return {
    moviesAPI: new MoviesAPI(),
  };
};

export default dataSources;
