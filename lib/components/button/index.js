'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var _onClick = _ref.onClick,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        'button',
        { className: 'btn ' + className, onClick: function onClick(e) {
                return _onClick();
            } },
        children
    );
};

Button.propTypes = {
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.node
};

exports.default = Button;