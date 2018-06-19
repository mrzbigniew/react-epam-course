'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../movie-image', function () {
  return 'img';
});

describe('MovieCover', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, null)).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should create img element with movie-cover class name', function () {
    var alt = 'alternative image text';
    var src = '/path/to/image.jpg';
    var movieCover = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { src: src, alt: alt }));
    expect(movieCover.is('img')).toBeTruthy();
    expect(movieCover.hasClass('movie-cover')).toBeTruthy();
    expect(movieCover.find('img').find('[src]').props().src).toEqual(src);
    expect(movieCover.find('img').find('[alt]').props().alt).toEqual(alt);
  });
});