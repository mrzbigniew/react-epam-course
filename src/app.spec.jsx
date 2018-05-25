import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './app';

jest.mock('./components/error-boundary', () => 'ErrorBoundary');
jest.mock('./scenes/movie-list', () => 'MovieList');
jest.mock('./components/cover', () => 'Cover');

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {};

describe('App', () => {
    it('renders', () => {
        fetch.mockResponseOnce(JSON.stringify({
            data: [],
            total: ''
         }));
        const store = mockStore({
            movies: {
                data: {
                    data: []
                }
            }
        });

        const component = renderer.create(<App store={store} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let movies;
        let store;
        let wrapper;

        beforeEach(() => {
            fetch.resetMocks();
        });

        beforeEach(() => {
            movies = {
                data: {
                    data: [ {
                            title: 'movie 1'
                        }, {
                            title: 'movie 2'
                        }
                    ]
                }
            };
        });

        beforeEach(() => {
            store = mockStore({
                movies
            });
        });

        it("should not dispatch loadMovies action if movies are loaded", () => {
            fetch.mockResponseOnce(JSON.stringify({
                data: {
                    data: [{
                        tittle: 'title 1'
                    }, {
                        tittle: 'title 2'
                    }],
                    total: 10
                }
            }));

            wrapper = mount(<App store={store} />);

            expect(store.getActions()).toEqual([]);
        });
    });
});
