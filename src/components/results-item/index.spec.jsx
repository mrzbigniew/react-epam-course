import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ResultsItem from './index';

jest.mock('../movie-image', () => 'MovieImage');

describe('ResultsItem', () => {
  let props = null;

  beforeEach(() => {
    props = {
      poster_path: '/image.jpg',
      title: 'movie 1',
      release_year: '2018',
      genre: 'Drama',
      onClick: jest.fn(),
    };
  });

  it('should render', () => {
    const component = renderer.create(<ResultsItem {...props} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', () => {
    let wrapper = null;

    beforeEach(() => {
      wrapper = shallow(<ResultsItem {...props} />);
    });

    it('should create element with result-item class', () => {
      expect(wrapper.hasClass('result-item')).toBeTruthy();
    });

    it('should have image element with proper attributes', () => {
      expect(wrapper.find('MovieImage')).toHaveLength(1);
      expect(wrapper.find('MovieImage').hasClass('image')).toBeTruthy();
      expect(wrapper.find('MovieImage').props().src).toEqual(props.poster_path);
      expect(wrapper.find('MovieImage').props().alt).toEqual(props.title);
    });

    it('should have element with title', () => {
      expect(wrapper.find('div').at(2).find('span').at(0)
        .text()).toEqual(props.title);
    });

    it('should have element with release year', () => {
      expect(wrapper.find('div').at(2).find('span').at(1)
        .text()).toEqual(props.release_year);
    });

    it('should have element witch genre', () => {
      expect(wrapper.find('div').at(3).text()).toEqual(props.genre);
    });

    it('should run click callback', () => {
      wrapper.simulate('click');
      expect(props.onClick.mock.calls).toHaveLength(1);
    });
  });
});
