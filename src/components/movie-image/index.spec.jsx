import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieImage from './index';

describe('MovieImage', () => {
    it('renders', () => {
        const component = renderer
            .create(<MovieImage alt="alt" src="src" className="img"/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should create img element ', () => {
        const wrapper = shallow(<MovieImage alt="alt" src="src" className="img" />);

        expect(wrapper.is('img')).toBeTruthy();
        expect(wrapper.hasClass('img')).toBeTruthy();
        expect(wrapper.find('img').find('[src]').props().src).toEqual('src');
        expect(wrapper.find('img').find('[alt]').props().alt).toEqual('alt');
    });
});
