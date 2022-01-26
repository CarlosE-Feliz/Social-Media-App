import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import newsReducer from './APINews';

const reducers = combineReducers({
    news: newsReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
    
);

export default store;