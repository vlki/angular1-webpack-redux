import angular from 'angular'
import angularUiRouter from 'angular-ui-router'
import todolist from './todolist'

const appModule = angular.module('app', [
    angularUiRouter,
    todolist
])

import storeProvide from './store.service.js'
storeProvide(appModule)

import routerConfigProvide from './router_config.js'
routerConfigProvide(appModule)

import reducerRegistryProvide from './reducer_registry.service.js'
reducerRegistryProvide(appModule)
