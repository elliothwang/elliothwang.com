// * manages the state of app
import * as t from '../types';

const main = (
  // * initializes main state's "loaded" to default to "false"
  state = {
    loaded: false,
  },
  action
) => {
  // * switch statement detects action & value (payload), which becomes the new state value
  switch (action.type) {
    case t.LOADED:
      return {
        ...state,
        loaded: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
