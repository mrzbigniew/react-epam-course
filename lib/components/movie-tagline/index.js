'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieTagline = function MovieTagline(_ref) {
  var tagline = _ref.tagline;
  return _react2.default.createElement(
    'span',
    { className: _styles2.default.movieTagline },
    tagline
  );
};

MovieTagline.propTypes = {
  tagline: _propTypes2.default.string.isRequired
};

exports.default = MovieTagline;