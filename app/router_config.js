'use strict';

routerConfig.$inject = ['$urlRouterProvider'];

function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

module.exports = function(ngModule) {
    ngModule.config(routerConfig);
};
