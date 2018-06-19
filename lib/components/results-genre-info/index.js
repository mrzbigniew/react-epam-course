'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsGenreInfo = function ResultsGenreInfo(_ref) {
  var genre = _ref.genre;
  return _react2.default.createElement(
    'span',
    { className: 'results-genre-info' },
    'Films by ' + genre.toLowerCase() + ' genre'
  );
};

ResultsGenreInfo.propTypes = {
  genre: _propTypes2.default.string
};

exports.default = ResultsGenreInfo;