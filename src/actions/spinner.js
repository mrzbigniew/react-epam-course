export const SET_SPINNER_STATE = 'SET_SPINNER_STATE';

export const showSpinner = () => ({
    type: SET_SPINNER_STATE,
    value: true
});

export const hideSpinner = () => ({
    type: SET_SPINNER_STATE,
    value: false
});
