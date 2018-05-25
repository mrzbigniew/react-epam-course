import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as moviesActions from './movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Movies actions', () => {
    it('#moviesLoadingStart', () => {
        const store = mockStore({});
        const expectedAction = ({
            type: MOVIES_DATA_LOADING_START
        });

        store.dispatch(moviesActions.moviesLoadingStart());

        expect(store.getActions()).toEqual(expectedAction);
    })
});
