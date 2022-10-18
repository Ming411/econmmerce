import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
// import App from './App';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';
import store from './store/index';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HashRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
