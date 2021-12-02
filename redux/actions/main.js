// * specifies the "SET_NAME" type & updates it with new value
import * as t from '../types';

export const setLoaded = (loaded) => (dispatch) => {
  dispatch({
    type: t.LOADED,
    payload: loaded,
  });
};
