import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchForm from './index';

jest.mock('../../../../components/search-field', () => 'SearchField');
jest.mock('../../../../components/search-filter', () => 'SearchFilter');
jest.mock('../../../../components/search-button', () => 'SearchButton');

describe('SearchForm', () => {
    it('should render', () => {
        const component = renderer.create(<SearchForm />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;
        let mockFoo = null;
        let originalConsoleLog;

        beforeEach(() => {
            originalConsoleLog = console.log;
        });

        beforeEach(() => {
            mockFoo = jest.fn();
            console.log = mockFoo;
        });

        beforeEach(() => {
            wrapper = shallow(<SearchForm />);
        });

        afterEach(() => {
            console.log = originalConsoleLog;
        });

        beforeEach(() => {
            wrapper = shallow(<SearchForm />);
        });

        it('searchFieldChange: works', () => {
            let expected = 'some text';
            let key = 's';
            wrapper.instance().searchFieldChange(expected, key);
            expect(mockFoo).toBeCalled();
            expect(mockFoo).toBeCalledWith('searchFieldChange', expected, key);

            mockFoo.mockClear();
            const spy = jest.spyOn(wrapper.instance(), 'triggerSearch');

            wrapper.instance().searchFieldChange(expected, 'Enter');
            expect(spy).toBeCalled();
            expect(mockFoo.mock.calls[1][0]).toEqual('search');
        });

        it('searchFilterChange: works', () => {
            let expected = 'title';
            wrapper.instance().searchFilterChange(expected);
            expect(mockFoo).toBeCalled();
            expect(mockFoo).toBeCalledWith('searchFilterChange', expected);
        });

        it('searchButtonClick: works', () => {
            wrapper.instance().searchButtonClick();
            expect(mockFoo).toBeCalled();
            expect(mockFoo).toBeCalledWith('searchButtonClick');
        });

    });
});
