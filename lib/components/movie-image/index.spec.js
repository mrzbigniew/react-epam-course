'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MovieImage', function () {
  it('renders', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { alt: 'alt', src: 'src', className: 'img' })).toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('wrapper', function () {
    var wrapper = void 0;
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { alt: 'alt', src: 'src', className: 'img' }));
    });
    it('should create element with movie-image class', function () {
      expect(wrapper.find('.movie-image').at(0)).toBeDefined();
    });

    it('should render Cover when image is loading', function () {
      wrapper.instance().setState({
        loaded: false,
        error: false
      });
      wrapper.update();
      expect(wrapper.find('ImageCover').at(0)).toBeDefined();
      expect(wrapper.find('ImageCover').at(0).props().visible).toBeTruthy();
    });

    it('should hide cover if image is loaded', function () {
      expect(wrapper.find('ImageCover').at(0)).toBeTruthy();
      var props = wrapper.find('.movie-image .img').at(0).props();
      props.onLoad();
      wrapper.update();
      expect(wrapper.find('ImageCover')).toHaveLength(0);
    });

    it('should render no-image cover if image fail to load', function () {
      expect(wrapper.find('no-image')).toHaveLength(0);
      var props = wrapper.find('.movie-image .img').at(0).props();
      props.onError();
      wrapper.update();
      expect(wrapper.find('.no-image')).toHaveLength(1);
    });
  });
});