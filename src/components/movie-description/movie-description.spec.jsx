import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieDescription from './movie-description';

describe('MovieDescription', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieDescription description="Some description"/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should create div element contains paragraph with proper description', () => {
        const description = "test description";
        const warepper = shallow(<MovieDescription description={description}/>);

        expect(warepper.is('div')).toBeTruthy();
        expect(warepper.hasClass('movies-description')).toBeTruthy();
        expect(warepper.first('p').text()).toEqual(description);
    });
});
