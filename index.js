import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';

import reducer from './app/reducer'
import App from './app/components/app.jsx'

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

