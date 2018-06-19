'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _searchField = require('../../../../components/search-field');

var _searchField2 = _interopRequireDefault(_searchField);

var _searchButton = require('../../../../components/search-button');

var _searchButton2 = _interopRequireDefault(_searchButton);

var _filterLink = require('../../../../components/filter-link');

var _filterLink2 = _interopRequireDefault(_filterLink);

require('./styles/styles.scss');

var _search = require('../../../../actions/search');

var _results = require('../../../../actions/results');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchFormComponent = function SearchFormComponent(_ref) {
    var history = _ref.history,
        setText = _ref.setText,
        filter = _ref.filter,
        text = _ref.text,
        className = _ref.className;

    var search = function search() {
        history.push('/search/' + filter + ' ' + text);
    };
    return _react2.default.createElement(
        'form',
        { className: 'search-form ' + className, onSubmit: function onSubmit(e) {
                e.preventDefault();search();
            } },
        _react2.default.createElement(
            'div',
            { className: 'row no-gutters' },
            _react2.default.createElement(
                'div',
                { className: 'col-12' },
                _react2.default.createElement(_searchField2.default, { onChange: setText })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'row no-gutters' },
            _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                    _filterLink2.default,
                    { filter: _search.SEARCH_BY_TITLE },
                    'title'
                ),
                _react2.default.createElement(
                    _filterLink2.default,
                    { filter: _search.SEARCH_BY_GENRE },
                    'genre'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-6' },
                _react2.default.createElement(
                    'div',
                    { className: 'row no-gutters justify-content-end' },
                    _react2.default.createElement(
                        _searchButton2.default,
                        { onClick: function onClick() {
                                return search();
                            } },
                        'search'
                    )
                )
            )
        )
    );
};

SearchFormComponent.propTypes = {
    movies: _propTypes2.default.array,
    history: _propTypes2.default.object,
    doSearch: _propTypes2.default.func,
    setText: _propTypes2.default.func,
    filter: _propTypes2.default.string,
    text: _propTypes2.default.string,
    className: _propTypes2.default.string
};

var SearchForm = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function (state) {
    return {
        filter: state.search.filter,
        text: state.search.text
    };
}, function (dispatch) {
    return {
        setText: function setText(text) {
            dispatch((0, _search.setSearchText)(text));
        }
    };
})(SearchFormComponent));

exports.default = SearchForm;