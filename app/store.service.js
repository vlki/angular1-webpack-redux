import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'

const storeFactory = (reducerRegistry) => {
    let reducers = reducerRegistry.getReducers()

    if (Object.keys(reducers).length === 0) {
        // Create empty reducer
        reducers = (state = {}, action) => {
            return state;
        }
    }

    const logger = createLogger()

    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(logger));

    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(combineReducers(reducers))
    })

    return store;
}

storeFactory.$inject = ['reducerRegistry']

export default function provide(ngModule) {
    ngModule.factory('store', storeFactory)
}
