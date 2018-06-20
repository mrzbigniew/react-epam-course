/* eslint-disable prop-types */
// @flow

import { SET_SEARCH_RESULTS_SORT_ORDER, SORT_BY_RELEASE_DATE } from '../actions/results';

const results = (state: StoreResultsStateType = {
  sort: SORT_BY_RELEASE_DATE,
}, action: ResultsActionType) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS_SORT_ORDER:
      return {
        sort: action.value,
      };
    default:
      return state;
  }
};

export default results;
