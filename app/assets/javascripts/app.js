(function () {
  'use strict';


  angular
    .module('au-ciel', ['ui.router', 'templates', 'angularModalService', 'ngMessages', 'angularSimpleSlider'])
    .config(function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
    })

}());
