/* eslint-disable prop-types */

import { SET_SPINNER_STATE } from '../actions/spinner';

const spinner = (state: boolean = false, action: { type: string, value: boolean }) => {
  switch (action.type) {
    case SET_SPINNER_STATE:
      return action.value;
    default:
      return state;
  }
};

export default spinner;
