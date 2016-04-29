'use strict';

routerConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

function routerConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}

module.exports = function(ngModule) {
    ngModule.config(routerConfig);
};
