'use strict';

var _movies = require('./movies');

global.fetch = require('jest-fetch-mock'); /* eslint-disable prop-types */

describe('movieService', function () {
  beforeEach(function () {
    fetch.resetMocks();
  });
  it('fetchMovie', function (done) {
    var movie = {
      id: 1,
      title: 'title'
    };
    fetch.mockResponseOnce(JSON.stringify(movie));

    (0, _movies.fetchMovie)(movie.id).then(function (data) {
      expect(data).toEqual(movie);
      done();
    });
  });

  it('fetchMovies', function (done) {
    var movies = [{
      id: 1,
      title: 'title'
    }];
    fetch.mockResponseOnce(JSON.stringify(movies));

    (0, _movies.fetchMovies)().then(function (data) {
      expect(data).toEqual(movies);
      done();
    });
  });

  it('fetchData', function (done) {
    var payload = {
      path: 'movies',
      params: {
        limit: 10000
      }
    };
    var response = {
      total: 3000,
      data: [{
        title: 'movie 1'
      }]
    };

    fetch.mockResponseOnce(JSON.stringify(response));

    (0, _movies.fetchData)(payload).then(function (data) {
      expect(data).toEqual(response);
      done();
    });
  });
});