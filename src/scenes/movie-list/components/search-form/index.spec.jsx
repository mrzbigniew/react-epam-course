import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import SearchForm from './index';
import { SET_SEARCH_RESULTS_CRITERIA } from '../../../../actions/results';
import { wrap } from 'module';
import { SET_SEARCH_TEXT } from '../../../../actions/search';

jest.mock('../../../../components/search-field', () => 'SearchField');
jest.mock('../../../../components/search-button', () => 'SearchButton');
jest.mock('../../../../components/filter-link', () => 'FilterLink');

describe('SearchForm', () => {

    it('should render', () => {
        const store = {
            getState() {
                return {
                    search: {
                        filter: '',
                        text: ''
                    }
                }
            },
            dispatch: jest.fn(),
            subscribe() {
                return () => { }
            }
        }

        const component = renderer.create(<SearchForm store={store} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;
        let store = null;
        beforeEach(() => {
            store = {
                subscribe() {
                    return () => { }
                },
                dispatch: jest.fn(),
                getState() {
                    return {
                        search: {
                            filter: 'some_filter',
                            text: 'some_text'
                        }
                    }
                }
            };
        });

        it('dispatch search properties on submitting form', () => {

            wrapper = mount(<SearchForm store={store} />);
            wrapper.find('form').at(0).simulate('submit');

            expect(store.dispatch).toBeCalled();
            expect(store.dispatch).toBeCalledWith({
                type: SET_SEARCH_RESULTS_CRITERIA,
                filter: store.getState().search.filter,
                text: store.getState().search.text
            });
        });

        it('changeling search value dispatch new search text', () => {
            wrapper = mount(<SearchForm store={store} />);
            const searchValue = 'search value';
            wrapper.find('SearchField').at(0).props().onChange(searchValue);

            expect(store.dispatch).toBeCalled();
            expect(store.dispatch).toBeCalledWith({
                type: SET_SEARCH_TEXT,
                value: searchValue
            });
        });

        it('triggers search after clicking search button', () => {
            wrapper = mount(<SearchForm store={store} />);
            wrapper.find('SearchButton').at(0).simulate('click');

            expect(store.dispatch).toBeCalled();
            expect(store.dispatch).toBeCalledWith({
                type: SET_SEARCH_RESULTS_CRITERIA,
                filter: store.getState().search.filter,
                text: store.getState().search.text
            });
        });
    });
});
