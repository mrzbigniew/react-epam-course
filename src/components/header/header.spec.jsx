import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header';

describe('Header', () => {
    it('renders', () => {
        const component = renderer.create(<Header><span>Some Header content</span></Header>).toJSON();

        expect(component).toMatchSnapshot();
    });
});
