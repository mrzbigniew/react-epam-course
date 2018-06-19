'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Link', function () {
  var props = {
    onClick: jest.fn(),
    active: true
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

    it('renders correct elements', function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        props,
        'link'
      ));
      expect(wrapper.find('.btn-success')).toHaveLength(1);
      expect(wrapper.find('.btn-text')).toHaveLength(0);
      wrapper.setProps(_extends({}, props, {
        active: false
      }));
      expect(wrapper.find('.btn-success')).toHaveLength(0);
      expect(wrapper.find('.btn-text')).toHaveLength(1);

      expect(props.onClick.mock.calls).toHaveLength(0);
      wrapper.find('.btn-text').simulate('click', { preventDefault: function preventDefault() {} });
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});