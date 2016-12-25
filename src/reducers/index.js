import { combineReducers } from 'redux';

import appReducer from 'reducers/appReducer';

const combinedReducers = combineReducers({
  appStore: appReducer,
});

export default combinedReducers;
