import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import {Provider} from 'react-redux';

import reducer from './app/reducer'
import App from './app/components/app.jsx'

// add in redux dev tools
function configureStore(reducer, initialState) {
  const createFinalStore = compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    // DevTools.instrument()
  )(createStore)

  const store = createFinalStore(reducer, initialState)

  return store;
}

const store = configureStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

