/* eslint-disable prop-types, max-len */

import 'isomorphic-fetch';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Root from './components/root'; // eslint-disable-line
import configureStore from './configureStore';
import { setSearchFilter, setSearchText } from './actions/search';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
          <style>
            html, body {
              width: 100%;
              height: 100%;
              display: block;
            }
            body {
              margin: 0;
              padding: 0;
              outline: none;
              border: none;
              width: 100%;
              height: 100%;
              font-family: 'Open Sans', sans-serif;
              font-size: 1.2rem;
              font-weight: normal;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'Montserrat', sans-serif;
            }

            * {
                box-sizing: border-box;
            }

            .font-open-sans {
                font-family: 'Open Sans', sans-serif;
            }

            .font-montserrat {
                font-family: 'Montserrat', sans-serif;
            }
          </style>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(204);
      res.end();
      return;
    }

    const {
      store,
      persistor,
    } = configureStore();

    if (req.url.indexOf('%20') !== -1) {
      const [filter, text] = req.url.split('/').pop().split('%20');
      store.dispatch(setSearchFilter(filter));
      store.dispatch(setSearchText(text));
    }

    const context = {};
    const root = (<Root context={
      context
    }
      location={
        req.url.replace('%20', ' ')
      }
      router={
        StaticRouter
      }
      store={
        store
      }
      persistor={
        persistor
      }
    />
    );

    store.runSaga().done.then(() => {
      const htmlString = renderToString(root);

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      Loadable.preloadAll().then(() => {
        res.send(renderHTML(htmlString, preloadedState));
      });
    });

    store.close();
  };
}
