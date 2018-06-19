'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Navbar', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Some navbar content'
      )
    )).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    it('renders element with navbar class name', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        _react2.default.createElement('span', null)
      ));

      expect(wrapper.hasClass('navbar')).toBeTruthy();
    });

    it('renders childrens', function () {
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