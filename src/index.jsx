import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

const render = () => {
    ReactDOM.render(<App></App>, document.getElementById('app'));
}

render();
