'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SearchField', function () {
  var props = null;

  beforeEach(function () {
    props = {
      onChange: jest.fn(),
      placeholder: 'search for movie',
      label: 'search'
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

    it('should create element with search-field class', function () {
      expect(wrapper.hasClass('search-field')).toBeTruthy();
    });

    it('should have a label element with correct text', function () {
      expect(wrapper.find('label')).toHaveLength(1);
      expect(wrapper.find('label').at(0).text()).toEqual('Search for movie');
    });

    it('should have input element', function () {
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('input').at(0).props().placeholder).toEqual('type to search');
    });

    it('should call calbackack function on typing', function () {
      var text = 'movie';
      text.split('').forEach(function (char, index) {
        wrapper.find('input').at(0).simulate('change', {
          key: char,
          target: {
            value: text.slice(0, index + 1)
          }
        });
        expect(props.onChange.mock.calls[index][0]).toEqual(text.slice(0, index + 1));
      });

      expect(props.onChange.mock.calls).toHaveLength(text.length);
      expect(props.onChange.mock.calls[text.length - 1][0]).toEqual(text);
    });
  });
});