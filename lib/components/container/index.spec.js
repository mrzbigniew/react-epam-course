'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Container', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Some container content'
      )
    )).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    it('renders element with container-fluid class name', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        _react2.default.createElement('span', null)
      ));

      expect(wrapper.hasClass('container-fluid')).toBeTruthy();
    });

    it('renders children\'s', function () {
      var exceptedContent = 'test content';
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        exceptedContent
      ));

      expect(wrapper.text()).toEqual(exceptedContent);
    });
  });
});