import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import rootReducer from './store/reducer.js';
// import {configureStore} from "@reduxjs/toolkit"

// const store = configureStore({
//   reducer : rootReducer
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
      <App/>
      </BrowserRouter>
   
  </React.StrictMode>
);
