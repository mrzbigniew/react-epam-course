'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _results = require('../../actions/results');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../button', function () {
  return 'Button';
});

describe('ResultsSort', function () {
  var props = null;
  var store = null;
  beforeEach(function () {
    store = {
      getState: function getState() {
        return {
          results: {
            sort: 'sort'
          }
        };
      },

      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
  });

  beforeEach(function () {
    props = {
      value: 'sort',
      store: store
    };
  });

  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, props));

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = void 0;

    beforeEach(function () {
      wrapper = null;
    });

    it('render span if is active', function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));

      expect(wrapper.find('span').at(0)).toHaveLength(1);
      expect(wrapper.find('button').at(0)).toHaveLength(0);
    });

    it('render button if is not active', function () {
      var store2 = _extends({}, store, {
        getState: function getState() {
          return {
            results: {
              sort: 'other'
            }
          };
        }
      });
      var props2 = _extends({}, props, {
        store: store2
      });

      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props2));

      expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('clicking on button fires dispatch', function () {
      var store2 = _extends({}, store, {
        getState: function getState() {
          return {
            results: {
              sort: 'other'
            }
          };
        }
      });
      var props2 = _extends({}, props, {
        store: store2
      });

      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props2));
      wrapper.find('Button').simulate('click');
      expect(props2.store.dispatch).toHaveBeenCalled();
      expect(props2.store.dispatch).toHaveBeenLastCalledWith({
        type: _results.SET_SEARCH_RESULTS_SORT_ORDER,
        value: props2.value
      });
    });
  });
});