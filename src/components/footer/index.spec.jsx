import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Content', () => {
    it('renders', () => {
        const component = renderer.create(<Footer><span>Some footer content</span></Footer>).toJSON();

        expect(component).toMatchSnapshot();
    });

    describe('wrapper', () => {
        it('renders element with footer class name', () => {
            const wrapper = shallow(<Footer><span></span></Footer>);

            expect(wrapper.hasClass('footer')).toBeTruthy();
        });

        it('renders childrens', () => {
            const exceptedContent = 'test content';
            const wrapper = shallow(<Footer>{exceptedContent}</Footer>);

            expect(wrapper.text()).toEqual(exceptedContent);
        });
    });
});
