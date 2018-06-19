'use strict';

var _movie = require('./movie');

var _movie2 = _interopRequireDefault(_movie);

var _movies = require('./movies');

var _movies2 = require('../actions/movies');

var _results = require('../actions/results');

var _results2 = require('./results');

var _results3 = _interopRequireDefault(_results2);

var _search = require('../actions/search');

var _search2 = require('./search');

var _search3 = _interopRequireDefault(_search2);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _spinner3 = require('../actions/spinner');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('#movie', function () {
  var initialState = void 0;
  beforeEach(function () {
    initialState = {
      data: null,
      loadStatus: {
        isLoading: false,
        error: null
      },
      id: null
    };
  });

  it('should return initial state', function () {
    expect((0, _movie2.default)(undefined, {})).toEqual(initialState);
  });

  it('#action:MOVIE_DATA_GET', function () {
    var expected = Object.assign({}, initialState);
    expected.id = 1;
    expect((0, _movie2.default)(initialState, {
      type: _movie.MOVIE_DATA_GET,
      id: 1
    })).toEqual(expected);
  });

  it('#action:MOVIE_DATA_SET', function () {
    var expected = Object.assign({}, initialState);
    var data = {
      title: 'title'
    };
    expected.data = data;
    expect((0, _movie2.default)(initialState, {
      type: _movie.MOVIE_DATA_SET,
      data: data
    })).toEqual(expected);
  });

  it('#action:MOVIE_DATA_CLEAR', function () {
    var expected = Object.assign({}, initialState);
    var data = null;
    expected.data = data;
    expect((0, _movie2.default)(initialState, {
      type: _movie.MOVIE_DATA_CLEAR
    })).toEqual(expected);
  });

  it('#action:MOVIE_LOADING_ERROR', function () {
    var expected = Object.assign({}, initialState);
    var error = 'error';
    expected.loadStatus.error = error;
    expect((0, _movie2.default)(initialState, {
      type: _movie.MOVIE_LOADING_ERROR,
      error: error
    })).toEqual(expected);
  });

  it('#action:MOVIE_LOADING_SUCCESS', function () {
    var expected = Object.assign({}, initialState);
    expected.loadStatus.isLoading = false;
    expected.loadStatus.error = null;
    expect((0, _movie2.default)(initialState, {
      type: _movie.MOVIE_LOADING_SUCCESS
    })).toEqual(expected);
  });

  it('#action:MOVIE_LOADING_START', function () {
    var expected = Object.assign({}, initialState);
    expected.loadStatus.isLoading = true;
    expected.loadStatus.error = null;
    expect((0, _movie2.default)(initialState, {
      type: _movie.MOVIE_LOADING_START
    })).toEqual(expected);
  });
}); /* eslint-disable prop-types */

describe('movies', function () {
  var initialState = void 0;
  beforeEach(function () {
    initialState = {
      data: {
        data: [],
        total: 0
      },
      loadStatus: {
        isLoading: false,
        error: null
      }
    };
  });
  it('should return valid initial state', function () {
    expect((0, _movies.movies)(undefined, {})).toEqual(initialState);
  });

  it('#action:MOVIES_DATA_LOADING_START', function () {
    var expected = Object.assign({}, initialState);
    expected.loadStatus.isLoading = true;

    expect((0, _movies.movies)(initialState, {
      type: _movies2.MOVIES_DATA_LOADING_START
    })).toEqual(initialState);
  });

  it('#action:MOVIES_DATA_LOADING_SUCCESS', function () {
    var expected = Object.assign({}, initialState);
    expected.loadStatus.isLoading = false;
    expected.loadStatus.error = null;

    expect((0, _movies.movies)(initialState, {
      type: _movies2.MOVIES_DATA_LOADING_SUCCESS
    })).toEqual(initialState);
  });

  it('#action:MOVIES_DATA_LOADING_ERROR', function () {
    var expected = Object.assign({}, initialState);
    expected.loadStatus.isLoading = false;
    expected.loadStatus.error = 'error';

    expect((0, _movies.movies)(initialState, {
      type: _movies2.MOVIES_DATA_LOADING_ERROR,
      error: 'error'
    })).toEqual(expected);
  });

  it('#action:MOVIES_DATA_SET', function () {
    var expected = Object.assign({}, initialState);
    var data = [{
      title: 'title'
    }];
    expected.data.data = data;
    expected.data.total = 1;

    expect((0, _movies.movies)(initialState, {
      type: _movies2.MOVIES_DATA_SET,
      data: data,
      total: 1
    })).toEqual(expected);
  });

  it('#action:MOVIES_DATA_CLEAN', function () {
    var expected = Object.assign({}, initialState);
    var data = [];
    expected.data.data = data;
    expected.data.total = 0;

    expect((0, _movies.movies)(initialState, {
      type: _movies2.MOVIES_DATA_CLEAN
    })).toEqual(expected);
  });
});

describe('results', function () {
  var initialState = void 0;

  beforeEach(function () {
    initialState = {
      sort: _results.SORT_BY_RELEASE_DATE
    };
  });

  it('should return valid initial state', function () {
    expect((0, _results3.default)(undefined, {})).toEqual(initialState);
  });

  it('#action:SET_SEARCH_RESULTS_SORT_ORDER', function () {
    var expected = Object.assign({}, initialState);
    var sort = 'sort';
    expected.sort = sort;

    expect((0, _results3.default)(initialState, {
      type: _results.SET_SEARCH_RESULTS_SORT_ORDER,
      value: sort
    })).toEqual(expected);
  });
});

describe('sort', function () {
  var initialState = {
    filter: _search.SEARCH_BY_TITLE,
    text: ''
  };

  it('should return valid initial state', function () {
    expect((0, _search3.default)(undefined, {})).toEqual(initialState);
  });

  it('#action:SET_SEARCH_FILTER', function () {
    var expected = Object.assign({}, initialState);
    expected.filter = 'filter';

    expect((0, _search3.default)(initialState, {
      type: _search.SET_SEARCH_FILTER,
      value: 'filter'
    })).toEqual(expected);
  });

  it('#action:SET_SEARCH_TEXT', function () {
    var expected = Object.assign({}, initialState);
    expected.text = 'text';

    expect((0, _search3.default)(initialState, {
      type: _search.SET_SEARCH_TEXT,
      value: 'text'
    })).toEqual(expected);
  });
});

describe('spinner', function () {
  var initialState = false;
  it('should return valid initial state', function () {
    expect((0, _spinner2.default)(undefined, {})).toEqual(initialState);
  });

  it('#action:SET_SPINNER_STATE', function () {
    var expected = true;

    expect((0, _spinner2.default)(initialState, {
      type: _spinner3.SET_SPINNER_STATE,
      value: true
    })).toEqual(expected);
  });
});