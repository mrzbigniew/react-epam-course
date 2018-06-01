import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header', () => {
    it('renders', () => {
        const component = renderer.create(<Header><span>Some Header content</span></Header>).toJSON();

        expect(component).toMatchSnapshot();
    });

    describe('wrapper', () => {
        it('renders element with header class name', () => {
            const wrapper = shallow(<Header><span></span></Header>);

            expect(wrapper.hasClass('header')).toBeTruthy();
        });

        it('renders childrens', () => {
            const exceptedContent = 'test content';
            const wrapper = shallow(<Header>{exceptedContent}</Header>);

            expect(wrapper.text()).toEqual(exceptedContent);
        });
    });
});
