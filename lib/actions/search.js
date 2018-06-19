'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchMovies = exports.setSearchFilter = exports.setSearchText = exports.SET_SEARCH_TEXT = exports.SET_SEARCH_FILTER = exports.SEARCH_BY_GENRE = exports.SEARCH_BY_TITLE = undefined;

var _results = require('./results');

var SEARCH_BY_TITLE = exports.SEARCH_BY_TITLE = 'title'; /* eslint-disable prop-types */

var SEARCH_BY_GENRE = exports.SEARCH_BY_GENRE = 'genre';
var SET_SEARCH_FILTER = exports.SET_SEARCH_FILTER = 'SET_SEARCH_BY';

var SET_SEARCH_TEXT = exports.SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

var setSearchText = exports.setSearchText = function setSearchText(text) {
  return {
    type: SET_SEARCH_TEXT,
    value: text
  };
};

var setSearchFilter = exports.setSearchFilter = function setSearchFilter(value) {
  return {
    type: SET_SEARCH_FILTER,
    value: value
  };
};

var searchMovies = exports.searchMovies = function searchMovies(filter, text) {
  return {
    type: _results.SET_SEARCH_RESULTS_CRITERIA,
    filter: filter,
    text: text
  };
};