import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

const render = () => {
    ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('app'));
}

render();
