'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieYear', function () {
  it('renders', function () {
    var year = 2018;
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { year: year }));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders element with movie-year class and correct content', function () {
    var year = 2018;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { year: year }));

    expect(wrapper.hasClass('movie-year')).toBeTruthy();
    expect(wrapper.text()).toEqual(year.toString());
  });
});