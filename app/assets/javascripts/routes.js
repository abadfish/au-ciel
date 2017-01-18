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
          controller: 'GalleryController as vm'
        })
        .state('home.tables', {
          url: 'tables',
          templateUrl: 'galleries/tables.html',
          controller: 'GalleryController as vm'
        })
        .state('home.gatherings', {
          url: 'gatherings',
          templateUrl: 'galleries/gatherings.html',
          controller: 'GalleryController as vm'
        })
        .state('home.arrangements', {
          url: 'arrangements',
          templateUrl: 'galleries/arrangements.html',
          controller: 'GalleryController as vm'
        })
        $urlRouterProvider.otherwise('/')
    })

}());
