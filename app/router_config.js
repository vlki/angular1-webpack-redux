'use strict';

const routerConfig = ($urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/')
    $locationProvider.html5Mode(true)
}

routerConfig.$inject = ['$urlRouterProvider', '$locationProvider']

export default function provide(ngModule) {
    ngModule.config(routerConfig)
};
