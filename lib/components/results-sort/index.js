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

var _results = require('../../actions/results');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsSortComponent = function ResultsSortComponent(_ref) {
  var dispatch = _ref.dispatch,
      children = _ref.children,
      value = _ref.value,
      active = _ref.active;
  return active ? _react2.default.createElement(
    'span',
    { className: 'btn btn-sm btn-success' },
    children
  ) : _react2.default.createElement(
    _button2.default,
    { className: 'btn btn-sm btn-link',
      onClick: function onClick() {
        return dispatch((0, _results.setSearchResultsSortOrder)(value));
      }
    },
    children
  );
};

ResultsSortComponent.propTypes = {
  dispatch: _propTypes2.default.func,
  children: _propTypes2.default.node,
  value: _propTypes2.default.string,
  active: _propTypes2.default.bool
};

var ResultsSort = (0, _reactRedux.connect)(function (state, ownProps) {
  return {
    active: state.results.sort === ownProps.value
  };
})(ResultsSortComponent);

exports.default = ResultsSort;