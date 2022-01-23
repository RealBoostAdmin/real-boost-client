import { BrowserRouter } from 'react-router-dom';
import Initializer from './Initializer';
import ReactDOM from 'react-dom';
import 'assets/styles/main.css'
import React from 'react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Initializer>
        <App />
      </Initializer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);