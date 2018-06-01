import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieDuration from './index';

describe('MovieDescription', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieDuration duration={120}/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should create div element ', () => {
        const duration = 120;
        const wrapper = shallow(<MovieDuration duration={duration}/>);

        expect(wrapper.is('span')).toBeTruthy();
        expect(wrapper.hasClass('movie-duration')).toBeTruthy();
        expect(wrapper.text()).toEqual(`${duration} min`);
    });
});
