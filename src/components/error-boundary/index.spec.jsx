import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from './index';

describe('renders', () => {
  it('should render', () => {
    const component = renderer.create(<ErrorBoundary><div></div></ErrorBoundary>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders error when child fails to render', () => {
    const BadComponent = () => {
      throw new Error('error');
    };
        const nativeConsoleError = console.error; // eslint-disable-line
    const error = jest.fn();
        console.error = error;  // eslint-disable-line

    const wrapper = mount(<ErrorBoundary><BadComponent /></ErrorBoundary>);
        console.error = nativeConsoleError; // eslint-disable-line
    expect(wrapper.instance().state.error).toBeTruthy();
    expect(wrapper.instance().state.error.message).toEqual('error');
  });
});
