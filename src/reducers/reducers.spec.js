import movie, {
    MOVIE_DATA_GET,
    MOVIE_DATA_SET,
    MOVIE_DATA_CLEAR,
    MOVIE_LOADING_ERROR,
    MOVIE_LOADING_SUCCESS,
    MOVIE_LOADING_START
} from './movie';

import movies from './movies';
import {
    MOVIES_DATA_LOADING_START,
    MOVIES_DATA_LOADING_SUCCESS,
    MOVIES_DATA_LOADING_ERROR,
    MOVIES_DATA_SET,
    MOVIES_DATA_CLEAN
} from '../actions/movies';
import {
    SORT_BY_RELEASE_DATE,
    SET_SEARCH_RESULTS_DATA,
    SET_SEARCH_RESULTS_CRITERIA,
    SET_SEARCH_RESULTS_SORT_ORDER
} from '../actions/results';
import results from './results';
import {
    SEARCH_BY_TITLE,
    SET_SEARCH_FILTER,
    SET_SEARCH_TEXT
} from '../actions/search';
import search from './search';
import {
    exec
} from 'child_process';
import spinner from './spinner';
import { SET_SPINNER_STATE } from '../actions/spinner';

describe('#movie', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            data: null,
            loadStatus: {
                isLoading: false,
                error: null
            },
            id: null
        };
    });

    it('should return initial state', () => {
        expect(movie(undefined, {})).toEqual(initialState);
    });

    it('#action:MOVIE_DATA_GET', () => {
        const expected = Object.assign({}, initialState);
        expected.id = 1;
        expect(movie(initialState, {
            type: MOVIE_DATA_GET,
            id: 1
        })).toEqual(
            expected
        );
    });

    it('#action:MOVIE_DATA_SET', () => {
        const expected = Object.assign({}, initialState);
        const data = {
            title: 'title'
        };
        expected.data = data;
        expect(movie(initialState, {
            type: MOVIE_DATA_SET,
            data: data
        })).toEqual(
            expected
        );
    });

    it('#action:MOVIE_DATA_CLEAR', () => {
        const expected = Object.assign({}, initialState);
        const data = null;
        expected.data = data;
        expect(movie(initialState, {
            type: MOVIE_DATA_CLEAR
        })).toEqual(
            expected
        );
    });

    it('#action:MOVIE_LOADING_ERROR', () => {
        const expected = Object.assign({}, initialState);
        const error = 'error';
        expected.loadStatus.error = error;
        expect(movie(initialState, {
            type: MOVIE_LOADING_ERROR,
            error: error
        })).toEqual(
            expected
        );
    });

    it('#action:MOVIE_LOADING_SUCCESS', () => {
        const expected = Object.assign({}, initialState);
        expected.loadStatus.isLoading = false;
        expected.loadStatus.error = null;
        expect(movie(initialState, {
            type: MOVIE_LOADING_SUCCESS
        })).toEqual(
            expected
        );
    });

    it('#action:MOVIE_LOADING_START', () => {
        const expected = Object.assign({}, initialState);
        expected.loadStatus.isLoading = true;
        expected.loadStatus.error = null;
        expect(movie(initialState, {
            type: MOVIE_LOADING_START
        })).toEqual(
            expected
        );
    });
});

describe('movies', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            data: {
                data: [],
                total: 0
            },
            loadStatus: {
                isLoading: false,
                error: null
            }
        }
    });
    it('should return valid initial state', () => {
        expect(movies(undefined, {})).toEqual(initialState);
    });

    it('#action:MOVIES_DATA_LOADING_START', () => {
        const expected = Object.assign({}, initialState);
        expected.loadStatus.isLoading = true;

        expect(movies(initialState, {
            type: MOVIES_DATA_LOADING_START
        })).toEqual(initialState);
    });

    it('#action:MOVIES_DATA_LOADING_SUCCESS', () => {
        const expected = Object.assign({}, initialState);
        expected.loadStatus.isLoading = false;
        expected.loadStatus.error = null;

        expect(movies(initialState, {
            type: MOVIES_DATA_LOADING_SUCCESS
        })).toEqual(initialState);
    });

    it('#action:MOVIES_DATA_LOADING_ERROR', () => {
        const expected = Object.assign({}, initialState);
        expected.loadStatus.isLoading = false;
        expected.loadStatus.error = 'error';

        expect(movies(initialState, {
            type: MOVIES_DATA_LOADING_ERROR,
            error: 'error'
        })).toEqual(expected);
    });

    it('#action:MOVIES_DATA_SET', () => {
        const expected = Object.assign({}, initialState);
        const data = [{
            title: 'title'
        }];
        expected.data.data = data;
        expected.data.total = 1;

        expect(movies(initialState, {
            type: MOVIES_DATA_SET,
            data: data,
            total: 1
        })).toEqual(expected);
    });

    it('#action:MOVIES_DATA_CLEAN', () => {
        const expected = Object.assign({}, initialState);
        const data = [];
        expected.data.data = data;
        expected.data.total = 0;

        expect(movies(initialState, {
            type: MOVIES_DATA_CLEAN
        })).toEqual(expected);
    });
});

describe('results', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            data: [],
            criteria: {
                filter: '',
                text: ''
            },
            sort: SORT_BY_RELEASE_DATE
        }
    });

    it('should return valid initial state', () => {
        expect(results(undefined, {})).toEqual(initialState);
    });

    it('#action:SET_SEARCH_RESULTS_DATA', () => {
        const expected = Object.assign({}, initialState);
        const data = [{
            title: 'title'
        }];
        expected.data = data;
        console.log(expected);

        expect(results(initialState, {
            type: SET_SEARCH_RESULTS_DATA,
            data: data
        })).toEqual(expected);
    });

    it('#action:SET_SEARCH_RESULTS_CRITERIA', () => {
        const expected = Object.assign({}, initialState);
        const text = 'title';
        const filter = 'filter';
        expected.criteria = {
            filter,
            text
        }

        expect(results(initialState, {
            type: SET_SEARCH_RESULTS_CRITERIA,
            filter,
            text
        })).toEqual(expected);
    });

    it('#action:SET_SEARCH_RESULTS_SORT_ORDER', () => {
        const expected = Object.assign({}, initialState);
        const sort = 'sort';
        expected.sort = sort;

        expect(results(initialState, {
            type: SET_SEARCH_RESULTS_SORT_ORDER,
            value: sort
        })).toEqual(expected);
    });
});

describe('sort', () => {
    let initialState = {
        filter: SEARCH_BY_TITLE,
        text: ''
    };

    it('should return valid initial state', () => {
        expect(search(undefined, {})).toEqual(initialState);
    });

    it('#action:SET_SEARCH_FILTER', () => {
        const expected = Object.assign({}, initialState);
        expected.filter = 'filter';

        expect(search(initialState, {
            type: SET_SEARCH_FILTER,
            value: 'filter'
        })).toEqual(expected);
    });

    it('#action:SET_SEARCH_TEXT', () => {
        const expected = Object.assign({}, initialState);
        expected.text = 'text';

        expect(search(initialState, {
            type: SET_SEARCH_TEXT,
            value: 'text'
        })).toEqual(expected);
    });

});

describe('spinner', () => {
    let initialState = false;
    it('should return valid initial state', () => {
        expect(spinner(undefined, {})).toEqual(initialState);
    });

    it('#action:SET_SPINNER_STATE', () => {
        const expected = true;

        expect(spinner(initialState, {
            type: SET_SPINNER_STATE,
            value: true
        })).toEqual(expected);
    });
});
