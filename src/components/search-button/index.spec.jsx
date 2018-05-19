import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchButton from './index';

jest.mock('../button', () => 'Button');

describe('ResultsItem', () => {
    let props;

    beforeEach(() => {
        props = {
            onClick: jest.fn()
        };
    });

    it('should render', () => {
        const component = renderer.create(<SearchButton {...props} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;

        beforeEach(() => {
            wrapper = shallow(<SearchButton {...props} />);
        });

        it('should have search-button class', () => {
            expect(wrapper.hasClass('search-button')).toBeTruthy();
        });

        it('should renders Button as child element', () => {
            expect(wrapper.find('Button')).toHaveLength(1);
            expect(wrapper.find('Button').at(0).props().label).toEqual('search');
        });

        it('should trigger callback method when clicking button', () => {
            wrapper.find('Button').at(0).simulate('click');

            expect(props.onClick.mock.calls).toHaveLength(1);
        });
    });
});
