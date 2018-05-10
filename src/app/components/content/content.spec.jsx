import React from 'react';
import renderer from 'react-test-renderer';

import Content from './content';

describe('Content', () => {
    it('renders', () => {
        const component = renderer.create(<Content><span>Some content</span></Content>).toJSON();

        expect(component).toMatchSnapshot();
    });
});
