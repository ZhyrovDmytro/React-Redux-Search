import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

export default function configureStore(initialState) {
    /* eslint-disable no-underscore-dangle */
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );
    /* eslint-enable */
}
