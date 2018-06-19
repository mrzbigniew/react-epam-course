'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Logo', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, null)).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    it('renders element with logo class name', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));

      expect(wrapper.hasClass('logo')).toBeTruthy();
    });

    it('renders corect logo content', function () {
      var exceptedContent = 'netflixroulette';
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));

      expect(wrapper.text()).toEqual(exceptedContent);
    });
  });
});