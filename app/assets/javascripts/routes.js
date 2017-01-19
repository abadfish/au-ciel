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
        .state('home.weddings', {
          url: 'weddings',
          templateUrl: 'galleries/weddings.html',
          controller: 'WeddingsController as vm'
        })
        .state('home.tables', {
          url: 'tables',
          templateUrl: 'galleries/tables.html',
          controller: 'TablesController as vm'
        })
        .state('home.gatherings', {
          url: 'gatherings',
          templateUrl: 'galleries/gatherings.html',
          controller: 'GatheringsController as vm'
        })
        .state('home.arrangements', {
          url: 'arrangements',
          templateUrl: 'galleries/arrangements.html',
          controller: 'ArrangementsController as vm'
        })
        .state('home.about', {
          url: 'about',
          templateUrl: 'home/about.html',
          controller: 'HomeController as vm'
        })
        .state('home.thankyou', {
          url: 'about',
          templateUrl: 'home/thankyou.html',
          controller: 'HomeController as vm'
        })
        $urlRouterProvider.otherwise('/')
    })

}());
