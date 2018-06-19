'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _reactMockRouter = require('react-mock-router');

var _reactMockRouter2 = _interopRequireDefault(_reactMockRouter);

var _reactRouterDom = require('react-router-dom');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

jest.mock('../../../../components/movie-title', function () {
  return 'MovieTitle';
});
jest.mock('../../../../components/movie-cover', function () {
  return 'MovieCover';
});
jest.mock('../../../../components/movie-rating', function () {
  return 'MovieRating';
});
jest.mock('../../../../components/movie-tagline', function () {
  return 'MovieTagline';
});
jest.mock('../../../../components/movie-year', function () {
  return 'MovieYear';
});
jest.mock('../../../../components/movie-duration', function () {
  return 'MovieDuration';
});
jest.mock('../../../../components/movie-description', function () {
  return 'MovieDescription';
});

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);
var initialState = {};

describe('MovieDetails', function () {
  var store = void 0;
  beforeEach(function () {
    store = mockStore({
      movies: {
        data: {
          data: [{
            id: 1,
            title: 'movie 1',
            genres: ['drama'],
            poster_path: '/poster.jpg'
          }, {
            id: 2,
            title: 'movie 2',
            genres: ['drama'],
            poster_path: '/poster.jpg'
          }, {
            id: 3,
            title: 'movie 3',
            genres: ['drama'],
            poster_path: '/poster.jpg'
          }]
        }
      }
    });
  });
  it('should render', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var component;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            component = _reactTestRenderer2.default.create(_react2.default.createElement(
              _reactMockRouter2.default,
              { params: {
                  id: '1'
                } },
              _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                  return _react2.default.createElement(_index2.default, _extends({ store: store }, props));
                } })
            ));


            expect(component.toJSON()).toMatchSnapshot();

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});