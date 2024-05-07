import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './common/user-store';

//const store = configureStore({
//  reducer : rootReducer
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
