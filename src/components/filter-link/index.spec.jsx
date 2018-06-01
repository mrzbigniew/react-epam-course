import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import FilterLink from './index';
import { SET_SEARCH_FILTER } from '../../actions/search';

describe('FilterLink', () => {
    let store;

    beforeEach(() => {
        store = {
            getState: () => ({
                search: {
                    filter: 'filter'
                }
            }),
            dispatch: jest.fn(),
            subscribe: jest.fn()
        }
    });

    it('renders', () => {
        const component1 = renderer.create(<FilterLink store={store} filter={`filter`} />);
        expect(component1.toJSON()).toMatchSnapshot();
    });

    it('Clicking into link dispatch search action', () => {
        const wrapper = mount(<FilterLink store={store} filter={'other'} />);

        wrapper.find('Link').at(0).simulate('click');

        expect(store.dispatch).toBeCalled();
        expect(store.dispatch).toBeCalledWith({
            type: SET_SEARCH_FILTER,
            value: 'other'
        });
    });
});
