'use strict';

var todos = require('./todos.redux.js');
var visibilityFilter = require('./visibility_filter.redux.js');
var todo = require('./todo.redux.js');

TodolistController.$inject = ['$scope', 'store'];

function TodolistController($scope, store) {
    var vm = this;

    vm.todos;
    vm.newTodo = '';
    vm.addTodo = addTodo;

    vm.visibilityFilter;
    vm.setVisibilityFilter = setVisibilityFilter;

    vm.toggleTodo = toggleTodo;

    activate();

    /////

    function activate() {
        var unsubscribe = store.subscribe(_updateScopeFromState);
        _updateScopeFromState();

        $scope.$on('$destroy', unsubscribe);
    }

    function _updateScopeFromState() {
        var state = store.getState().todolist;

        vm.todos = _visibleTodosOnly(state.todos, state.visibilityFilter);
        vm.visibilityFilter = state.visibilityFilter;
    }

    function _visibleTodosOnly(todos, visibilityFilter) {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return todos;

            case 'SHOW_COMPLETED':
                return todos.filter(function(t) {
                    return t.completed;
                });

            case 'SHOW_ACTIVE':
                return todos.filter(function(t) {
                    return !t.completed;
                });
        }
    }

    function addTodo() {
        store.dispatch(todos.addTodo(vm.newTodo));
        vm.newTodo = '';
    }

    function setVisibilityFilter(filter) {
        store.dispatch(visibilityFilter.setVisibilityFilter(filter));
    }

    function toggleTodo(id) {
        store.dispatch(todo.toggleTodo(id));
    }
}

module.exports = TodolistController;
