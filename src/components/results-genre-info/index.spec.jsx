import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ResultsGenreInfo from './index';

describe('ResultsGenreInfo', () => {
  it('renders', () => {
    const genre = 'drama';
    const component = renderer.create(<ResultsGenreInfo genre={genre} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('creates element with results-genre-info class and correct genre', () => {
    const genre = 'genre';
    const wrapper = shallow(<ResultsGenreInfo genre={genre} />);

    expect(wrapper.hasClass('results-genre-info')).toBeTruthy();
    expect(wrapper.text()).toEqual(`Films by ${genre} genre`);
  });
});
