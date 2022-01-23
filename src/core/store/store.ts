import { composeWithDevTools } from '@redux-devtools/extension';
import {persistReducer, persistStore} from 'redux-persist'
import {applyMiddleware, createStore} from 'redux';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import StoreReducer from './store.reducer';
import {rootSaga} from './store.sagas';

const persistConfig = {key: 'store', storage, whitelist: ['auth', 'games', 'products'],};

const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV !== `production`) {
  const {logger} = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = createStore(
  persistReducer(persistConfig, StoreReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persist = persistStore(store);

sagaMiddleware.run(rootSaga);