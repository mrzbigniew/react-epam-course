import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import ImageCover from './index';

describe('ImageCover', () => {
  const props = {
    visible: true,
  };
  it('renders', () => {
    const component = renderer.create(<ImageCover {...props}>test</ImageCover>).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe('wrapper', () => {
    let wrapper = null;
    beforeEach(() => {
      wrapper = null;
    });

    it('should create element with image-cover class', () => {
      wrapper = shallow(<ImageCover {...props}>test</ImageCover>);
      expect(wrapper.hasClass('image-cover')).toBeTruthy();
    });

    it('should react on visible property', () => {
      wrapper = shallow(<ImageCover {...props}>test</ImageCover>);
      expect(wrapper.props().style.display).toEqual('flex');
      wrapper.setProps({
        visible: false,
      });
      expect(wrapper.props().style.display).toEqual('none');
    });
  });
});
