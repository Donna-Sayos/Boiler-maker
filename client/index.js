// entry point of app -> ReactDOM Render
import '../public/style.css'
import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import history from './history';
import store from './store';
import App from './App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)