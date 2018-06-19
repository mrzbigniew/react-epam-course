'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spinner = require('../actions/spinner');

var spinner = function spinner() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _spinner.SET_SPINNER_STATE:
      return action.value;
    default:
      return state;
  }
}; /* eslint-disable prop-types */

exports.default = spinner;