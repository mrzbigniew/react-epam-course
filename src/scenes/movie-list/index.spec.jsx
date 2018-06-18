import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieList from './index';

jest.mock('../../components/container', () => 'Container');
jest.mock('../../components/header', () => 'Header');
jest.mock('../../components/footer', () => 'Footer');
jest.mock('../../components/content', () => 'Content');
jest.mock('../../components/logo', () => 'Logo');
jest.mock('./components/search-form', () => 'SearchForm');
jest.mock('./components/results-list', () => 'ResultsList');

describe('MovieList', () => {
  it('should render', async () => {
    const component = renderer.create(<MovieList />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
