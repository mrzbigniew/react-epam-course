'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieDescription', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { duration: 120 })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should create div element ', function () {
    var duration = 120;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { duration: duration }));

    expect(wrapper.is('span')).toBeTruthy();
    expect(wrapper.hasClass('movie-duration')).toBeTruthy();
    expect(wrapper.text()).toEqual(duration + ' min');
  });
});