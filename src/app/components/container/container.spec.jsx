import React from 'react';
import renderer from 'react-test-renderer';

import Container from './container';

describe('Contaienr', () => {
    it('renders', () => {
        const component = renderer.create(<Container><span>Some content</span></Container>).toJSON();

        expect(component).toMatchSnapshot();
    });
});
