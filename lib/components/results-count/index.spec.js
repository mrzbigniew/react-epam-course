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
    var moviesCount = 10;
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { moviesCount: moviesCount })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render element with results-count class and correct content', function () {
    var moviesCount = 10;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { moviesCount: moviesCount }));

    expect(wrapper.hasClass('results-count')).toBeTruthy();
    expect(wrapper.text()).toEqual(moviesCount + ' movies found');
  });

  it('should render `No movies found` if movies count equal 0', function () {
    var moviesCount = 0;
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { moviesCount: moviesCount }));

    expect(wrapper.text()).toEqual('No movies found');
  });
});