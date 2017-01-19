(function () {

  'use strict';

  function WeddingsController ($element, $state, $window, $location, $timeout) {
    var vm = this;


    $timeout(function () {
      $state.go('home.tables')
    }, 50000);



  }


angular
  .module('au-ciel')
  .controller('WeddingsController', WeddingsController)

}());
