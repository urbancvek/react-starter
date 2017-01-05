// @flow
import { createStore } from 'redux';

import combinedReducers from 'reducers';

// Creates a store to be used on server and in app
const configureStore = () => {
  const store = createStore(combinedReducers);

  // Enables reducers to be hot reloaded
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
