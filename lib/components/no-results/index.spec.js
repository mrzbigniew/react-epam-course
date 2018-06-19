'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NoResults', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, null)).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    it('renders element with no-results class name', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));

      expect(wrapper.hasClass('no-results')).toBeTruthy();
    });

    it('renders content', function () {
      var exceptedContent = 'No films found';
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));

      expect(wrapper.find('span').text()).toEqual(exceptedContent);
    });
  });
});