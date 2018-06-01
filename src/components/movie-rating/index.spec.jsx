import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieRating from './index';

describe('MovieRating', () => {
    it('renders', () => {
        const rating = 10;
        const component = renderer.create(<MovieRating rating={rating}/>).toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should render element with movie-rating class and correct rating value', () => {
        const rating = 10;
        const wrapper = shallow(<MovieRating rating={rating}/>);

        expect(wrapper.hasClass('movie-rating')).toBeTruthy();
        expect(wrapper.text()).toEqual(rating.toString());
    });

    it('should render rating as 0 if no rating passed', () => {
        const exceptedRating = 0;
        const wrapper = shallow(<MovieRating rating={null}/>);

        expect(wrapper.text()).toEqual(exceptedRating.toString());
    });
});
