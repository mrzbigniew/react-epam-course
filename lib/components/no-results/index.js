'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoResults = function NoResults() {
    return _react2.default.createElement(
        'div',
        { className: _styles2.default.noResultsFound },
        _react2.default.createElement(
            'span',
            null,
            'No films found'
        )
    );
};

exports.default = NoResults;