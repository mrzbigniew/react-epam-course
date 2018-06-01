import React from 'react';
import renderer from 'react-test-renderer';
import { shallow,  } from 'enzyme';

import ResultsBody from './index';
import { wrap } from 'module';

jest.mock('../results-item', () => 'ResultsItem');
jest.mock('../no-results', () => 'NoResults');

describe('ResultsBody', () => {
    let props;

    beforeEach(() => {
        props = {
            movies: [
                {
                    id: 1,
                    poster_path: '/image1.jpg',
                    title: 'movie 1',
                    genres: [
                        'drama'
                    ],
                    release_date: '2018-10-10',
                }, {
                    id: 2,
                    poster_path: '/image2.jpg',
                    title: 'movie 2',
                    genres: [
                        'comedy'
                    ],
                    release_date: '2017-01-01',
                },
            ],
            onMovieClick: jest.fn()
        }

    });

    it('should render', () => {
        const component = renderer.create(<ResultsBody {...props} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<ResultsBody {...props} />);
        });

        it('should render element with results-body class name', () => {
            expect(wrapper.hasClass('results-body')).toBeTruthy();
        });

        it('should render ResultItems', () => {
            expect(wrapper.find('ResultsItem')).toHaveLength(props.movies.length);
        });

        it('should emit movie data when clicking on movie item', () => {
            wrapper.find('ResultsItem').forEach(
                item => item.simulate('click')
            );

            const emittedData = [];

            props.onMovieClick.mock.calls.forEach(
                data => {
                    emittedData.push(data[0]);
                }
            );

            expect(props.onMovieClick.mock.calls).toHaveLength(props.movies.length);
            expect(emittedData).toHaveLength(props.movies.length);
            emittedData.forEach(
                (data, index) => expect(data).toEqual(props.movies[index])
            );
        });

        it('should render NoResults if no movies provided', () => {
            const props2 = {
                movies: [],
                onMovieClick: jest.fn()
            }
            const wrapper2 = shallow(<ResultsBody {...props2} />);
            expect(wrapper2.find('NoResults')).toHaveLength(1);
        });
    });
});
