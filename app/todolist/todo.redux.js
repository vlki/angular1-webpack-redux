'use strict';

var angular = require('angular');
var TOGGLE_TODO = 'todolist/TOGGLE_TODO';

function reducer(state, action) {
    if (state === undefined) {
        return {};
    }

    switch (action.type) {
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return angular.extend({}, state, {
                completed: !state.completed
            });

        default:
            return state;
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    };
}

module.exports = {
    reducer: reducer,
    toggleTodo: toggleTodo
};
