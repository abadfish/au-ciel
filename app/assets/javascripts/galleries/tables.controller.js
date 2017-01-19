(function () {

  'use strict';

  function TablesController ($element, $state, $window, $location, $timeout) {
    var vm = this;

    $timeout(function () {
      $state.go('home.gatherings')
    }, 60000);


  }


angular
  .module('au-ciel')
  .controller('TablesController', TablesController)

}());
