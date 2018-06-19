'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchButton = function SearchButton(_ref) {
    var onClick = _ref.onClick;
    return _react2.default.createElement(
        'div',
        { className: _styles2.default.searchButton },
        _react2.default.createElement(
            _button2.default,
            {
                className: 'brn btn-primary btn-sm ' + _styles2.default.btnSm,
                label: 'search',
                onClick: onClick
            },
            'search'
        )
    );
};

SearchButton.propTypes = {
    onClick: _propTypes2.default.func
};

exports.default = SearchButton;