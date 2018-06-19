'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jest.mock('../spinner', () => 'Spinner');

describe('Cover', function () {
  it('renders', function () {
    var store = {
      getState: function getState() {
        return {
          spinner: false
        };
      },
      dispatch: function dispatch() {},
      subscribe: function subscribe() {}
    };
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { store: store }));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('sets display to flex if state spinner is true', function () {
    var store = {
      getState: function getState() {
        return {
          spinner: true
        };
      },
      dispatch: function dispatch() {},
      subscribe: function subscribe() {}
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { store: store }));
    expect(wrapper.find('div').at(0).props().style.display).toEqual('flex');
  });

  it('sets display to none if state spinner is true', function () {
    var store = {
      getState: function getState() {
        return {
          spinner: false
        };
      },
      dispatch: function dispatch() {},
      subscribe: function subscribe() {}
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { store: store }));
    expect(wrapper.find('div').at(0).props().style.display).toEqual('none');
  });
});