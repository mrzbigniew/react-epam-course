'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOVIE_DATA_CLEAR = exports.MOVIE_DATA_SET = exports.MOVIE_DATA_GET = exports.MOVIE_LOADING_ERROR = exports.MOVIE_LOADING_SUCCESS = exports.MOVIE_LOADING_START = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable prop-types */

var _redux = require('redux');

var MOVIE_LOADING_START = exports.MOVIE_LOADING_START = 'MOVIE_LOADING_START';
var MOVIE_LOADING_SUCCESS = exports.MOVIE_LOADING_SUCCESS = 'MOVIE_LOADING_SUCCESS';
var MOVIE_LOADING_ERROR = exports.MOVIE_LOADING_ERROR = 'MOVIE_LOADING_ERROR';

var MOVIE_DATA_GET = exports.MOVIE_DATA_GET = 'MOVIE_DATA_GET';

var MOVIE_DATA_SET = exports.MOVIE_DATA_SET = 'MOVIE_DATA_SET';
var MOVIE_DATA_CLEAR = exports.MOVIE_DATA_CLEAR = 'MOVIE_DATA_CLEAR';

var loadStatus = function loadStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLoading: false,
    error: null
  };
  var action = arguments[1];

  switch (action.type) {
    case MOVIE_LOADING_START:
      return _extends({}, state, {
        isLoading: true
      });
    case MOVIE_LOADING_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        error: null
      });
    case MOVIE_LOADING_ERROR:
      return _extends({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

var data = function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case MOVIE_DATA_SET:
      return _extends({}, action.data);
    case MOVIE_DATA_CLEAR:
      return null;
    default:
      return state;
  }
};

var id = function id() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case MOVIE_DATA_GET:
      return action.id;
    default:
      return state;
  }
};

var movie = (0, _redux.combineReducers)({
  loadStatus: loadStatus,
  data: data,
  id: id
});

exports.default = movie;