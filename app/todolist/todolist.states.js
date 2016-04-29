'use strict';

var template = require('./todolist.html');
var controller = require('./todolist.controller.js');

setupStates.$inject = ['$stateProvider'];

function setupStates($stateProvider) {
    $stateProvider
        .state('todolist', {
            url: '/',
            templateUrl: template,
            controller: controller,
            controllerAs: 'vm'
        });
}

module.exports = function(ngModule) {
    ngModule.config(setupStates);
};
