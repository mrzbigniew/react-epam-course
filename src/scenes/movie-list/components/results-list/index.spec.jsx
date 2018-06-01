import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import ResultsList, { getSorted, getFiltered } from './index';
import { RaceSubscriber } from 'rxjs/observable/race';
import { SEARCH_BY_TITLE, SEARCH_BY_GENRE } from '../../../../actions/search';
import { SORT_BY_RELEASE_DATE, SORT_BY_RATING } from '../../../../actions/results';

jest.mock('../../../../components/results-count', () => 'ResultsCount');
jest.mock('../../../../components/results-sort', () => 'ResultsSort');
jest.mock('../../../../components/results-body', () => 'ResultsBody');
jest.mock('../../../../components/content', () => 'Content');
jest.mock('../../../../components/navbar', () => 'Navbar');

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

const results = {
    criteria: {
        filter: SEARCH_BY_TITLE,
        text: ''
    },
    sort: SORT_BY_RELEASE_DATE
}

describe('ResultsList', () => {
    let store = null;

    beforeEach(() => {
        store = {
            getState() {
                return {
                    movies,
                    results
                }
            },
            dispatch: () => { },
            subscribe: () => { }
        }
    });

    it('should render', () => {
        const component = renderer.create(<ResultsList store={store} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper = null;
        it('should generate array on pasing props', () => {
            wrapper = mount(<ResultsList store={store} sort={SORT_BY_RELEASE_DATE} />);
            expect(wrapper.find('ResultsBody').at(0).props().movies).toHaveLength(0);
        });

        it('should set movies filtered by title', () => {
            const store2 = {
                ...store,
                getState: () => ({
                    movies,
                    results: {
                        criteria: {
                            filter: SEARCH_BY_TITLE,
                            text: 'B'
                        },
                        sort: SORT_BY_RATING
                    }
                })
            };

            wrapper = mount(<ResultsList store={store2} />);
            const expected = getSorted(
                getFiltered(movies.data.data, SEARCH_BY_TITLE, 'B'),  SORT_BY_RATING
            );
            expect(wrapper.find('ResultsBody').at(0).props().movies).toHaveLength(expected.length);
            expect(wrapper.find('ResultsBody').at(0).props().movies).toEqual(expected);
        });

        it('should set movies filtered by genree', () => {
            const store2 = {
                ...store,
                getState: () => ({
                    movies,
                    results: {
                        criteria: {
                            filter: SEARCH_BY_GENRE,
                            text: 'A'
                        },
                        sort: SORT_BY_RELEASE_DATE
                    }
                })
            };

            wrapper = mount(<ResultsList store={store2}  />);
            const expected = getSorted(
                getFiltered(movies.data.data, SEARCH_BY_GENRE, 'A'), SORT_BY_RELEASE_DATE
            );
            expect(wrapper.find('ResultsBody').at(0).props().movies).toHaveLength(expected.length);
            expect(wrapper.find('ResultsBody').at(0).props().movies).toEqual(expected);
        });

        it('sort', () => {
            const store2 = {
                ...store,
                getState: () => ({
                    movies,
                    results: {
                        criteria: {
                            filter: SEARCH_BY_GENRE,
                            text: 'C'
                        },
                        sort: SORT_BY_RATING
                    },

                })
            };

            wrapper = mount(<ResultsList store={store2} />);
            const expected = getSorted(
                getFiltered(movies.data.data, SEARCH_BY_GENRE, 'C'), SORT_BY_RATING
            );
            expect(wrapper.find('ResultsBody').at(0).props().movies).toHaveLength(expected.length);
            expect(wrapper.find('ResultsBody').at(0).props().movies).toEqual(expected);
        });
    });
});
