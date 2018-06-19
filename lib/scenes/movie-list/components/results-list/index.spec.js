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

var _results = require('../../../../actions/results');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../../../components/results-count', function () {
  return 'ResultsCount';
});
jest.mock('../../../../components/results-sort', function () {
  return 'ResultsCount';
});
jest.mock('../../../../components/results-body', function () {
  return 'ResultsCount';
});
jest.mock('../../../../components/content', function () {
  return 'ResultsCount';
});
jest.mock('../../../../components/navbar', function () {
  return 'ResultsCount';
});
jest.mock('../../../../reducers/movie', function () {
  return 'ResultsCount';
});

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);
var initialState = {};

var movies = {
  data: {
    data: [{
      title: 'AB',
      genres: ['A', 'B', 'C'],
      release_date: '2018-03-10',
      vote_average: 1
    }, {
      title: 'AB',
      genres: ['A', 'B', 'C'],
      release_date: '2018-03-10',
      vote_average: 1
    }, {
      title: 'BCA',
      genres: ['A', 'Z', 'C'],
      release_date: '2018-06-10',
      vote_average: 2
    }, {
      title: 'CBA',
      genres: ['W', 'B', 'Y'],
      release_date: '2014-02-10',
      vote_average: 6
    }, {
      title: 'ABZ',
      genres: ['A', 'B', 'C'],
      release_date: '2017-04-10',
      vote_average: 1
    }, {
      title: 'BCZ',
      genres: ['A', 'Z', 'C'],
      release_date: '2015-03-10',
      vote_average: 2
    }, {
      title: 'CAG',
      genres: ['W', 'B', 'Y'],
      release_date: '2014-02-2',
      vote_average: 6
    }, {
      title: 'CBA',
      genres: ['W', 'B', 'Y'],
      release_date: '2017-01-10',
      vote_average: 6
    }, {
      title: 'ABZ',
      genres: ['A', 'B', 'C'],
      release_date: '2018-04-10',
      vote_average: 1
    }, {
      title: 'BCZ',
      genres: ['A', 'Z', 'C'],
      release_date: '2015-03-10',
      vote_average: 2
    }, {
      title: 'CAG',
      genres: ['W', 'B', 'Y'],
      release_date: '2011-02-2',
      vote_average: 6
    }, {
      title: 'AB',
      genres: ['A', 'B', 'C'],
      release_date: '2013-03-10',
      vote_average: 1
    }, {
      title: 'BCA',
      genres: ['A', 'Z', 'C'],
      release_date: '2018-06-10',
      vote_average: 2
    }]
  }
};

describe('ResultsList', function () {
  var store = null;
  var params = {};
  beforeEach(function () {
    store = mockStore({
      movies: movies,
      results: {
        sort: _results.SORT_BY_RATING
      }
    });
    params = {
      text: 'A',
      filter: 'title'
    };
  });

  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _reactMockRouter2.default,
      { params: params },
      _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
          return _react2.default.createElement(_index2.default, _extends({ store: store }, props));
        } })
    ));

    expect(component.toJSON()).toMatchSnapshot();
  });
});