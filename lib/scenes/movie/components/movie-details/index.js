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

var _movieTitle = require('../../../../components/movie-title');

var _movieTitle2 = _interopRequireDefault(_movieTitle);

var _movieCover = require('../../../../components/movie-cover');

var _movieCover2 = _interopRequireDefault(_movieCover);

var _movieRating = require('../../../../components/movie-rating');

var _movieRating2 = _interopRequireDefault(_movieRating);

var _movieTagline = require('../../../../components/movie-tagline');

var _movieTagline2 = _interopRequireDefault(_movieTagline);

var _movieYear = require('../../../../components/movie-year');

var _movieYear2 = _interopRequireDefault(_movieYear);

var _movieDuration = require('../../../../components/movie-duration');

var _movieDuration2 = _interopRequireDefault(_movieDuration);

var _movieDescription = require('../../../../components/movie-description');

var _movieDescription2 = _interopRequireDefault(_movieDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieDetailsComponent = function MovieDetailsComponent(_ref) {
    var movies = _ref.movies,
        match = _ref.match,
        className = _ref.className;

    var movie = movies.find(function (m) {
        return m.id.toString() === match.params.id;
    });
    return _react2.default.createElement(
        'div',
        { className: 'movie-details ' + className },
        _react2.default.createElement(
            'div',
            { className: 'd-flex align-items-stretch justify-content-start m-2' },
            _react2.default.createElement(
                'div',
                { className: 'd-flex align-items-center justify-content-center p-3 w-25' },
                _react2.default.createElement(_movieCover2.default, { src: movie.poster_path, alt: movie.title })
            ),
            _react2.default.createElement(
                'div',
                { className: 'd-flex align-items-center p2 w-75' },
                _react2.default.createElement(
                    'div',
                    { className: 'pl-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'd-flex justify-content-start' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mr-3' },
                            _react2.default.createElement(_movieTitle2.default, { title: movie.title })
                        ),
                        _react2.default.createElement(_movieRating2.default, { rating: movie.vote_average })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_movieTagline2.default, { tagline: movie.tagline })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'd-flex justify-content-start' },
                        _react2.default.createElement(
                            'div',
                            { className: 'mr-5' },
                            _react2.default.createElement(_movieYear2.default, { year: new Date(movie.release_date).getFullYear() })
                        ),
                        _react2.default.createElement(_movieDuration2.default, { duration: movie.runtime })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_movieDescription2.default, { description: movie.overview })
                    )
                )
            )
        )
    );
};

MovieDetailsComponent.propTypes = {
    movies: _propTypes2.default.array,
    match: _propTypes2.default.object,
    className: _propTypes2.default.string
};

var MovieDetails = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function (state) {
    return {
        movies: state.movies.data.data
    };
})(MovieDetailsComponent));

exports.default = MovieDetails;