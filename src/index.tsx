import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
// import App from './App';
import {HashRouter} from 'react-router-dom';
// import 'default-passive-events';
import Routes from './Routes';
import store from './store/index';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </HashRouter>
);
