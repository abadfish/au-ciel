(function () {

  'use strict';

  function HomeController ($element, $state, $window, $location) {
    var vm = this;

    activate();

    function activate() {
      $location.path('/welcome');
    }


  }


angular
  .module('au-ciel')
  .controller('HomeController', HomeController)

}());
