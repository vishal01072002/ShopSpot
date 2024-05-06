import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer.js';
import {configureStore} from "@reduxjs/toolkit"
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
>>>>>>> c5519ab21544bec3a86e893fc337bc68cf5255bf

const store = configureStore({
  reducer : rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
=======
    <Provider store={store}>
      <App/>
    </Provider>
>>>>>>> c5519ab21544bec3a86e893fc337bc68cf5255bf
  </React.StrictMode>
);
