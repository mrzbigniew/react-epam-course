import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import ResultsCount from './index';

describe('MovieRating', () => {
    it('renders', () => {
        const moviesCount = 10;
        const component = renderer.create(<ResultsCount moviesCount={moviesCount}/>).toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should render element with results-count class and correct content', () => {
        const moviesCount = 10;
        const wrapper = shallow(<ResultsCount moviesCount={moviesCount}/>);

        expect(wrapper.hasClass('results-count')).toBeTruthy();
        expect(wrapper.text()).toEqual(`${moviesCount} movies found`);
    });

    it('should render `No movies found` if movies count equal 0', () => {
        const moviesCount = 0;
        const wrapper = shallow(<ResultsCount moviesCount={moviesCount}/>);

        expect(wrapper.text()).toEqual(`No movies found`);
    });
});
