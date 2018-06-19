'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMovies = exports.moviesDataClean = exports.moviesDataSet = exports.moviesLoadingError = exports.moviesLoadingSuccess = exports.moviesLoadingStart = exports.MOVIES_DATA_SET = exports.MOVIES_DATA_CLEAN = exports.MOVIES_DATA_LOADING_ERROR = exports.MOVIES_DATA_LOADING_SUCCESS = exports.MOVIES_DATA_LOADING_START = undefined;
exports.getMovies = getMovies;
exports.moviesSaga = moviesSaga;
exports.rootSaga = rootSaga;

var _effects = require('redux-saga/effects');

var _movies = require('../services/api/movies');

var _spinner = require('./spinner');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getMovies),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(moviesSaga),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable prop-types */

var MOVIES_DATA_LOADING_START = exports.MOVIES_DATA_LOADING_START = 'MOVIES_DATA_LOADING_START';
var MOVIES_DATA_LOADING_SUCCESS = exports.MOVIES_DATA_LOADING_SUCCESS = 'MOVIES_DATA_LOADING_SUCCESS';
var MOVIES_DATA_LOADING_ERROR = exports.MOVIES_DATA_LOADING_ERROR = 'MOVIES_DATA_LOADING_ERROR';

var MOVIES_DATA_CLEAN = exports.MOVIES_DATA_CLEAN = 'MOVIES_DATA_CLEAN';
var MOVIES_DATA_SET = exports.MOVIES_DATA_SET = 'MOVIES_DATA_SET';

var moviesLoadingStart = exports.moviesLoadingStart = function moviesLoadingStart() {
  return {
    type: MOVIES_DATA_LOADING_START
  };
};

var moviesLoadingSuccess = exports.moviesLoadingSuccess = function moviesLoadingSuccess() {
  return {
    type: MOVIES_DATA_LOADING_SUCCESS
  };
};

var moviesLoadingError = exports.moviesLoadingError = function moviesLoadingError(error) {
  return {
    type: MOVIES_DATA_LOADING_ERROR,
    error: error
  };
};

var moviesDataSet = exports.moviesDataSet = function moviesDataSet(data) {
  return {
    type: MOVIES_DATA_SET,
    data: data.data,
    total: data.total
  };
};

var moviesDataClean = exports.moviesDataClean = function moviesDataClean() {
  return {
    type: MOVIES_DATA_CLEAN
  };
};

var loadMovies = exports.loadMovies = function loadMovies() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              dispatch(moviesLoadingStart());
              dispatch((0, _spinner.showSpinner)());
              _context.next = 5;
              return (0, _movies.fetchMovies)();

            case 5:
              data = _context.sent;

              dispatch(moviesLoadingSuccess());
              dispatch((0, _spinner.hideSpinner)());
              return _context.abrupt('return', dispatch(moviesDataSet(data)));

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              dispatch(moviesLoadingError(_context.t0));
              dispatch((0, _spinner.hideSpinner)());
              return _context.abrupt('return', dispatch(moviesDataSet({
                data: [],
                total: 0
              })));

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

function getMovies() {
  var movies;
  return regeneratorRuntime.wrap(function getMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _movies.fetchMovies)();

        case 2:
          movies = _context2.sent;
          _context2.next = 5;
          return (0, _effects.put)(moviesDataSet(movies));

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked, this);
}

function moviesSaga() {
  return regeneratorRuntime.wrap(function moviesSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([getMovies()]);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked2, this);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.all)([moviesSaga()]);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked3, this);
}