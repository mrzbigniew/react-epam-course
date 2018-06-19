'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _imageCover = require('../image-cover');

var _imageCover2 = _interopRequireDefault(_imageCover);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieImage = function (_React$Component) {
    _inherits(MovieImage, _React$Component);

    function MovieImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MovieImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MovieImage.__proto__ || Object.getPrototypeOf(MovieImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loaded: true,
            error: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MovieImage, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                src = _props.src,
                alt = _props.alt,
                className = _props.className;

            var style = {
                position: 'relative'
            };
            return _react2.default.createElement(
                'div',
                { className: _styles2.default.movieImage, style: style },
                !this.state.loaded ? _react2.default.createElement(
                    _imageCover2.default,
                    { visible: !this.state.loaded },
                    _react2.default.createElement('img', { className: 'loading', src: 'http://www.mywebtimes.com/images/2017/loading.gif' })
                ) : '',
                !this.state.error ? _react2.default.createElement('img', { onLoad: function onLoad() {
                        return _this2.setState({
                            loaded: true,
                            error: false
                        });
                    },
                    onError: function onError() {
                        return _this2.setState({
                            loaded: true,
                            error: true
                        });
                    },
                    src: src,
                    alt: alt,
                    className: className }) : _react2.default.createElement(
                    _imageCover2.default,
                    { visible: true },
                    _react2.default.createElement('img', { className: 'no-image',
                        style: { maxWidth: '150px', maxHeight: '150px' },
                        src: 'https://www.artengo.co.uk/sites/artengo/files/styles/460x460/public/default_images/no-picture.png?itok=V-Gj1OhE' })
                )
            );
        }
    }]);

    return MovieImage;
}(_react2.default.Component);

MovieImage.propTypes = {
    src: _propTypes2.default.string,
    alt: _propTypes2.default.string,
    className: _propTypes2.default.string
};

exports.default = MovieImage;