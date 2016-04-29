const TOGGLE_TODO = 'todolist/TOGGLE_TODO'
const INITIAL_STATE = {}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}
