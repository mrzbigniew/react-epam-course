import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';


import MockRouter from 'react-mock-router';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import SearchForm from './index';
import { SET_SEARCH_RESULTS_CRITERIA } from '../../../../actions/results';
import { wrap } from 'module';
import { SET_SEARCH_TEXT } from '../../../../actions/search';

jest.mock('../../../../components/search-field', () => 'SearchField');
jest.mock('../../../../components/search-button', () => 'SearchButton');
jest.mock('../../../../components/filter-link', () => 'FilterLink');

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {};

describe('SearchForm', () => {
    let store = null;
    let routerMocks = null;

    beforeEach(() => {
        store = mockStore({
            search: {
                filter: 'title',
                text: 'text'
            }
        });
    });

    beforeEach(() => {
        routerMocks = {
            push: jest.fn()
        }
    });

    it('should render', () => {
        const component = renderer.create(
            <MockRouter {...routerMocks}>
                <Route render={(params) => (
                    <SearchForm {...params} store={store} />
                )} />
            </MockRouter>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe("wrapper", () => {
        let wrapper = null;
        let store = null;
        let routerMocks = null;
        const storeState = {
            search: {
                filter: 'title',
                text: 'text'
            }
        };

        beforeEach(() => {
            store = mockStore(storeState);
        });

        beforeEach(() => {
            routerMocks = {
                push: jest.fn()
            }
        });

        beforeEach(() => {
            wrapper = mount(
                <MockRouter {...routerMocks}>
                    <Route render={(props) => (
                        <SearchForm store={store} {...props} />
                    )} />
                </MockRouter>
            );
        });

        it('should trigger search on submitting form', () => {
            wrapper.find('form').simulate('submit');

            expect(routerMocks.push).toBeCalled();
            expect(routerMocks.push).toBeCalledWith(`/search/${storeState.search.filter} ${storeState.search.text}`);
        });

        it('should trigger search on clicking search button', () => {
            wrapper.find('SearchButton').at(0).simulate('click');

            expect(routerMocks.push).toBeCalled();
            expect(routerMocks.push).toBeCalledWith(`/search/${storeState.search.filter} ${storeState.search.text}`);
        });

        it('should dispatch setSearchText action on changing text field', () => {
            const newSearchText = 'new search text';
            wrapper.find('SearchField').at(0).props().onChange(newSearchText);

            expect(store.getActions()).toEqual([
                {
                    type: SET_SEARCH_TEXT,
                    value: newSearchText
                }
            ]);
        });
    });
});
