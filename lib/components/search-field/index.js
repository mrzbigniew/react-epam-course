'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles/styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function SearchField(_ref) {
    var _onChange = _ref.onChange;
    return _react2.default.createElement(
        'div',
        { className: _styles2.default.searchField },
        _react2.default.createElement(
            'div',
            { className: 'form-group ' + _styles2.default.formGroup },
            _react2.default.createElement(
                'label',
                {
                    htmlFor: 'searchInput',
                    className: 'control-label font-montserrat ' + _styles2.default.textUppercase + ' ' + _styles2.default.controlLabel },
                'Search for movie'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { id: 'searchInput',
                    className: 'form-control ' + _styles2.default.formControl,
                    onChange: function onChange(e) {
                        return _onChange(e.target.value);
                    },
                    placeholder: 'type to search',
                    autoComplete: 'off'
                })
            )
        )
    );
};

SearchField.propTypes = {
    onChange: _propTypes2.default.func
};

exports.default = SearchField;