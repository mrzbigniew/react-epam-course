/* eslint-disable prop-types */
// @flow

import { combineReducers } from 'redux';

import { SEARCH_BY_TITLE, SET_SEARCH_TEXT, SET_SEARCH_FILTER } from '../actions/search';

const filter = (state: string = SEARCH_BY_TITLE, action: { type: string, value: string}) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.value;
    default:
      return state;
  }
};

const text = (state: string = '', action: { type: string, value: string }) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.value;
    default:
      return state;
  }
};

const search = combineReducers({
  filter,
  text,
});

export default search;
