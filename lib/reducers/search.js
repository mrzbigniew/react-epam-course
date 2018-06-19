'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _search = require('../actions/search');

/* eslint-disable prop-types */

var filter = function filter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _search.SEARCH_BY_TITLE;
  var action = arguments[1];

  switch (action.type) {
    case _search.SET_SEARCH_FILTER:
      return action.value;
    default:
      return state;
  }
};

var text = function text() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _search.SET_SEARCH_TEXT:
      return action.value;
    default:
      return state;
  }
};

var search = (0, _redux.combineReducers)({
  filter: filter,
  text: text
});

exports.default = search;