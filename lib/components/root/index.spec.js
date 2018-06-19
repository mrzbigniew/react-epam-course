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

jest.mock('../app', function () {
  return 'App';
});

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);
var initialState = {};

describe('Root', function () {
  it('should render', function () {
    var store = mockStore({
      movies: {
        data: {
          data: []
        }
      }
    });

    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { store: store, persistor: store }));

    expect(component.toJSON).toMatchSnapshot();
  });
});