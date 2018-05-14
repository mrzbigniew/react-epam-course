import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieYear from './movie-year';

describe('MovieYear', () => {
    it('renders', () => {
        const year = 2018;
        const component = renderer.create(<MovieYear year={year}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders element with movie-year class and correct content', () => {
        const year = 2018;
        const wrapper = shallow(<MovieYear year={year}/>);

        expect(wrapper.hasClass('movie-year')).toBeTruthy();
        expect(wrapper.text()).toEqual(year.toString());
    });
});
