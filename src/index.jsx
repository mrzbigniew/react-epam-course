import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import { App } from './app/app';
import { TestComponent } from './test';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <TestComponent>
                <span>Some text</span>
            </TestComponent>
        </AppContainer>,
        document.getElementById('app')
    );
}

render();

if (module.hot) {
    module.hot.accept('./app/app', render);
}
