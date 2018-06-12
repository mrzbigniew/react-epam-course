/* eslint-disable prop-types */

import { fetchMovie, fetchMovies, fetchData } from './movies';

global.fetch = require('jest-fetch-mock');

describe('movieService', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('fetchMovie', (done) => {
    const movie = {
      id: 1,
      title: 'title',
    };
    fetch.mockResponseOnce(JSON.stringify(movie));

    fetchMovie(movie.id).then((data) => {
      expect(data).toEqual(movie);
      done();
    });
  });

  it('fetchMovies', (done) => {
    const movies = [{
      id: 1,
      title: 'title',
    }];
    fetch.mockResponseOnce(JSON.stringify(movies));

    fetchMovies().then((data) => {
      expect(data).toEqual(movies);
      done();
    });
  });

  it('fetchData', (done) => {
    const payload = {
      path: 'movies',
      params: {
        limit: 10000,
      },
    };
    const response = {
      total: 3000,
      data: [{
        title: 'movie 1',
      }],
    };

    fetch.mockResponseOnce(JSON.stringify(response));

    fetchData(payload).then((data) => {
      expect(data).toEqual(response);
      done();
    });
  });
});
