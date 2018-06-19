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

var MovieDescription = function MovieDescription(_ref) {
  var description = _ref.description;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.moviesDescription },
    _react2.default.createElement(
      'p',
      null,
      description
    )
  );
};

MovieDescription.propTypes = {
  description: _propTypes2.default.string
};

exports.default = MovieDescription;