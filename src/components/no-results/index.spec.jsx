import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import NoResults from './index';

describe('NoResults', () => {
  it('renders', () => {
    const component = renderer.create(<NoResults />).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', () => {
    it('renders element with no-results class name', () => {
      const wrapper = shallow(<NoResults />);

      expect(wrapper.hasClass('no-results')).toBeTruthy();
    });

    it('renders content', () => {
      const exceptedContent = 'No films found';
      const wrapper = shallow(<NoResults />);

      expect(wrapper.find('span').text()).toEqual(exceptedContent);
    });
  });
});
