'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
    return _react2.default.createElement(
        'div',
        { className: _styles2.default.notFound },
        _react2.default.createElement(
            'span',
            null,
            '404 Not found'
        )
    );
};

exports.default = NotFound;