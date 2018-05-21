export const SET_SORT_BY = 'SET_SORT_BY';
export const SORT_BY_RELEASE_DATE = 'SORT_BY_RELEASE_DATE';
export const SORT_BY_RATING = 'SORT_BY_RATING';

const sortby = (state=SORT_BY_RELEASE_DATE, action) => {
    switch(action.type) {
        case SET_SORT_BY:
            return action.sortby;
        default:
            return state;
    }
}

export default sortby;
