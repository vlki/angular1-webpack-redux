'use strict';

var combineReducers = require('redux').combineReducers;

var visibilityFilter = require('./visibility_filter.redux.js').reducer;
var todos = require('./todos.redux.js').reducer;

var reducer = combineReducers({
    visibilityFilter: visibilityFilter,
    todos: todos
});

module.exports = {
    provide: function(ngModule) {
        ngModule.run(['reducerRegistry', function(reducerRegistry) {
            reducerRegistry.register({ todolist: reducer });
        }]);
    }
};
