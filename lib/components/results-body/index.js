'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _noResults = require('../no-results/');

var _noResults2 = _interopRequireDefault(_noResults);

var _resultsItem = require('../results-item/');

var _resultsItem2 = _interopRequireDefault(_resultsItem);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsBody = function ResultsBody(_ref) {
    var movies = _ref.movies;
    return _react2.default.createElement(
        'div',
        { className: _styles2.default.resultsBody },
        movies && movies.length ? movies.map(function (movie) {
            return _react2.default.createElement(
                _reactRouterDom.Link,
                { key: movie.id, to: '/film/' + movie.id },
                _react2.default.createElement(_resultsItem2.default, {
                    poster_path: movie.poster_path,
                    title: movie.title,
                    genre: movie.genres[0],
                    release_year: movie.release_date.split('-')[0]
                })
            );
        }) : _react2.default.createElement(_noResults2.default, null)
    );
};

ResultsBody.propTypes = {
    movies: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

exports.default = ResultsBody;