'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieItemModel = {
  id: _propTypes2.default.number,
  title: _propTypes2.default.string,
  tagline: _propTypes2.default.string,
  vote_average: _propTypes2.default.number,
  vote_count: _propTypes2.default.number,
  release_date: _propTypes2.default.string,
  poster_path: _propTypes2.default.string,
  overview: _propTypes2.default.string,
  budget: _propTypes2.default.number,
  revenue: _propTypes2.default.number,
  runtime: _propTypes2.default.number,
  genres: _propTypes2.default.arrayOf(_propTypes2.default.string)
}; /* eslint-disable prop-types */

exports.default = MovieItemModel;