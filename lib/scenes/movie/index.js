'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('../../components/container');

var _container2 = _interopRequireDefault(_container);

var _header = require('../../components/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _content = require('../../components/content');

var _content2 = _interopRequireDefault(_content);

var _logo = require('../../components/logo');

var _logo2 = _interopRequireDefault(_logo);

var _backToSearch = require('./components/back-to-search');

var _backToSearch2 = _interopRequireDefault(_backToSearch);

var _movieDetails = require('./components/movie-details');

var _movieDetails2 = _interopRequireDefault(_movieDetails);

var _resultsList = require('./components/results-list');

var _resultsList2 = _interopRequireDefault(_resultsList);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Movie = function Movie() {
    return _react2.default.createElement(
        _container2.default,
        null,
        _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(
                'div',
                { className: 'row no-gutters justify-content-between' },
                _react2.default.createElement(_logo2.default, null),
                _react2.default.createElement(_backToSearch2.default, null)
            ),
            _react2.default.createElement(_movieDetails2.default, { className: _styles2.default.movieDetails })
        ),
        _react2.default.createElement(
            _content2.default,
            null,
            _react2.default.createElement(_resultsList2.default, null)
        ),
        _react2.default.createElement(
            _footer2.default,
            null,
            _react2.default.createElement(_logo2.default, null)
        )
    );
};

exports.default = Movie;