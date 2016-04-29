import template from './todolist.html'
import controller from './todolist.controller.js'

const setupStates = ($stateProvider) => {
    $stateProvider
        .state('todolist', {
            url: '/',
            templateUrl: template,
            controller: controller,
            controllerAs: 'vm'
        })
}

setupStates.$inject = ['$stateProvider']

export default function provide(ngModule) {
    ngModule.config(setupStates)
}
