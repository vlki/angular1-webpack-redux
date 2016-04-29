'use strict';

var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var combineReducers = require('redux').combineReducers;
var createLogger = require('redux-logger');

storeFactory.$inject = ['reducerRegistry'];

function storeFactory(reducerRegistry) {
    var reducers = reducerRegistry.getReducers();

    if (Object.keys(reducers).length === 0) {
        // Create empty reducer
        reducers = function(state, action) {
            if (state === undefined) {
                return {};
            }

            return state;
        };
    }

    var store = createStore(combineReducers(reducers), applyMiddleware(createLogger()));

    reducerRegistry.setChangeListener(function(reducers) {
        store.replaceReducer(combineReducers(reducers));
    });

    return store;
}

module.exports = function(ngModule) {
    ngModule.factory('store', storeFactory);
}
