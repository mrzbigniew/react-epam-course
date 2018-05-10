import React from 'react';
import renderer from 'react-test-renderer';

import App from './../../app/app';

jest.mock();

describe('App', () => {
    it('renders', () => {
        const component = renderer.create(<App />).toJSON();

        expect(component).toMatchSnapshot();
    });
});
