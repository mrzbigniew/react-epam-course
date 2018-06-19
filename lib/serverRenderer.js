'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint-disable prop-types, max-len */

// eslint-disable-line


exports.default = serverRenderer;

require('isomorphic-fetch');

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _root = require('./components/root');

var _root2 = _interopRequireDefault(_root);

var _configureStore2 = require('./configureStore');

var _configureStore3 = _interopRequireDefault(_configureStore2);

var _search = require('./actions/search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderHTML(html, preloadedState) {
  return '\n      <!doctype html>\n      <html>\n        <head>\n          <meta charset=utf-8>\n          <title>React Server Side Rendering</title>\n          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">\n          <style>\n            html, body {\n              width: 100%;\n              height: 100%;\n              display: block;\n            }\n            body {\n              margin: 0;\n              padding: 0;\n              outline: none;\n              border: none;\n              width: 100%;\n              height: 100%;\n              font-family: \'Open Sans\', sans-serif;\n              font-size: 1.2rem;\n              font-weight: normal;\n            }\n\n            h1,\n            h2,\n            h3,\n            h4,\n            h5,\n            h6 {\n                font-family: \'Montserrat\', sans-serif;\n            }\n\n            * {\n                box-sizing: border-box;\n            }\n\n            .font-open-sans {\n                font-family: \'Open Sans\', sans-serif;\n            }\n\n            .font-montserrat {\n                font-family: \'Montserrat\', sans-serif;\n            }\n          </style>\n          ' + (process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">') + '\n        </head>\n        <body>\n          <div id="root">' + html + '</div>\n          <script>\n            window.PRELOADED_STATE = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n          </script>\n          <script src="/js/main.js"></script>\n        </body>\n      </html>\n  ';
}

function serverRenderer() {
  return function (req, res) {
    if (req.url === '/favicon.ico') {
      res.writeHead(204);
      res.end();
      return;
    }

    var _configureStore = (0, _configureStore3.default)(),
        store = _configureStore.store,
        persistor = _configureStore.persistor;

    if (req.url.indexOf('%20') !== -1) {
      var _req$url$split$pop$sp = req.url.split('/').pop().split('%20'),
          _req$url$split$pop$sp2 = _slicedToArray(_req$url$split$pop$sp, 2),
          filter = _req$url$split$pop$sp2[0],
          text = _req$url$split$pop$sp2[1];

      store.dispatch((0, _search.setSearchFilter)(filter));
      store.dispatch((0, _search.setSearchText)(text));
    }

    var context = {};
    var root = React.createElement(_root2.default, { context: context,
      location: req.url.replace('%20', ' '),
      router: _reactRouterDom.StaticRouter,
      store: store,
      persistor: persistor
    });

    store.runSaga().done.then(function () {
      var htmlString = (0, _server.renderToString)(root);

      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        });
        res.end();
        return;
      }

      var preloadedState = store.getState();

      _reactLoadable2.default.preloadAll().then(function () {
        res.send(renderHTML(htmlString, preloadedState));
      });
    });

    store.close();
  };
}