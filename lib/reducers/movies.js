'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable prop-types */

var _redux = require('redux');

var _movies = require('../actions/movies');

var loadStatus = function loadStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLoading: false,
    error: null
  };
  var action = arguments[1];

  switch (action.type) {
    case _movies.MOVIES_DATA_LOADING_START:
      return _extends({}, state, {
        isLoading: true
      });
    case _movies.MOVIES_DATA_LOADING_SUCCESS:
      return {
        isLoading: false,
        error: null
      };
    case _movies.MOVIES_DATA_LOADING_ERROR:
      return {
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

var data = function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    data: [],
    total: 0
  };
  var action = arguments[1];

  switch (action.type) {
    case _movies.MOVIES_DATA_SET:
      return {
        data: action.data,
        total: action.total
      };
    case _movies.MOVIES_DATA_CLEAN:
      return {
        data: [],
        total: 0
      };
    default:
      return state;
  }
};

var movies = exports.movies = (0, _redux.combineReducers)({
  data: data,
  loadStatus: loadStatus
});

exports.default = movies;