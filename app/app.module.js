'use strict';

var angular = require('angular');

var appModule = angular.module('app', [
    require('angular-ui-router'),
    require('./todolist/todolist.module.js')
]);

require('./router_config.js')(appModule);
require('./reducer_registry.service.js')(appModule);
require('./store.service.js')(appModule);
