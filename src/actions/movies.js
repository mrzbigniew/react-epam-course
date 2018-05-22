import { fetchMovies } from "../services/api/movies";

export const MOVIES_DATA_LOADING_START = 'MOVIES_DATA_LOADING_START';
export const MOVIES_DATA_LOADING_SUCCESS = 'MOVIES_DATA_LOADING_SUCCESS';
export const MOVIES_DATA_LOADING_ERROR = 'MOVIES_DATA_LOADING_ERROR';

export const MOVIES_DATA_CLEAN = 'MOVIES_DATA_CLEAN';
export const MOVIES_DATA_SET = 'MOVIES_DATA_SET';

export const moviesLoadingStart = () => ({
  type: MOVIES_DATA_LOADING_START
})

export const moviesLoadingSuccess = () => ({
  type: MOVIES_DATA_LOADING_SUCCESS
});

export const moviesLoadingError = (error) => ({
  type: MOVIES_DATA_LOADING_ERROR,
  error: error
});

export const moviesDataSet = (data) => ({
  type: MOVIES_DATA_SET,
  data: data
});

export const moviesDataClean = () => ({
  type: MOVIES_DATA_CLEAN
});

export const loadMovies = () => {
  return async dispatch => {
    try {
      dispatch(moviesLoadingStart());
      const data = await fetchMovies();
      dispatch(moviesLoadingSuccess());
      dispatch(moviesDataSet(data));
    } catch(error) {
      dispatch(error);
    }
  }
}
