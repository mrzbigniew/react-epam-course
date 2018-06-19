'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearchResultsSortOrder = exports.sortResults = exports.getFiltered = exports.SORT_BY_RATING = exports.SORT_BY_RELEASE_DATE = exports.SET_SEARCH_RESULTS_CRITERIA = exports.SET_SEARCH_RESULTS_SORT_ORDER = exports.SET_SEARCH_RESULTS_DATA = undefined;

var _search = require('./search');

var SET_SEARCH_RESULTS_DATA = exports.SET_SEARCH_RESULTS_DATA = 'SET_SEARCH_RESULTS_DATA'; /* eslint-disable prop-types, no-nested-ternary */
var SET_SEARCH_RESULTS_SORT_ORDER = exports.SET_SEARCH_RESULTS_SORT_ORDER = 'SET_SEARCH_RESULTS_SORT_ORDER';
var SET_SEARCH_RESULTS_CRITERIA = exports.SET_SEARCH_RESULTS_CRITERIA = 'SET_SEARCH_RESULTS_CRITERIA';

var SORT_BY_RELEASE_DATE = exports.SORT_BY_RELEASE_DATE = 'SORT_BY_RELEASE_DATE';
var SORT_BY_RATING = exports.SORT_BY_RATING = 'SORT_BY_RATING';

var getFiltered = exports.getFiltered = function getFiltered(data, filter, text) {
  return filter && text ? data.filter(function (movie) {
    return filter === _search.SEARCH_BY_TITLE ? movie.title.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1 : movie.genres.some(function (genre) {
      return genre.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1;
    });
  }) : [];
};

var sortResults = exports.sortResults = function sortResults(data, sort) {
  return data.sort(function (current, next) {
    var currentValue = (sort === SORT_BY_RATING ? current.vote_average : current.release_date).toString().toLowerCase();
    var nextValue = (sort === SORT_BY_RATING ? next.vote_average : next.release_date).toString().toLowerCase();
    return currentValue === nextValue ? 0 : currentValue > nextValue ? 1 : -1;
  });
};

var setSearchResultsSortOrder = exports.setSearchResultsSortOrder = function setSearchResultsSortOrder(value) {
  return {
    type: SET_SEARCH_RESULTS_SORT_ORDER,
    value: value
  };
};