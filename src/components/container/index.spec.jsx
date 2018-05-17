import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Container from './index';

describe('Container', () => {
    it('renders', () => {
        const component = renderer.create(<Container><span>Some container content</span></Container>).toJSON();
        expect(component).toMatchSnapshot();
    });

    describe('wrapper', () => {
        it('renders element with container-fluid class name', () => {
            const wrapper = shallow(<Container><span></span></Container>);

            expect(wrapper.hasClass('container-fluid')).toBeTruthy();
        });

        it('renders children\'s', () => {
            const exceptedContent = 'test content';
            const wrapper = shallow(<Container>{exceptedContent}</Container>);

            expect(wrapper.text()).toEqual(exceptedContent);
        });
    });
});
