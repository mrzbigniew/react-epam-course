import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import ResultsSort from './index';
import { SET_SEARCH_RESULTS_SORT_ORDER } from '../../actions/results';

jest.mock('../button', () => 'Button');

describe('ResultsSort', () => {
  let props = null;
  let store = null;
  beforeEach(() => {
    store = {
      getState() {
        return {
          results: {
            sort: 'sort',
          },
        };
      },
      dispatch: jest.fn(),
      subscribe: jest.fn(),
    };
  });

  beforeEach(() => {
    props = {
      value: 'sort',
      store,
    };
  });

  it('should render', () => {
    const component = renderer.create(<ResultsSort {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = null;
    });

    it('render span if is active', () => {
      wrapper = mount(<ResultsSort {...props} />);

      expect(wrapper.find('span').at(0)).toHaveLength(1);
      expect(wrapper.find('button').at(0)).toHaveLength(0);
    });

    it('render button if is not active', () => {
      const store2 = {
        ...store,
        getState: () => ({
          results: {
            sort: 'other',
          },
        }),
      };
      const props2 = {
        ...props,
        store: store2,
      };

      wrapper = mount(<ResultsSort {...props2} />);

      expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('clicking on button fires dispatch', () => {
      const store2 = {
        ...store,
        getState: () => ({
          results: {
            sort: 'other',
          },
        }),
      };
      const props2 = {
        ...props,
        store: store2,
      };

      wrapper = mount(<ResultsSort {...props2} />);
      wrapper.find('Button').simulate('click');
      expect(props2.store.dispatch).toHaveBeenCalled();
      expect(props2.store.dispatch).toHaveBeenLastCalledWith({
        type: SET_SEARCH_RESULTS_SORT_ORDER,
        value: props2.value,
      });
    });
  });
});
