'use strict';

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _movies = require('./movies');

var _spinner = require('./spinner');

var _results = require('./results');

var _search = require('./search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prop-types, no-nested-ternary, max-len */

var middlewares = [_reduxThunk2.default];
var mockStore = (0, _reduxMockStore2.default)(middlewares);

describe('Movies actions', function () {
  var store = void 0;

  beforeEach(function () {
    store = mockStore({});
  });

  afterEach(function () {
    store.clearActions();
  });

  it('#moviesLoadingStart', function () {
    var expectedAction = [{
      type: _movies.MOVIES_DATA_LOADING_START
    }];

    store.dispatch((0, _movies.moviesLoadingStart)());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesLoadingSuccess', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _movies.MOVIES_DATA_LOADING_SUCCESS
    }];

    store.dispatch((0, _movies.moviesLoadingSuccess)());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesLoadingError', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _movies.MOVIES_DATA_LOADING_ERROR,
      error: 'error'
    }];

    store.dispatch((0, _movies.moviesLoadingError)('error'));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesDataSet ', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _movies.MOVIES_DATA_SET,
      data: [],
      total: 10
    }];

    store.dispatch((0, _movies.moviesDataSet)({
      data: [],
      total: 10
    }));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#moviesDataClean ', function () {
    store = mockStore({});

    var expectedAction = [{
      type: _movies.MOVIES_DATA_CLEAN
    }];

    store.dispatch((0, _movies.moviesDataClean)());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#loadMovies:success', function (done) {
    store = mockStore({});
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        data: [{
          title: 'movie 1'
        }],
        total: 10
      }
    }));

    var expectedAction = [{
      type: _movies.MOVIES_DATA_LOADING_START
    }, {
      type: _spinner.SET_SPINNER_STATE,
      value: true
    }, {
      type: _movies.MOVIES_DATA_LOADING_SUCCESS
    }, {
      type: _spinner.SET_SPINNER_STATE,
      value: false
    }, {
      type: _movies.MOVIES_DATA_SET,
      data: {
        data: [{
          title: 'movie 1'
        }],
        total: 10
      }
    }];

    store.dispatch((0, _movies.loadMovies)()).then(function () {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('#loadMovies:error', function (done) {
    store = mockStore({});
    var error = 'error';
    fetch.mockRejectOnce(error);

    var expectedAction = [{
      type: _movies.MOVIES_DATA_LOADING_START
    }, {
      type: _spinner.SET_SPINNER_STATE,
      value: true
    }, {
      type: _movies.MOVIES_DATA_LOADING_ERROR,
      error: error
    }, {
      type: _spinner.SET_SPINNER_STATE,
      value: false
    }];

    store.dispatch((0, _movies.loadMovies)()).then(function () {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});

describe('results', function () {
  var store = void 0;

  beforeEach(function () {
    store = mockStore({});
  });

  afterEach(function () {
    store.clearActions();
  });

  it('#setSearchResultsSortOrder', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _results.SET_SEARCH_RESULTS_SORT_ORDER,
      value: 1
    }];

    store.dispatch((0, _results.setSearchResultsSortOrder)(1));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#sortResults', function () {
    var data = [{
      title: '1',
      vote_average: 10,
      release_date: '2018-10-01'
    }, {
      title: '2',
      vote_average: 8,
      release_date: '2018-01-01'
    }, {
      title: '3',
      vote_average: 2,
      release_date: '2017-10-01'
    }];

    expect((0, _results.sortResults)(data, _results.SORT_BY_RELEASE_DATE)).toEqual(data.sort(function (current, next) {
      return current.release_date === next.release_date ? 0 : current.release_date > next.release_date ? 1 : -1;
    }));

    expect((0, _results.sortResults)(data, _results.SORT_BY_RATING)).toEqual(data.sort(function (current, next) {
      return current.vote_average === next.vote_average ? 0 : current.vote_average > next.vote_average ? 1 : -1;
    }));
  });

  it('#getFiltered', function () {
    var data = [{
      title: 'title 1',
      vote_average: 10,
      release_date: '2018-10-01',
      genres: ['drama', 'fiction']
    }, {
      title: 'title 11',
      vote_average: 8,
      release_date: '2018-01-01',
      genres: ['fiction']
    }, {
      title: 'title 2',
      vote_average: 2,
      release_date: '2017-10-01',
      genres: ['drama']
    }];

    expect((0, _results.getFiltered)(data, null, null)).toEqual([]);

    expect((0, _results.getFiltered)(data, _search.SEARCH_BY_TITLE, 'title 1')).toEqual(data.filter(function (item) {
      return item.title.toLowerCase().trim().indexOf('title 1') !== -1;
    }));

    expect((0, _results.getFiltered)(data, _search.SEARCH_BY_GENRE, 'drama')).toEqual(data.filter(function (item) {
      return item.genres.some(function (genre) {
        return genre.toLowerCase().trim().indexOf('drama') !== -1;
      });
    }));
  });
});

describe('search', function () {
  var store = void 0;

  beforeEach(function () {
    store = mockStore({});
  });

  afterEach(function () {
    store.clearActions();
  });

  it('#setSearchText', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _search.SET_SEARCH_TEXT,
      value: 'text'
    }];

    store.dispatch((0, _search.setSearchText)('text'));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#setSearchFilter', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _search.SET_SEARCH_FILTER,
      value: 'filter'
    }];

    store.dispatch((0, _search.setSearchFilter)('filter'));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#searchMovies', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _results.SET_SEARCH_RESULTS_CRITERIA,
      filter: 'filter',
      text: 'text'
    }];

    store.dispatch((0, _search.searchMovies)('filter', 'text'));

    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('spinner', function () {
  var store = void 0;

  beforeEach(function () {
    store = mockStore({});
  });

  afterEach(function () {
    store.clearActions();
  });

  it('#showSpinner', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _spinner.SET_SPINNER_STATE,
      value: true
    }];

    store.dispatch((0, _spinner.showSpinner)());

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('#hideSpinner', function () {
    store = mockStore({});
    var expectedAction = [{
      type: _spinner.SET_SPINNER_STATE,
      value: false
    }];

    store.dispatch((0, _spinner.hideSpinner)());

    expect(store.getActions()).toEqual(expectedAction);
  });
});