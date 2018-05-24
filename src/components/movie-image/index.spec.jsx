import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import MovieImage from './index';

describe('MovieImage', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieImage alt="alt" src="src" className="img" />)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    describe('wrapper', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = mount(<MovieImage alt="alt" src="src" className="img" />);
        });
        it('should create element with movie-image class', () => {
            expect(wrapper.find('.movie-image').at(0)).toBeDefined();
        });

        it('should render Cover when image is loading', () => {
            wrapper.instance().setState({
                loaded: false,
                error: false
            });
            wrapper.update();
            expect(wrapper.find('ImageCover').at(0)).toBeDefined();
            expect(wrapper.find('ImageCover').at(0).props().visible).toBeTruthy();
        });

        it('should hide cover if image is loaded', () => {
            console.log(wrapper.find('.img').at(0).props());
            wrapper.update()
            expect(wrapper.find('ImageCover').at(0)).toBeDefined();
            expect(wrapper.find('ImageCover').at(0).props().visible).toBeFalsy();
        });

        it('should render no-image cover if image fail to load', () => {
            wrapper.update();
            expect(wrapper.find('ImageCover').at(0)).toBeDefined();
            expect(wrapper.find('ImageCover').at(0).props().visible).toBeTruthy();
        });
    })
})

