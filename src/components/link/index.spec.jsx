import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Link from './index';

describe('Link', () => {
  const props = {
    onClick: jest.fn(),
    active: true,
  };
  it('renders', () => {
    const component = renderer.create(<Link {...props}>test</Link>).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe('wrapper', () => {
    let wrapper = null;
    beforeEach(() => {
      wrapper = null;
    });

    it('renders correct elements', () => {
      wrapper = shallow(<Link {...props}>link</Link>);
      expect(wrapper.find('.btn-success')).toHaveLength(1);
      expect(wrapper.find('.btn-text')).toHaveLength(0);
      wrapper.setProps({
        ...props,
        active: false,
      });
      expect(wrapper.find('.btn-success')).toHaveLength(0);
      expect(wrapper.find('.btn-text')).toHaveLength(1);

      expect(props.onClick.mock.calls).toHaveLength(0);
      wrapper.find('.btn-text').simulate('click', { preventDefault: () => {} });
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
