'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _react3 = require('redux-persist/integration/react');

var _reactRouterDom = require('react-router-dom');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var store = _ref.store,
      router = _ref.router,
      location = _ref.location,
      persistor = _ref.persistor;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _react3.PersistGate,
      { loading: null, persistor: persistor },
      _react2.default.createElement(_app2.default, { router: router, location: location })
    )
  );
};

Root.propTypes = {
  store: _propTypes2.default.object.isRequired,
  router: _propTypes2.default.func,
  location: _propTypes2.default.string,
  persistor: _propTypes2.default.object
};

_app2.default.defaultProps = {
  location: null,
  context: {},
  router: _reactRouterDom.BrowserRouter
};

exports.default = Root;