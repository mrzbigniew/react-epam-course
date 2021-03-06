/* eslint-disable prop-types */
import { List } from 'immutable';
import { combineReducers } from 'redux';

import {
  MOVIES_DATA_CLEAN,
  MOVIES_DATA_LOADING_START,
  MOVIES_DATA_LOADING_SUCCESS,
  MOVIES_DATA_LOADING_ERROR,
  MOVIES_DATA_SET,
} from '../actions/movies';

const loadStatus = (state: StoreLoadingStatusType = {
  isLoading: false,
  error: null,
}, action: LoadStatusAction) => {
  switch (action.type) {
    case MOVIES_DATA_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case MOVIES_DATA_LOADING_SUCCESS:
      return {
        isLoading: false,
        error: null,
      };
    case MOVIES_DATA_LOADING_ERROR:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const data = (state: StoreMoviesDataType = {
  data: List(),
  total: 0,
}, action: MoviesActionDataType) => {
  switch (action.type) {
    case MOVIES_DATA_SET:
      return {
        data: List(action.data),
        total: action.total,
      };
    case MOVIES_DATA_CLEAN:
      return {
        data: List(),
        total: 0,
      };
    default:
      return state;
  }
};

export const movies = combineReducers({
  data,
  loadStatus,
});

export default movies;
