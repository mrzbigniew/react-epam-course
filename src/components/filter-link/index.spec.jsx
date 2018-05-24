import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import FilterLink from './index';

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

    it('wrapper', () => {
        const wrapper = shallow(<FilterLink store={store} filter={'other'} />);

        wrapper.find('.btn-success').at(0).simulate('click');
        expect(store.dispatch).toBeCalled();
    });
});
