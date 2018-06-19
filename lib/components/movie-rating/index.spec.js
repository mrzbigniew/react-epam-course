'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieRating', function () {
  it('renders', function () {
    var rating = 10;
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { rating: rating })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render element with movie-rating class and correct rating value', function () {
    var rating = 10;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { rating: rating }));

    expect(wrapper.hasClass('movie-rating')).toBeTruthy();
    expect(wrapper.text()).toEqual(rating.toString());
  });

  it('should render rating as 0 if no rating passed', function () {
    var exceptedRating = 0;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { rating: null }));

    expect(wrapper.text()).toEqual(exceptedRating.toString());
  });
});