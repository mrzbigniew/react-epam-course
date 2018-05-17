import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieCover from './index';

jest.mock('../movie-image', () => 'img');

describe('MovieCover', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieCover/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should create img element with movie-cover class name', () => {
        const alt = `alternative image text`;
        const src = `/path/to/image.jpg`;
        const movieCover = shallow(<MovieCover src={src} alt={alt}/>);
        expect(movieCover.is('img')).toBeTruthy();
        expect(movieCover.hasClass('movie-cover')).toBeTruthy();
        expect(movieCover.find('img').find('[src]').props().src).toEqual(src);
        expect(movieCover.find('img').find('[alt]').props().alt).toEqual(alt);
    });
});
