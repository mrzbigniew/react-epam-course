import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchFilter from './index';

jest.mock('../button', () => 'Button');

describe('SearchFilter', () => {
    let props = null;

    beforeEach(() => {
        props = {
            buttons: ['first', 'secound'],
            onClick: jest.fn(),
            selected: 'first'
        };
    });

    it('should render', () => {
        const component = renderer.create(<SearchFilter {...props} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;

        beforeEach(() => {
            wrapper = shallow(<SearchFilter {...props} />);
        });

        it('should render element with search-filter class', () => {
            expect(wrapper.hasClass('search-filter')).toBeTruthy();
        });

        it('should render filter buttons in correct order', () => {
            expect(wrapper.find('Button')).toHaveLength(props.buttons.length);
            expect(wrapper.find('Button').at(0).props().label).toEqual(props.buttons[0]);
            expect(wrapper.find('Button').at(1).props().label).toEqual(props.buttons[1]);
        });

        it('should add primary class to selected filter', () => {
            props.selected = props.buttons[0];
            wrapper = shallow(<SearchFilter {...props} />);
            expect(wrapper.find('Button').at(0).hasClass('btn-primary')).toBeTruthy();
            expect(wrapper.find('Button').at(0).hasClass('btn-link')).toBeFalsy();
            expect(wrapper.find('Button').at(1).hasClass('btn-primary')).toBeFalsy();
            expect(wrapper.find('Button').at(1).hasClass('btn-link')).toBeTruthy();

            props.selected = props.buttons[1];
            wrapper = shallow(<SearchFilter {...props} />);
            expect(wrapper.find('Button').at(1).hasClass('btn-primary')).toBeTruthy();
            expect(wrapper.find('Button').at(1).hasClass('btn-link')).toBeFalsy();
            expect(wrapper.find('Button').at(0).hasClass('btn-primary')).toBeFalsy();
            expect(wrapper.find('Button').at(0).hasClass('btn-link')).toBeTruthy();
        });

        it('should call onClick callback with proper value', () => {
            wrapper.find('Button').map(e => e.simulate('click'));

            expect(props.onClick.mock.calls).toHaveLength(props.buttons.length);
            expect(props.onClick.mock.calls[0][0]).toEqual(props.buttons[0]);
            expect(props.onClick.mock.calls[1][0]).toEqual(props.buttons[1]);
        });
    });
});
