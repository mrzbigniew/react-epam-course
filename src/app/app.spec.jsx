import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

jest.mock('./film-search/film-search', () => 'FilmSearch');
jest.mock('./film-details/film-details', () => 'FilmDetails');
jest.mock('../error-boundary/error-boundary', () => 'ErrorBoundary');

describe('App', () => {
    it('should render', () => {
        const component = renderer.create(<App />).toJSON();

        expect(component).toMatchSnapshot();
    });
});
