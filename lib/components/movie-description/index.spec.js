'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieDescription', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { description: 'Some description' })).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should create div element contains paragraph with proper description', function () {
    var description = 'test description';
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { description: description }));

    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.hasClass('movies-description')).toBeTruthy();
    expect(wrapper.first('p').text()).toEqual(description);
  });
});