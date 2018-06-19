'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieTagline', function () {
  it('renders', function () {
    var tagline = 'tagline';
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { tagline: tagline })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render element with movie-tagline class and correct tagline value', function () {
    var tagline = 'tagline';

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { tagline: tagline }));

    expect(wrapper.hasClass('movie-tagline')).toBeTruthy();
    expect(wrapper.text()).toEqual(tagline);
  });
});