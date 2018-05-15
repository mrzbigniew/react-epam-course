import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieCover from './movie-cover';

jest.mock('./../../../components/movie-image/movie-image', () => 'img');

describe('MovieCover', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieCover/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should create img element with movie-cover class name', () => {
        const movieCover = shallow(<MovieCover src="src" alt="alt"/>);
        expect(movieCover.is('img')).toBeTruthy();
        expect(movieCover.hasClass('movie-cover')).toBeTruthy();
    });
});
