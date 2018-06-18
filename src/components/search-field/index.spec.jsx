import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchField from './index';

describe('SearchField', () => {
  let props = null;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      placeholder: 'search for movie',
      label: 'search',
    };
  });

  it('should render', () => {
    const component = renderer.create(<SearchField {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', () => {
    let wrapper = null;

    beforeEach(() => {
      wrapper = shallow(<SearchField {...props} />);
    });

    it('should create element with search-field class', () => {
      expect(wrapper.hasClass('search-field')).toBeTruthy();
    });

    it('should have a label element with correct text', () => {
      expect(wrapper.find('label')).toHaveLength(1);
      expect(wrapper.find('label').at(0).text()).toEqual('Search for movie');
    });

    it('should have input element', () => {
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('input').at(0).props().placeholder).toEqual('type to search');
    });

    it('should call calbackack function on typing', () => {
      const text = 'movie';
      text.split('').forEach((char, index) => {
        wrapper.find('input').at(0).simulate('change', {
          key: char,
          target: {
            value: text.slice(0, index + 1),
          },
        });
        expect(props.onChange.mock.calls[index][0]).toEqual(text.slice(0, index + 1));
      });

      expect(props.onChange.mock.calls).toHaveLength(text.length);
      expect(props.onChange.mock.calls[text.length - 1][0]).toEqual(text);
    });
  });
});
