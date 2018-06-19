'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _redux = require('redux');

var _movies = require('./reducers/movies');

var _movie = require('./reducers/movie');

var _movie2 = _interopRequireDefault(_movie);

var _spinner = require('./reducers/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _search = require('./reducers/search');

var _search2 = _interopRequireDefault(_search);

var _results = require('./reducers/results');

var _results2 = _interopRequireDefault(_results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prop-types */

var reducer = exports.reducer = (0, _redux.combineReducers)({
  movie: _movie2.default,
  movies: _movies.movies,
  spinner: _spinner2.default,
  search: _search2.default,
  results: _results2.default
});

exports.default = reducer;