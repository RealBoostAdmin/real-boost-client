import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'assets/styles/main.css'
import React from 'react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);