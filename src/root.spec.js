import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Root from './root';

jest.mock('./app', () => 'App');

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {};

describe('Root', () => {
    it('should render', () => {
        const store = mockStore({
            movies: {
                data: {
                    data: []
                }
            }
        });

        const component = renderer.create(<Root store={store} persistor={store}/>);

        expect(component.toJSON).toMatchSnapshot();
    });
});
