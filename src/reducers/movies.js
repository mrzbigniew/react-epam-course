import { combineReducers } from 'redux';
import filter from './filter';
import sortby from './sortby';

import {
  MOVIES_DATA_CLEAN,
  MOVIES_DATA_LOADING_START,
  MOVIES_DATA_LOADING_SUCCESS,
  MOVIES_DATA_LOADING_ERROR,
  MOVIES_DATA_SET
} from '../actions/movies';

export const loadStatus = (state = {
    isLoading: false,
    error: null
}, action) => {
    switch (action.type) {
        case MOVIES_DATA_LOADING_START:
            return {
                ...state,
                isLoading: true
            };
        case MOVIES_DATA_LOADING_SUCCESS:
            return {
                isLoading: false,
                error: null
            };
        case MOVIES_DATA_LOADING_ERROR:
            return {
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const data = (state = [], action) => {
    switch (action.type) {
        case MOVIES_DATA_SET:
            return [
                ...action.data
            ];
        case MOVIES_DATA_CLEAN:
            return [];
        default:
            return state;
    }
}

export const query = combineReducers({
    filter,
    sortby
});

const movies = combineReducers({
    data,
    loadStatus,
    query
});

export default movies;
