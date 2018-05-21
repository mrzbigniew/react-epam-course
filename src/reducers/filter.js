export const SET_FILTER = 'SET_FILTER';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_TITLE = 'FILTER_BY_TITLE';

const filter = (state = FILTER_BY_GENRE, action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filter;
