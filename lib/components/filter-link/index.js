'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _search = require('../../actions/search');

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    active: state.search.filter === ownProps.filter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0, _search.setSearchFilter)(ownProps.filter));
    }
  };
};

var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_link2.default);

exports.default = FilterLink;