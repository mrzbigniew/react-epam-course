import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  MOVIES_DATA_LOADING_START,
  moviesLoadingStart,
  moviesLoadingSuccess,
  moviesLoadingError,
  moviesDataSet,
  moviesDataClean,
  loadMovies,
  MOVIES_DATA_LOADING_SUCCESS,
  MOVIES_DATA_SET,
  MOVIES_DATA_CLEAN,
  MOVIES_DATA_LOADING_ERROR,
} from './movies';
import { SET_SPINNER_STATE, showSpinner, hideSpinner } from './spinner';
import { setSearchResultsSortOrder, SET_SEARCH_RESULTS_SORT_ORDER, SET_SEARCH_RESULTS_DATA, setSearchResults, SET_SEARCH_RESULTS_CRITERIA, sortResults, SORT_BY_RELEASE_DATE, SORT_BY_RATING, getFiltered } from './results';
import { setSearchText, SET_SEARCH_TEXT, SET_SEARCH_FILTER, setSearchFilter, searchMovies, SEARCH_BY_TITLE, SEARCH_BY_GENRE } from './search';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('Movies actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    store.clearActions();
  });

  it('#moviesLoadingStart', () => {
    const expectedAction = ([{
      type: MOVIES_DATA_LOADING_START,
    }]);

    store.dispatch(moviesLoadingStart());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesLoadingSuccess', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: MOVIES_DATA_LOADING_SUCCESS,
    }]);

    store.dispatch(moviesLoadingSuccess());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesLoadingError', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: MOVIES_DATA_LOADING_ERROR,
      error: 'error',
    }]);

    store.dispatch(moviesLoadingError('error'));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesDataSet ', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: MOVIES_DATA_SET,
      data: [],
      total: 10,
    }]);

    store.dispatch(moviesDataSet({
      data: [],
      total: 10,
    }));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesDataClean ', () => {
    const store = mockStore({});

    const expectedAction = ([{
      type: MOVIES_DATA_CLEAN,
    }]);

    store.dispatch(moviesDataClean());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#loadMovies:success', (done) => {
    const store = mockStore({});
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        data: [{
          title: 'movie 1',
        }],
        total: 10,
      },
    }));

    const expectedAction = [{
      type: MOVIES_DATA_LOADING_START,
    }, {
      type: SET_SPINNER_STATE,
      value: true,
    }, {
      type: MOVIES_DATA_LOADING_SUCCESS,
    }, {
      type: SET_SPINNER_STATE,
      value: false,
    }, {
      type: MOVIES_DATA_SET,
      data: {
        data: [{
          title: 'movie 1',
        }],
        total: 10,
      },
    }];

    store.dispatch(loadMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('#loadMovies:error', (done) => {
    const store = mockStore({});
    const error = 'error';
    fetch.mockRejectOnce(error);

    const expectedAction = [{
      type: MOVIES_DATA_LOADING_START,
    }, {
      type: SET_SPINNER_STATE,
      value: true,
    }, {
      type: MOVIES_DATA_LOADING_ERROR,
      error,
    }, {
      type: SET_SPINNER_STATE,
      value: false,
    }];

    store.dispatch(loadMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});

describe('results', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    store.clearActions();
  });

  it('#setSearchResultsSortOrder', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: SET_SEARCH_RESULTS_SORT_ORDER,
      value: 1,
    }]);

    store.dispatch(setSearchResultsSortOrder(1));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#sortResults', () => {
    const data = [
      {
        title: '1',
        vote_average: 10,
        release_date: '2018-10-01',
      }, {
        title: '2',
        vote_average: 8,
        release_date: '2018-01-01',
      }, {
        title: '3',
        vote_average: 2,
        release_date: '2017-10-01',
      },
    ];

    expect(sortResults(data, SORT_BY_RELEASE_DATE)).toEqual(data.sort((current, next) => (current.release_date === next.release_date ? 0 : (
      current.release_date > next.release_date ? 1 : -1
    ))));

    expect(sortResults(data, SORT_BY_RATING)).toEqual(data.sort((current, next) => (current.vote_average === next.vote_average ? 0 : (
      current.vote_average > next.vote_average ? 1 : -1
    ))));
  });

  it('#getFiltered', () => {
    const data = [
      {
        title: 'title 1',
        vote_average: 10,
        release_date: '2018-10-01',
        genres: [
          'drama', 'fiction',
        ],
      }, {
        title: 'title 11',
        vote_average: 8,
        release_date: '2018-01-01',
        genres: [
          'fiction',
        ],
      }, {
        title: 'title 2',
        vote_average: 2,
        release_date: '2017-10-01',
        genres: [
          'drama',
        ],
      },
    ];

    expect(getFiltered(data, null, null)).toEqual([]);

    expect(getFiltered(data, SEARCH_BY_TITLE, 'title 1')).toEqual(data.filter(item => item.title.toLowerCase().trim().indexOf('title 1') !== -1));

    expect(getFiltered(data, SEARCH_BY_GENRE, 'drama')).toEqual(data.filter(item => item.genres.some(genre => genre.toLowerCase().trim().indexOf('drama') !== -1)));
  });
});

describe('search', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    store.clearActions();
  });

  it('#setSearchText', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: SET_SEARCH_TEXT,
      value: 'text',
    }]);

    store.dispatch(setSearchText('text'));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#setSearchFilter', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: SET_SEARCH_FILTER,
      value: 'filter',
    }]);

    store.dispatch(setSearchFilter('filter'));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#searchMovies', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: SET_SEARCH_RESULTS_CRITERIA,
      filter: 'filter',
      text: 'text',
    }]);

    store.dispatch(searchMovies('filter', 'text'));

    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('spinner', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    store.clearActions();
  });

  it('#showSpinner', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: SET_SPINNER_STATE,
      value: true,
    }]);

    store.dispatch(showSpinner());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#hideSpinner', () => {
    const store = mockStore({});
    const expectedAction = ([{
      type: SET_SPINNER_STATE,
      value: false,
    }]);

    store.dispatch(hideSpinner());

    expect(store.getActions()).toEqual(expectedAction);
  });
});
