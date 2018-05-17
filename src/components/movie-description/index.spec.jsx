import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieDescription from './index';

describe('MovieDescription', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieDescription description="Some description"/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should create div element contains paragraph with proper description', () => {
        const description = "test description";
        const wrapper = shallow(<MovieDescription description={description}/>);

        expect(wrapper.is('div')).toBeTruthy();
        expect(wrapper.hasClass('movies-description')).toBeTruthy();
        expect(wrapper.first('p').text()).toEqual(description);
    });
});
