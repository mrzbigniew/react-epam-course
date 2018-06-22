import React from 'react';
import renderer from 'react-test-renderer';

import Movie from './index';

jest.mock('../../components/container', () => 'Container');
jest.mock('../../components/header', () => 'Header');
jest.mock('../../components/footer', () => 'Footer');
jest.mock('../../components/content', () => 'Content');
jest.mock('../../components/logo', () => 'Logo');
jest.mock('./components/back-to-search', () => 'BackToSearch');
jest.mock('./components/movie-details', () => 'MovieDetails');
jest.mock('./components/results-list', () => 'ResultsList');

describe('Movie', () => {
  it('should render', () => {
    const component = renderer.create(<Movie />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
