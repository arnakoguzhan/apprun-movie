import app from 'apprun';

// Movie API
window['defaultBasePath'] = 'http://localhost:3000/api';

import { toQueryString, serializeObject, getToken, setToken, get, post, del, put } from './fetch';
export { toQueryString, serializeObject }
import { IMovie } from './models';

export interface INewMovie {
  title: string;
  cover: string;
}

export interface IMoviesResponse {
  movie: IMovie
}

export const movies = {
  getAll: () =>
    get<IMoviesResponse>(`/movies/`),
  get: (slug: string) =>
    get<IMoviesResponse>(`/movies/${slug}`),
  delete: (slug: string) =>
    del(`/movies/${slug}`),
  create: (movie: INewMovie) =>
    post<IMoviesResponse>('/movies', { movie })
}
