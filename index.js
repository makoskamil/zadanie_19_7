import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
…

const store = createStore(reducers);