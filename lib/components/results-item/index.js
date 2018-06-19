'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _movieImage = require('../movie-image');

var _movieImage2 = _interopRequireDefault(_movieImage);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultsItem = function ResultsItem(_ref) {
    var poster_path = _ref.poster_path,
        title = _ref.title,
        release_year = _ref.release_year,
        genre = _ref.genre,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'div',
        { className: _styles2.default.resultItem, onClick: onClick },
        _react2.default.createElement(
            'div',
            { className: _styles2.default.resultItemImage },
            _react2.default.createElement(_movieImage2.default, { width: '200',
                src: poster_path // eslint-disable-line camelcase
                , alt: title,
                className: _styles2.default.image
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'w-100 d-flex justify-content-between' },
            _react2.default.createElement(
                'span',
                null,
                title
            ),
            _react2.default.createElement(
                'span',
                null,
                release_year // eslint-disable-line camelcase

            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'w-100 d-flex justify-content-start align-items-start' },
            genre
        )
    );
};

ResultsItem.propTypes = {
    poster_path: _propTypes2.default.string,
    title: _propTypes2.default.string,
    release_year: _propTypes2.default.string,
    genre: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};

exports.default = ResultsItem;