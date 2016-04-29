'use strict';

var angular = require('angular');

var appModule = angular.module('app', [
    require('angular-ui-router'),
    require('./todolist/todolist.module.js')
]);

require('./router_config.js')(appModule);
