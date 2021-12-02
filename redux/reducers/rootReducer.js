// * combine all reducers into one, but as of now, only have main reducer
import { combineReducers } from 'redux';
import main from './main';

const rootReducer = combineReducers({
  main: main,
});

export default rootReducer;
