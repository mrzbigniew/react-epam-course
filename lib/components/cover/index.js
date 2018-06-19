'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spinner = require('../spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cover = function Cover(_ref) {
  var visible = _ref.visible;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.cover, style: { display: visible ? 'flex' : 'none' } },
    _react2.default.createElement(_spinner2.default, null)
  );
};

Cover.propTypes = {
  visible: _propTypes2.default.bool
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return { visible: state.spinner };
})(Cover);