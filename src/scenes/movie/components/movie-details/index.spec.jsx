import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MockRouter from 'react-mock-router';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MovieDetails from './index';

jest.mock('../../../../components/movie-title', () => 'MovieTitle');
jest.mock('../../../../components/movie-cover', () => 'MovieCover');
jest.mock('../../../../components/movie-rating', () => 'MovieRating');
jest.mock('../../../../components/movie-tagline', () => 'MovieTagline');
jest.mock('../../../../components/movie-year', () => 'MovieYear');
jest.mock('../../../../components/movie-duration', () => 'MovieDuration');
jest.mock('../../../../components/movie-description', () => 'MovieDescription');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('MovieDetails', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      movies: {
        data: {
          data: [
            {
              id: 1,
              title: 'movie 1',
              genres: [
                'drama',
              ],
              poster_path: '/poster.jpg',
            }, {
              id: 2,
              title: 'movie 2',
              genres: [
                'drama',
              ],
              poster_path: '/poster.jpg',
            }, {
              id: 3,
              title: 'movie 3',
              genres: [
                'drama',
              ],
              poster_path: '/poster.jpg',
            },
          ],
        },
      },
    });
  });
  it('should render', async () => {
    const component = renderer.create(<MockRouter params={{
                id: '1',
            }}>
                <Route render={props => (
                    <MovieDetails store={store} {...props} />
                )}/>
            </MockRouter >);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
