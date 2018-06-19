'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRouterDom = require('react-router-dom');

var _movies = require('../../actions/movies');

var _errorBoundary = require('../error-boundary');

var _errorBoundary2 = _interopRequireDefault(_errorBoundary);

var _movie = require('../../scenes/movie');

var _movie2 = _interopRequireDefault(_movie);

var _movieList = require('../../scenes/movie-list');

var _movieList2 = _interopRequireDefault(_movieList);

var _notFound = require('../not-found');

var _notFound2 = _interopRequireDefault(_notFound);

var _cover = require('../cover');

var _cover2 = _interopRequireDefault(_cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const MovieList = Loadable({
//     loader: () => import('../../scenes/movie-list'),
//     loading: Cover
// });

// const Movie = Loadable({
//     loader: () => import('../../scenes/movie'),
//     loading: Cover,
// });

// const NotFound = Loadable({
//     loader: () => import('../not-found'),
//     loading: Cover
// });

var App = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    movies: state.movies.data
  };
}), _dec(_class = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var Router = this.props.router;
      return _react2.default.createElement(
        _errorBoundary2.default,
        null,
        _react2.default.createElement(
          Router,
          { location: this.props.location, context: this.props.context },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _movieList2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/search/:filter :text', component: _movieList2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/film/:id', component: _movie2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _notFound2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class);
exports.default = App;


App.propTypes = {
  movies: _propTypes2.default.arrayOf(_propTypes2.default.object),
  router: _propTypes2.default.func,
  location: _propTypes2.default.string,
  context: _propTypes2.default.object
};

App.defaultProps = {
  location: '/',
  context: {},
  router: _reactRouterDom.Router
};