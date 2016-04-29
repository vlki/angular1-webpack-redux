import { combineReducers } from 'redux'
import visibilityFilter from './visibility_filter.redux.js'
import todos from './todos.redux.js'

const todolist = combineReducers({
    visibilityFilter,
    todos
})

export default function provide(ngModule) {
    ngModule.run(['reducerRegistry', (reducerRegistry) => {
        reducerRegistry.register({ todolist })
    }])
}
