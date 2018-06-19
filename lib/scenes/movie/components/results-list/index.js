'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resultsBody = require('../../../../components/results-body');

var _resultsBody2 = _interopRequireDefault(_resultsBody);

var _content = require('../../../../components/content');

var _content2 = _interopRequireDefault(_content);

var _navbar = require('../../../../components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _resultsGenreInfo = require('../../../../components/results-genre-info');

var _resultsGenreInfo2 = _interopRequireDefault(_resultsGenreInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsListComponent = function ResultsListComponent(_ref) {
  var movies = _ref.movies,
      match = _ref.match;

  var movie = movies.find(function (m) {
    return m.id.toString() === match.params.id;
  });
  var sameMovies = movies.filter(function (current) {
    return current.genres[0] === movie.genres[0];
  });

  return _react2.default.createElement(
    _content2.default,
    null,
    _react2.default.createElement(
      _navbar2.default,
      { className: 'navbar-expand-lg navbar-light bg-light justify-content-between' },
      _react2.default.createElement(_resultsGenreInfo2.default, { genre: movie.genres[0] })
    ),
    _react2.default.createElement(
      _content2.default,
      null,
      _react2.default.createElement(_resultsBody2.default, { movies: sameMovies })
    )
  );
};

ResultsListComponent.propTypes = {
  movies: _propTypes2.default.array,
  match: _propTypes2.default.object
};

var ResultsList = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function (state) {
  return {
    movies: state.movies.data.data
  };
})(ResultsListComponent));

exports.default = ResultsList;