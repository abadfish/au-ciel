(function () {

  'use strict';

  angular
    .module('au-ciel')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('home.welcome', {
          url: 'welcome',
          templateUrl: 'home/welcome.html',
          controller: 'HomeController as vm'
        })
        $urlRouterProvider.otherwise('/')
    })

}());
