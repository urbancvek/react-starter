import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import configureStore from 'reducers/store';

const rootNode = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootNode)
;

if (module.hot) {
  module.hot.accept('App', () => {
    const NextApp = require('App').default;

    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootNode
    );
  });
}
