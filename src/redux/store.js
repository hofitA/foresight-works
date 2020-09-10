import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // Importing redux persist to config persistence for the store

import persistReducer from './root-reducer';

const middlewares = [];

// Creating the store using the root reducer and the middlewares
export const store = createStore(persistReducer, applyMiddleware(...middlewares));

// Exporting the persisted store so the data won't be lost upon refershes
export const persistor = persistStore(store);