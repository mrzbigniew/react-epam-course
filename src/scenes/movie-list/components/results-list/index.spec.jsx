import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ResultsList from './index';
import { RaceSubscriber } from 'rxjs/observable/race';

jest.mock('../../../../components/results-count', () => 'ResultsCount');
jest.mock('../../../../components/results-sort', () => 'ResultsSort');
jest.mock('../../../../components/results-body', () => 'ResultsBody');
jest.mock('../../../../components/content', () => 'Content');
jest.mock('../../../../components/navbar', () => 'Navbar');

describe('ResultsList', () => {
    it('should render', () => {
        const component = renderer.create(<ResultsList />);

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
            wrapper = shallow(<ResultsList />);
        });

        afterEach(() => {
            console.log = originalConsoleLog;
        });

        it('sortByClick: works', () => {
            wrapper.instance().sortByClick(wrapper.instance().sortItems[0]);
            expect(mockFoo).toBeCalled();
            expect(mockFoo).toBeCalledWith('sortByClick', wrapper.instance().sortItems[0]);
            expect(wrapper.instance().sortBy).toEqual(wrapper.instance().sortItems[0]);

            mockFoo.mockClear();
            wrapper.instance().sortByClick(wrapper.instance().sortItems[1]);
            expect(mockFoo).toBeCalled();
            expect(mockFoo).toBeCalledWith('sortByClick', wrapper.instance().sortItems[1]);
            expect(wrapper.instance().sortBy).toEqual(wrapper.instance().sortItems[1]);
        });

        it('movieClick: works', () => {
            const movie = {
                name: 'A'
            }
            wrapper.instance().movieClick(movie);
            expect(mockFoo).toBeCalled();
            expect(mockFoo).toBeCalledWith('movieClick', movie);
        });
    });
});
