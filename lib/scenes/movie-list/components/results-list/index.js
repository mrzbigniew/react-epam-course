'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _resultsCount = require('../../../../components/results-count');

var _resultsCount2 = _interopRequireDefault(_resultsCount);

var _resultsSort = require('../../../../components/results-sort');

var _resultsSort2 = _interopRequireDefault(_resultsSort);

var _resultsBody = require('../../../../components/results-body');

var _resultsBody2 = _interopRequireDefault(_resultsBody);

var _content = require('../../../../components/content');

var _content2 = _interopRequireDefault(_content);

var _navbar = require('../../../../components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _movie = require('../../../../reducers/movie');

var _movie2 = _interopRequireDefault(_movie);

var _results = require('../../../../actions/results');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsListComponent = function ResultsListComponent(_ref) {
    var movies = _ref.movies,
        sort = _ref.sort,
        match = _ref.match;
    var _match$params = match.params,
        text = _match$params.text,
        filter = _match$params.filter;


    var results = (0, _results.sortResults)((0, _results.getFiltered)(movies, filter, text), sort);
    return _react2.default.createElement(
        _content2.default,
        null,
        _react2.default.createElement(
            _navbar2.default,
            { className: 'navbar-expand-lg navbar-light bg-light justify-content-between' },
            _react2.default.createElement(_resultsCount2.default, { moviesCount: results.length }),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _resultsSort2.default,
                    { value: _results.SORT_BY_RATING },
                    'rating'
                ),
                _react2.default.createElement(
                    _resultsSort2.default,
                    { value: _results.SORT_BY_RELEASE_DATE },
                    'release date'
                )
            )
        ),
        _react2.default.createElement(
            _content2.default,
            null,
            _react2.default.createElement(_resultsBody2.default, { movies: results })
        )
    );
};

ResultsListComponent.propTypes = {
    movies: _propTypes2.default.arrayOf(_propTypes2.default.object),
    match: _propTypes2.default.object,
    sort: _propTypes2.default.string
};

var ResultsList = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function (state) {
    return {
        movies: state.movies.data.data,
        sort: state.results.sort
    };
})(ResultsListComponent));

exports.default = ResultsList;