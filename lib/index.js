'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _configureStore2 = require('./configureStore');

var _configureStore3 = _interopRequireDefault(_configureStore2);

var _root = require('./components/root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line

// eslint-disable-line
var _configureStore = (0, _configureStore3.default)(),
    store = _configureStore.store,
    persistor = _configureStore.persistor;

window.store = store;
window.persistor = persistor;

var router = _reactRouterDom.BrowserRouter;

if (process.env === 'production') {
  router = _reactRouterDom.StaticRouter;
}

var render = function render() {
  _reactDom2.default.hydrate(_react2.default.createElement(_root2.default, { store: store, router: router, persistor: persistor }), document.getElementById('app'));
};

render();