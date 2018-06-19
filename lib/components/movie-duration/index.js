'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieDuration = function MovieDuration(_ref) {
  var duration = _ref.duration;
  return _react2.default.createElement(
    'span',
    { className: 'movie-duration' },
    duration,
    ' min'
  );
};

MovieDuration.propTypes = {
  duration: _propTypes2.default.number
};

exports.default = MovieDuration;