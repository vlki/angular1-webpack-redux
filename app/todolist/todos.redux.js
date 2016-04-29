'use strict';

var todo = require('./todo.redux.js').reducer;

var ADD_TODO = 'todolist/ADD_TODO';

function reducer(state, action) {
    if (state === undefined) {
        return [];
    }

    state = state.map(function(t) {
        return todo(t, action);
    });

    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.id,
                text: action.text,
                completed: false
            });

        default:
            return state;
    }
}

var newTodoId = 0;

function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text,
        id: newTodoId++
    };
}

module.exports = {
    reducer: reducer,
    addTodo: addTodo
};
