'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ResultsGenreInfo', function () {
  it('renders', function () {
    var genre = 'drama';
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { genre: genre })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('creates element with results-genre-info class and correct genre', function () {
    var genre = 'genre';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { genre: genre }));

    expect(wrapper.hasClass('results-genre-info')).toBeTruthy();
    expect(wrapper.text()).toEqual('Films by ' + genre + ' genre');
  });
});