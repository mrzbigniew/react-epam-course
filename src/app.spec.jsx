import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

jest.mock('./components/error-boundary', () => 'ErrorBoundary');
jest.mock('./scenes/movie-list', () => 'ErrorBoundary');
jest.mock('./scenes/movie', () => 'ErrorBoundary');

describe('App', ()=> {
    it('renders', () => {
        const component = renderer.create(<App />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
