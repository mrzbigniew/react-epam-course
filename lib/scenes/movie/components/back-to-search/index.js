'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _button = require('../../../../components/button');

var _button2 = _interopRequireDefault(_button);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackToSearch = (0, _reactRouterDom.withRouter)(function (_ref) {
        var history = _ref.history;
        return _react2.default.createElement(
                _button2.default,
                { className: 'btn btn-text btn-sm ' + _styles2.default.backToSearch,
                        onClick: history.goBack
                },
                'search'
        );
});

exports.default = BackToSearch;