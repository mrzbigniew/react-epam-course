'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../scenes/movie-list', function () {
  return 'MovieList';
});
jest.mock('../../scenes/movie', function () {
  return 'Movie';
});
jest.mock('../error-boundary', function () {
  return 'ErrorBoundary';
});
jest.mock('../cover', function () {
  return 'Cover';
});
jest.mock('../not-found', function () {
  return 'NotFound';
});

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);
var initialState = {};

describe('App', function () {
  it('renders', function () {
    fetch.mockResponseOnce(JSON.stringify({
      data: [],
      total: ''
    }));
    var store = mockStore({
      movies: {
        data: {
          data: []
        }
      }
    });

    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { store: store }));

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var movies = void 0;
    var store = void 0;
    var wrapper = void 0;

    beforeEach(function () {
      fetch.resetMocks();
    });

    beforeEach(function () {
      movies = {
        data: {
          data: [{
            title: 'movie 1'
          }, {
            title: 'movie 2'
          }]
        }
      };
    });

    beforeEach(function () {
      store = mockStore({
        movies: movies
      });
    });

    it('should not dispatch loadMovies action if movies are loaded', function () {
      fetch.mockResponseOnce(JSON.stringify({
        data: {
          data: [{
            tittle: 'title 1'
          }, {
            tittle: 'title 2'
          }],
          total: 10
        }
      }));

      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { store: store }));

      expect(store.getActions()).toEqual([]);
    });
  });
});