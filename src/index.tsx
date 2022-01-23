import { PersistGate } from 'redux-persist/integration/react';
import { persist, store } from 'core/store/store';
import { BrowserRouter } from 'react-router-dom';
import Initializer from './Initializer';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'assets/styles/main.css'
import React from 'react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <BrowserRouter>
          <Initializer>
            <App />
          </Initializer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);