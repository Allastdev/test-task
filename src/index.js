import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from './routes';
import reducer from './store';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <Routes/>
    </Provider>,
document.getElementById('root'));

