import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieDetails from './index';

jest.mock('../../../../components/movie-title', () => 'MovieTitle');
jest.mock('../../../../components/movie-cover', () => 'MovieCover');
jest.mock('../../../../components/movie-rating', () => 'MovieRating');
jest.mock('../../../../components/movie-tagline', () => 'MovieTagline');
jest.mock('../../../../components/movie-year', () => 'MovieYear');
jest.mock('../../../../components/movie-duration', () => 'MovieDuration');
jest.mock('../../../../components/movie-description', () => 'MovieDescription');

describe('MovieDetails', () => {
    it('should render', async () => {
        const component = renderer.create(<MovieDetails />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
