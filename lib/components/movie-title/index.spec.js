'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieTitle', function () {
  it('renders', function () {
    var movieTitle = 'title';
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { title: movieTitle })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('creates element with movie-title class and correct tittle', function () {
    var title = 'title';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { title: title }));

    expect(wrapper.hasClass('movie-title')).toBeTruthy();
    expect(wrapper.text()).toEqual(title);
  });
});