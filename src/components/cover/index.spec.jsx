import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

import Cover from './index';


jest.mock('../spinner', () => 'Spinner');

describe('Cover', () => {
    let store;
    beforeEach(() => {
        store = {
            getState: () => ({
                spinner: false
            }),
            dispatch: () => {},
            subscribe: () => {}
        }
    });

    it('renders', () => {
        const component = renderer.create(<Cover store={store} />);
        expect(component.toJSON()).toMatchSnapshot();

        store.getState = () => ({
            spinner: true
        });
        const component2 = renderer.create(<Cover store={store} />);
        expect(component2.toJSON()).toMatchSnapshot();
    });
});
