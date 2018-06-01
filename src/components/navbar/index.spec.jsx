import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Navbar from './index';

describe('Navbar', () => {
    it('renders', () => {
        const component = renderer.create(<Navbar><span>Some navbar content</span></Navbar>).toJSON();

        expect(component).toMatchSnapshot();
    });

    describe('wrapper', () => {
        it('renders element with navbar class name', () => {
            const wrapper = shallow(<Navbar><span></span></Navbar>);

            expect(wrapper.hasClass('navbar')).toBeTruthy();
        });

        it('renders childrens', () => {
            const exceptedContent = 'test content';
            const wrapper = shallow(<Navbar>{exceptedContent}</Navbar>);

            expect(wrapper.text()).toEqual(exceptedContent);
        });
    });
});
