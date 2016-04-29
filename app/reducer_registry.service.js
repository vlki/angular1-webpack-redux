'use strict';

// Based on the code splitting redux reducers example
// https://github.com/insin/react-examples/tree/master/code-splitting-redux-reducers
function ReducerRegistry() {
    var reducers = {};
    var changeListener = null;

    return {
        getReducers: getReducers,
        register: register,
        setChangeListener: setChangeListener
    };

    ///////

    function register(reducer) {
        reducers = angular.extend({}, reducers, reducer);

        if (changeListener) {
            changeListener(reducers);
        }
    }

    function setChangeListener(listener) {
        changeListener = listener;
    }

    function getReducers() {
        return reducers;
    }
}

module.exports = function(ngModule) {
    ngModule.factory('reducerRegistry', ReducerRegistry);
};
