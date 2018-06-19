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
  return 'MovieImage';
});

describe('ResultsItem', function () {
  var props = null;

  beforeEach(function () {
    props = {
      poster_path: '/image.jpg',
      title: 'movie 1',
      release_year: '2018',
      genre: 'Drama',
      onClick: jest.fn()
    };
  });

  it('should render', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, props)).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = null;

    beforeEach(function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, props));
    });

    it('should create element with result-item class', function () {
      expect(wrapper.hasClass('result-item')).toBeTruthy();
    });

    it('should have image element with proper attributes', function () {
      expect(wrapper.find('MovieImage')).toHaveLength(1);
      expect(wrapper.find('MovieImage').hasClass('image')).toBeTruthy();
      expect(wrapper.find('MovieImage').props().src).toEqual(props.poster_path);
      expect(wrapper.find('MovieImage').props().alt).toEqual(props.title);
    });

    it('should have element with title', function () {
      expect(wrapper.find('div').at(2).find('span').at(0).text()).toEqual(props.title);
    });

    it('should have element with release year', function () {
      expect(wrapper.find('div').at(2).find('span').at(1).text()).toEqual(props.release_year);
    });

    it('should have element witch genre', function () {
      expect(wrapper.find('div').at(3).text()).toEqual(props.genre);
    });

    it('should run click callback', function () {
      wrapper.simulate('click');
      expect(props.onClick.mock.calls).toHaveLength(1);
    });
  });
});