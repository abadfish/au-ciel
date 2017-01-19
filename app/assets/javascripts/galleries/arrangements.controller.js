(function () {

  'use strict';

  function ArrangementsController ($element, $state, $window, $location, $timeout) {
    var vm = this;

    $timeout(function () {
      $state.go('home.about')
    }, 120000);


  }


angular
  .module('au-ciel')
  .controller('ArrangementsController', ArrangementsController)

}());
