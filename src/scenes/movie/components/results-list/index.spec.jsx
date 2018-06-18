import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MockRouter from 'react-mock-router';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ResultsList from './index';

jest.mock('../../../../components/results-body', () => 'ResultsBody');
jest.mock('../../../../components/content', () => 'Content');
jest.mock('../../../../components/navbar', () => 'Navbar');
jest.mock('../../../../components/results-genre-info', () => 'ResultsGenreInfo');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('ResultsList', () => {
  it('should render', async () => {
    const store = mockStore({
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

    const component = renderer.create(<MockRouter params={{
                id: '1',
            }}>
                <Route render={props => (
                    <ResultsList store={store} {...props} />
                )}/>
            </MockRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
