import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ResultsSort from './index';

jest.mock('../button', () => 'Button');

describe('ResultsSort', () => {
    let props = null;

    beforeEach(() => {
        props = {
            sortItems: ['sort1', 'sort2'],
            onClick: jest.fn(),
            sortBy: 'sort1'
        };
    });

    it('should render', () => {
        const component = renderer.create(<ResultsSort {...props} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<ResultsSort {...props} />);
        });

        it('should render element with results-sort class', () => {
            expect(wrapper.hasClass('results-sort')).toBeTruthy();
        });

        it('should renders sort items buttons', () => {
            expect(wrapper.find('Button')).toHaveLength(props.sortItems.length);
            expect(wrapper.find('Button').at(0).props().label).toEqual(props.sortItems[0].replace(/[^a-zA-Z0-9]+/g, ' '));
            expect(wrapper.find('Button').at(1).props().label).toEqual(props.sortItems[1].replace(/[^a-zA-Z0-9]+/g, ' '));
        });

        it('should set success class on selected item', () => {
            props.sortBy = props.sortItems[0];

            wrapper = shallow(<ResultsSort {...props}/>);
            expect(wrapper.find('Button').at(0).hasClass('btn-success')).toBeTruthy();
            expect(wrapper.find('Button').at(0).hasClass('btn-link')).toBeFalsy();
            expect(wrapper.find('Button').at(1).hasClass('btn-success')).toBeFalsy();
            expect(wrapper.find('Button').at(1).hasClass('btn-link')).toBeTruthy();

            props.sortBy = props.sortItems[1];
            wrapper = shallow(<ResultsSort {...props}/>);
            expect(wrapper.find('Button').at(1).hasClass('btn-success')).toBeTruthy();
            expect(wrapper.find('Button').at(1).hasClass('btn-link')).toBeFalsy();
            expect(wrapper.find('Button').at(0).hasClass('btn-success')).toBeFalsy();
            expect(wrapper.find('Button').at(0).hasClass('btn-link')).toBeTruthy();
        });

        it('should trigger onClick calback', () => {
            wrapper.find('Button').at(0).simulate('click');
            wrapper.find('Button').at(1).simulate('click');

            expect(props.onClick.mock.calls).toHaveLength(2);
            expect(props.onClick.mock.calls[0][0]).toEqual(props.sortItems[0]);
            expect(props.onClick.mock.calls[1][0]).toEqual(props.sortItems[1]);
        });
    });
});
