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

var _searchForm = require('./components/search-form');

var _searchForm2 = _interopRequireDefault(_searchForm);

var _resultsList = require('./components/results-list');

var _resultsList2 = _interopRequireDefault(_resultsList);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieList = function MovieList() {
    return _react2.default.createElement(
        _container2.default,
        null,
        _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(_logo2.default, null),
            _react2.default.createElement(_searchForm2.default, { className: _styles2.default.searchForm })
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

exports.default = MovieList;