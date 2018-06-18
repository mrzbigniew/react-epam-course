import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Logo from './index';

describe('Logo', () => {
  it('renders', () => {
    const component = renderer.create(<Logo />).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', () => {
    it('renders element with logo class name', () => {
      const wrapper = shallow(<Logo />);

      expect(wrapper.hasClass('logo')).toBeTruthy();
    });

    it('renders corect logo content', () => {
      const exceptedContent = 'netflixroulette';
      const wrapper = shallow(<Logo />);

      expect(wrapper.text()).toEqual(exceptedContent);
    });
  });
});
