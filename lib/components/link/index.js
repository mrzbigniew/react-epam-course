'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
    var _onClick = _ref.onClick,
        active = _ref.active,
        children = _ref.children;
    return active ? _react2.default.createElement(
        'span',
        { className: 'btn btn-sm btn-success' },
        children
    ) : _react2.default.createElement(
        'span',
        { className: 'btn btn-sm btn-text', onClick: function onClick(e) {
                e.preventDefault();_onClick();
            } },
        children
    );
};

Link.propTypes = {
    onClick: _propTypes2.default.func,
    active: _propTypes2.default.bool,
    children: _propTypes2.default.node
};

exports.default = Link;