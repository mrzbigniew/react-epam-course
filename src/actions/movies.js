/* eslint-disable prop-types */

import { put, all } from 'redux-saga/effects';

import { fetchMovies } from '../services/api/movies';
import { showSpinner, hideSpinner } from './spinner';

export const MOVIES_DATA_LOADING_START = 'MOVIES_DATA_LOADING_START';
export const MOVIES_DATA_LOADING_SUCCESS = 'MOVIES_DATA_LOADING_SUCCESS';
export const MOVIES_DATA_LOADING_ERROR = 'MOVIES_DATA_LOADING_ERROR';

export const MOVIES_DATA_CLEAN = 'MOVIES_DATA_CLEAN';
export const MOVIES_DATA_SET = 'MOVIES_DATA_SET';

export const moviesLoadingStart = () => ({
  type: MOVIES_DATA_LOADING_START,
});

export const moviesLoadingSuccess = () => ({
  type: MOVIES_DATA_LOADING_SUCCESS,
});

export const moviesLoadingError = error => ({
  type: MOVIES_DATA_LOADING_ERROR,
  error,
});

export const moviesDataSet = data => ({
  type: MOVIES_DATA_SET,
  data: data.data,
  total: data.total,
});

export const moviesDataClean = () => ({
  type: MOVIES_DATA_CLEAN,
});

export const loadMovies = () => async (dispatch) => {
  try {
    dispatch(moviesLoadingStart());
    dispatch(showSpinner());
    const data = await fetchMovies();
    dispatch(moviesLoadingSuccess());
    dispatch(hideSpinner());
    return dispatch(moviesDataSet(data));
  } catch (error) {
    dispatch(moviesLoadingError(error));
    dispatch(hideSpinner());
    return dispatch(moviesDataSet({
      data: [],
      total: 0,
    }));
  }
};

export function* getMovies() {
  const movies = yield fetchMovies();
  yield put(moviesDataSet(movies));
}

export function* moviesSaga() {
  yield all([
    getMovies(),
  ]);
}

export function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}
