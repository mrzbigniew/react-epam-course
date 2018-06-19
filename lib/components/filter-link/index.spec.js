'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _search = require('../../actions/search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FilterLink', function () {
  var store = void 0;

  beforeEach(function () {
    store = {
      getState: function getState() {
        return {
          search: {
            filter: 'filter'
          }
        };
      },
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
  });

  it('renders', function () {
    var component1 = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { store: store, filter: 'filter' }));
    expect(component1.toJSON()).toMatchSnapshot();
  });

  it('Clicking into link dispatch search action', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { store: store, filter: 'other' }));

    wrapper.find('Link').at(0).simulate('click');

    expect(store.dispatch).toBeCalled();
    expect(store.dispatch).toBeCalledWith({
      type: _search.SET_SEARCH_FILTER,
      value: 'other'
    });
  });
});