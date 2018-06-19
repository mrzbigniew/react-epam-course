'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable prop-types */

var SET_SPINNER_STATE = exports.SET_SPINNER_STATE = 'SET_SPINNER_STATE';

var showSpinner = exports.showSpinner = function showSpinner() {
  return {
    type: SET_SPINNER_STATE,
    value: true
  };
};

var hideSpinner = exports.hideSpinner = function hideSpinner() {
  return {
    type: SET_SPINNER_STATE,
    value: false
  };
};