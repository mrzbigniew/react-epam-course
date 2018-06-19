'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _results = require('../actions/results');

var results = function results() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    sort: _results.SORT_BY_RELEASE_DATE
  };
  var action = arguments[1];

  switch (action.type) {
    case _results.SET_SEARCH_RESULTS_SORT_ORDER:
      return {
        sort: action.value
      };
    default:
      return state;
  }
}; /* eslint-disable prop-types */

exports.default = results;