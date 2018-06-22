import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MovieTitle from './index';

describe('MovieTitle', () => {
  it('renders', () => {
    const movieTitle = 'title';
    const component = renderer.create(<MovieTitle title={movieTitle}/>).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('creates element with movie-title class and correct tittle', () => {
    const title = 'title';
    const wrapper = shallow(<MovieTitle title={title} />);

    expect(wrapper.hasClass('movie-title')).toBeTruthy();
    expect(wrapper.text()).toEqual(title);
  });
});
