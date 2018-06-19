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

var MovieRating = function MovieRating(_ref) {
  var rating = _ref.rating;
  return _react2.default.createElement(
    'span',
    { className: _styles2.default.movieRating },
    rating || 0
  );
};

MovieRating.propTypes = {
  rating: _propTypes2.default.number
};

exports.default = MovieRating;