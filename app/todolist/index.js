import angular from 'angular'

const todolistModule = angular.module('app.todolist', [])

import statesProvide from './states.js'
statesProvide(todolistModule)

import reduxProvide from './todolist.redux.js'
reduxProvide(todolistModule)

export default todolistModule.name
