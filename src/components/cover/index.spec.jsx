import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import Cover from './index';

// jest.mock('../spinner', () => 'Spinner');

describe('Cover', () => {
  it('renders', () => {
    const store = {
      getState: () => ({
        spinner: false,
      }),
      dispatch: () => {},
      subscribe: () => {},
    };
    const component = renderer.create(<Cover store={store} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('sets display to flex if state spinner is true', () => {
    const store = {
      getState: () => ({
        spinner: true,
      }),
      dispatch: () => {},
      subscribe: () => {},
    };
    const wrapper = mount(<Cover store={store} />);
    expect(wrapper.find('div').at(0).props().style.display).toEqual('flex');
  });

  it('sets display to none if state spinner is true', () => {
    const store = {
      getState: () => ({
        spinner: false,
      }),
      dispatch: () => {},
      subscribe: () => {},
    };
    const wrapper = mount(<Cover store={store} />);
    expect(wrapper.find('div').at(0).props().style.display).toEqual('none');
  });
});
