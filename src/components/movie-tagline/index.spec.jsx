import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieTagline from './index';

describe('MovieTagline', () => {
  it('renders', () => {
    const tagline = 'tagline';
    const component = renderer
      .create(<MovieTagline tagline={tagline}/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render element with movie-tagline class and correct tagline value', () => {
    const tagline = 'tagline';

    const wrapper = shallow(<MovieTagline tagline={tagline}/>);

    expect(wrapper.hasClass('movie-tagline')).toBeTruthy();
    expect(wrapper.text()).toEqual(tagline);
  });
});
