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

var _search = require('../../../../actions/search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../../../components/search-field', function () {
  return 'SearchField';
});
jest.mock('../../../../components/search-button', function () {
  return 'SearchButton';
});
jest.mock('../../../../components/filter-link', function () {
  return 'FilterLink';
});

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);
var initialState = {};

describe('SearchForm', function () {
  var store = null;
  var routerMocks = null;

  beforeEach(function () {
    store = mockStore({
      search: {
        filter: 'title',
        text: 'text'
      }
    });
  });

  beforeEach(function () {
    routerMocks = {
      push: jest.fn()
    };
  });

  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _reactMockRouter2.default,
      routerMocks,
      _react2.default.createElement(_reactRouterDom.Route, { render: function render(params) {
          return _react2.default.createElement(_index2.default, _extends({}, params, { store: store }));
        } })
    ));

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = null;
    store = null;
    routerMocks = null;
    var storeState = {
      search: {
        filter: 'title',
        text: 'text'
      }
    };

    beforeEach(function () {
      store = mockStore(storeState);
    });

    beforeEach(function () {
      routerMocks = {
        push: jest.fn()
      };
    });

    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _reactMockRouter2.default,
        routerMocks,
        _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
            return _react2.default.createElement(_index2.default, _extends({ store: store }, props));
          } })
      ));
    });

    it('should trigger search on submitting form', function () {
      wrapper.find('form').simulate('submit');

      expect(routerMocks.push).toBeCalled();
      expect(routerMocks.push).toBeCalledWith('/search/' + storeState.search.filter + ' ' + storeState.search.text);
    });

    it('should trigger search on clicking search button', function () {
      wrapper.find('SearchButton').at(0).simulate('click');

      expect(routerMocks.push).toBeCalled();
      expect(routerMocks.push).toBeCalledWith('/search/' + storeState.search.filter + ' ' + storeState.search.text);
    });

    it('should dispatch setSearchText action on changing text field', function () {
      var newSearchText = 'new search text';
      wrapper.find('SearchField').at(0).props().onChange(newSearchText);

      expect(store.getActions()).toEqual([{
        type: _search.SET_SEARCH_TEXT,
        value: newSearchText
      }]);
    });
  });
});