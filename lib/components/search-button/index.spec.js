'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../button', function () {
  return 'Button';
});

describe('ResultsItem', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      onClick: jest.fn()
    };
  });

  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, props));

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = null;

    beforeEach(function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
    });

    it('should have search-button class', function () {
      expect(wrapper.hasClass('search-button')).toBeTruthy();
    });

    it('should renders Button as child element', function () {
      expect(wrapper.find('Button')).toHaveLength(1);
      expect(wrapper.find('Button').at(0).props().label).toEqual('search');
    });

    it('should trigger callback method when clicking button', function () {
      wrapper.find('Button').at(0).simulate('click');

      expect(props.onClick.mock.calls).toHaveLength(1);
    });
  });
});