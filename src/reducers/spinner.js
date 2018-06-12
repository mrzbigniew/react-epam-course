import { SET_SPINNER_STATE } from '../actions/spinner';

const spinner = (state = false, action) => {
  switch (action.type) {
    case SET_SPINNER_STATE:
      return action.value;
    default:
      return state;
  }
};

export default spinner;
