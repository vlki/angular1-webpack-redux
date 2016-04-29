'use strict';

var SET_VISIBILITY_FILTER = 'todolist/SET_VISIBILITY_FILTER';

function reducer(state, action) {
    if (state === undefined) {
        return 'SHOW_ALL';
    }

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}

function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
}

module.exports = {
    reducer: reducer,
    setVisibilityFilter: setVisibilityFilter
};
