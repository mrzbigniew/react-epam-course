import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Results from './results';
import {wrap} from 'module';

jest.mock('./components/results-body/results-body', () => {
    const ResultsBody = (props) => <div {...props}/>;
    return ResultsBody;
});
jest.mock('./components/results-sort/results-sort', () => {
    const ResultsSort = (props) => <div {...props}/>;
    return ResultsSort;
});
jest.mock('./components/results-count/results-count', () => {
    const ResultsCount = (props) => <div {...props}/>
    return ResultsCount;
});

describe('Results', () => {
    let movies;
    let sortConfig;

    beforeEach(() => {
        sortConfig = {
            defaultSort: 'vote_average',
            items: [
                {
                    label: 'Vote average',
                    value: 'vote_average'
                }, {
                    label: 'Release date',
                    value: 'release_date'
                }
            ]
        };
        movies = [
            {
                id: 1,
                title: 'movie 1',
                tagline: 'movie',
                vote_average: 5,
                vote_count: 10,
                release_date: '2018-10-10',
                poster_path: 'path/movie_1.jpeg',
                overview: 'movie 1 overview',
                budget: 10e6,
                revenue: 10e6 + 10e2,
                runtime: 120,
                genres: ['drama']
            }, {
                id: 2,
                title: 'movie 2',
                tagline: 'movie',
                vote_average: 8,
                vote_count: 4,
                release_date: '2018-10-11',
                poster_path: 'path/movie_2.jpeg',
                overview: 'movie 2 overview',
                budget: 10e6,
                revenue: 10e6 + 10e1,
                runtime: 135,
                genres: ['comedy']
            }, {
                id: 3,
                title: 'movie 3',
                tagline: 'movie',
                vote_average: 2,
                vote_count: 5,
                release_date: '2018-8-11',
                poster_path: 'path/movie_3.jpeg',
                overview: 'movie 3 overview',
                budget: 10e5,
                revenue: 10e5 + 10e3,
                runtime: 90,
                genres: ['drama']
            }, {
                id: 4,
                title: 'movie 4',
                tagline: 'movie',
                vote_average: 7,
                vote_count: 5,
                release_date: '2018-1-11',
                poster_path: 'path/movie_4.jpeg',
                overview: 'movie 4 overview',
                budget: 10e5,
                revenue: 10e5 + 10e3,
                runtime: 90,
                genres: ['drama']
            }

        ]
    });

    afterEach(() => {
        movies = [];
    });

    it('renders', () => {
        const component = renderer
            .create(<Results movies={movies} sortConfig={sortConfig}/>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    describe('sortChange', () => {
        it('sets state sort property', () => {
            const wrapper = shallow(<Results movies={movies} sortConfig={sortConfig}/>);

            expect(wrapper.state('sortBy')).toEqual(sortConfig.defaultSort);

            wrapper.instance().sortChange(sortConfig.items[1]);
            expect(wrapper.state('sortBy')).toEqual(sortConfig.items[1].value);
        });
    });

    describe('movieClick', () => {
        it('logs move data', () => {
            const nativeLog = console.log; // eslint-disable-line no-console
            const fn = jest.fn();
            console.log = fn // eslint-disable-line no-console
            const component = shallow(<Results movies={movies} sortConfig={sortConfig} />);

            component.instance().movieClick(movies[0]);
            expect(fn.mock.calls).toHaveLength(1);
            expect(fn.mock.calls[0][0]).toEqual(movies[0]);

            component.instance().movieClick(movies[1]);
            expect(fn.mock.calls).toHaveLength(2);
            expect(fn.mock.calls[1][0]).toEqual(movies[1]);

            component.instance().movieClick(movies[2]);
            expect(fn.mock.calls).toHaveLength(3);
            expect(fn.mock.calls[2][0]).toEqual(movies[2]);
            console.log = nativeLog; // eslint-disable-line no-console
        });
    });

    describe('getSortedMovies', () => {
        it('returns sorted movies array', () => {
            const wrapper = shallow(<Results movies={movies} sortConfig={sortConfig}/>);
            const instance = wrapper.instance();
            const sortFooFactory = (byKey) => {
                return (current, next) => {
                    return current[byKey] === next[byKey] ? 0 : (current[byKey] > next[byKey] ? 1 : -1);
                }
            }
            let excepted, sortedMovies;

            instance.sortChange(sortConfig.defaultSort);
            sortedMovies = instance.getSortedMovies();
            excepted = movies.sort(sortFooFactory(sortConfig.defaultSort));
            expect(sortedMovies).toEqual(excepted);

            instance.sortChange(sortConfig.items[0].value);
            sortedMovies = instance.getSortedMovies();
            excepted = movies.sort(sortFooFactory(sortConfig.items[0].value));
            expect(sortedMovies).toEqual(excepted);
        });
    });
});
