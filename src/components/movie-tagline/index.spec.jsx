import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import MovieTagline from './movie-tagline';

describe('MovieTagline', () => {
    it('renders', () => {
        const tagline = "tagline";
        const component = renderer
            .create(<MovieTagline tagline={tagline}/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('requires tagline attribute', () => {
        const oldConsoleError = console.error; // eslint-disable-line no-console

        console.error = (message) => { // eslint-disable-line no-console
            throw new Error(message);
        };

        const foo = () => {
            return shallow(<MovieTagline />);
        };
        expect(foo).toThrowError();
        console.error = oldConsoleError; // eslint-disable-line no-console
    });

    it('should render element with movie-tagline class and correct tagline value', () => {
        const tagline = 'tagline';

        const wrapper = shallow(<MovieTagline tagline={tagline}/>);

        expect(wrapper.hasClass('movie-tagline')).toBeTruthy();
        expect(wrapper.text()).toEqual(tagline);
    });
});
