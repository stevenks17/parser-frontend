import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import rootReducer from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({trace: true}) || compose 
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))




ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

  document.getElementById('root')
);


