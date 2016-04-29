'use strict';

var angular = require('angular');

var todolistModule = angular.module('app.todolist', []);

require('./todolist.states.js')(todolistModule);
require('./todolist.redux.js').provide(todolistModule);

module.exports = todolistModule.name;
