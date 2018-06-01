import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import MockRouter from 'react-mock-router';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ResultsList, { getSorted, getFiltered } from './index';
import { SORT_BY_RATING } from '../../../../actions/results';

jest.mock('../../../../components/results-count', () => 'ResultsCount');
jest.mock('../../../../components/results-sort', () => 'ResultsCount');
jest.mock('../../../../components/results-body', () => 'ResultsCount');
jest.mock('../../../../components/content', () => 'ResultsCount');
jest.mock('../../../../components/navbar', () => 'ResultsCount');
jest.mock('../../../../reducers/movie', () => 'ResultsCount');

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {};

const movies = {
    data: {
        data: [
            {
                title: 'AB',
                genres: [
                    'A', 'B', 'C'
                ],
                release_date: '2018-03-10',
                vote_average: 1
            }, {
                title: 'AB',
                genres: [
                    'A', 'B', 'C'
                ],
                release_date: '2018-03-10',
                vote_average: 1
            }, {
                title: 'BCA',
                genres: [
                    'A', 'Z', 'C'
                ],
                release_date: '2018-06-10',
                vote_average: 2
            }, {
                title: 'CBA',
                genres: [
                    'W', 'B', 'Y'
                ],
                release_date: '2014-02-10',
                vote_average: 6
            }, {
                title: 'ABZ',
                genres: [
                    'A', 'B', 'C'
                ],
                release_date: '2017-04-10',
                vote_average: 1
            }, {
                title: 'BCZ',
                genres: [
                    'A', 'Z', 'C'
                ],
                release_date: '2015-03-10',
                vote_average: 2
            }, {
                title: 'CAG',
                genres: [
                    'W', 'B', 'Y'
                ],
                release_date: '2014-02-2',
                vote_average: 6
            }, {
                title: 'CBA',
                genres: [
                    'W', 'B', 'Y'
                ],
                release_date: '2017-01-10',
                vote_average: 6
            }, {
                title: 'ABZ',
                genres: [
                    'A', 'B', 'C'
                ],
                release_date: '2018-04-10',
                vote_average: 1
            }, {
                title: 'BCZ',
                genres: [
                    'A', 'Z', 'C'
                ],
                release_date: '2015-03-10',
                vote_average: 2
            }, {
                title: 'CAG',
                genres: [
                    'W', 'B', 'Y'
                ],
                release_date: '2011-02-2',
                vote_average: 6
            }, {
                title: 'AB',
                genres: [
                    'A', 'B', 'C'
                ],
                release_date: '2013-03-10',
                vote_average: 1
            }, {
                title: 'BCA',
                genres: [
                    'A', 'Z', 'C'
                ],
                release_date: '2018-06-10',
                vote_average: 2
            },
        ]
    }
}

describe('ResultsList', () => {
    let store = null;
    let params = {};
    beforeEach(() => {
        store = mockStore({
            movies,
            results: {
                sort: SORT_BY_RATING
            }
        });
        params = {
            text: 'A',
            filter: 'title'
        }
    });

    it('should render', () => {
        const component = renderer.create(
            <MockRouter params={params}>
                <Route render={(props) => (
                    <ResultsList store={store} {...props} />
                )} />
            </MockRouter>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});
