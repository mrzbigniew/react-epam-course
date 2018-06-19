'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _configureStore2 = require('./configureStore');

var _configureStore3 = _interopRequireDefault(_configureStore2);

var _index = require('./components/root/index.jsx');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _configureStore = (0, _configureStore3.default)(window.PRELOADED_STATE),
    store = _configureStore.store,
    persistor = _configureStore.persistor;

var root = _react2.default.createElement(_index2.default, {
  Router: _reactRouterDom.BrowserRouter,
  store: store,
  persistor: persistor
});

_reactDom2.default.hydrate(root, document.getElementById('root'));