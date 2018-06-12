/* eslint-disable prop-types */

import { combineReducers } from 'redux';

import { SEARCH_BY_TITLE, SET_SEARCH_TEXT, SET_SEARCH_FILTER } from '../actions/search';

const filter = (state = SEARCH_BY_TITLE, action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.value;
    default:
      return state;
  }
};

const text = (state = '', action) => {
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
