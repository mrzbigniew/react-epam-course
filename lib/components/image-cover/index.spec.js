'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImageCover', function () {
  var props = {
    visible: true
  };
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index2.default,
      props,
      'test'
    )).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = null;
    beforeEach(function () {
      wrapper = null;
    });

    it('should create element with image-cover class', function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        props,
        'test'
      ));
      expect(wrapper.hasClass('image-cover')).toBeTruthy();
    });

    it('should react on visible property', function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        props,
        'test'
      ));
      expect(wrapper.props().style.display).toEqual('flex');
      wrapper.setProps({
        visible: false
      });
      expect(wrapper.props().style.display).toEqual('none');
    });
  });
});