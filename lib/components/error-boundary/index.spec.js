'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('renders', function () {
  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement('div', null)
    ));

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders error when child fails to render', function () {
    var BadComponent = function BadComponent() {
      throw new Error('error');
    };
    var nativeConsoleError = console.error; // eslint-disable-line
    var error = jest.fn();
    console.error = error; // eslint-disable-line

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(BadComponent, null)
    ));
    console.error = nativeConsoleError; // eslint-disable-line
    expect(wrapper.instance().state.error).toBeTruthy();
    expect(wrapper.instance().state.error.message).toEqual('error');
  });
});