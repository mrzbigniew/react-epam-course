'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {
  it('renders gracefully', function () {
    var onClick = jest.fn();
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index2.default,
      { onClick: onClick, className: 'btn' },
      'label'
    ));

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('wraper', function () {
    var wrapper = void 0;
    var props = void 0;
    var label = 'label';

    beforeEach(function () {
      props = {
        onClick: jest.fn(),
        className: 'btn btn-primary'
      };
    });

    beforeEach(function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        props,
        label
      ));
    });

    it('is a button', function () {
      expect(wrapper.is('button')).toBeTruthy();
    });

    it('have correct class', function () {
      expect(wrapper.hasClass(props.className)).toBeTruthy();
    });

    it('have correct label', function () {
      expect(wrapper.text()).toEqual(label);
    });

    it('run onClick function when clicked', function () {
      wrapper.simulate('click');
      expect(props.onClick.mock.calls).toHaveLength(1);
    });
  });
});