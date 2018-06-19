'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _reactRouterDom = require('react-router-dom');

var _module = require('module');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../results-item', function () {
  return 'ResultsItem';
});
jest.mock('../no-results', function () {
  return 'NoResults';
});

describe('ResultsBody', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      movies: [{
        id: 1,
        poster_path: '/image1.jpg',
        title: 'movie 1',
        genres: ['drama'],
        release_date: '2018-10-10'
      }, {
        id: 2,
        poster_path: '/image2.jpg',
        title: 'movie 2',
        genres: ['comedy'],
        release_date: '2017-01-01'
      }],
      onMovieClick: jest.fn()
    };
  });

  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _reactRouterDom.MemoryRouter,
      null,
      _react2.default.createElement(_index2.default, props)
    ));

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = void 0;
    beforeEach(function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
    });

    it('should render element with results-body class name', function () {
      expect(wrapper.hasClass('results-body')).toBeTruthy();
    });

    it('should render ResultItems', function () {
      expect(wrapper.find('ResultsItem')).toHaveLength(props.movies.length);
    });

    it('should render NoResults if no movies provided', function () {
      var props2 = {
        movies: [],
        onMovieClick: jest.fn()
      };
      var wrapper2 = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props2));
      expect(wrapper2.find('NoResults')).toHaveLength(1);
    });
  });
});