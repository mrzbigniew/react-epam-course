'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieYear = function MovieYear(_ref) {
  var year = _ref.year;
  return _react2.default.createElement(
    'span',
    { className: 'movie-year' },
    year
  );
};

MovieYear.propTypes = {
  year: _propTypes2.default.number
};

exports.default = MovieYear;