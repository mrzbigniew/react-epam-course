import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ResultsList from './index';

jest.mock('../../../../components/results-body', () => 'ResultsBody');
jest.mock('../../../../components/content', () => 'Content');
jest.mock('../../../../components/navbar', () => 'Navbar');
jest.mock('../../../../components/results-genre-info', () => 'ResultsGenreInfo');

describe('ResultsList', () => {
    it('should render', async () => {
        const component = renderer.create(<ResultsList />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;

        beforeEach(() => {
            wrapper = shallow(<ResultsList />);
        });

        it('should call callback method on movie click', () => {
            const originalConsoleLog = console.log;
            const mockFoo = jest.fn();
            const movie = {
                name: 'A'
            }
            console.log = mockFoo;
            wrapper.find('ResultsBody').at(0).prop('onMovieClick')(movie);
            console.log = originalConsoleLog;
            expect(mockFoo).toHaveBeenCalled();
            expect(mockFoo.mock.calls[0][0]).toEqual('movieClick');
            expect(mockFoo.mock.calls[0][1]).toEqual(movie);
        });
    });
});
