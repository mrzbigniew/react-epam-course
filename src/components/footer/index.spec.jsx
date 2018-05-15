import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './footer';

describe('Content', () => {
    it('renders', () => {
        const component = renderer.create(<Footer><span>Some footer content</span></Footer>).toJSON();

        expect(component).toMatchSnapshot();
    });
});
