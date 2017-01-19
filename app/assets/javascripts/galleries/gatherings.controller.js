(function () {

  'use strict';

  function GatheringsController ($element, $state, $window, $location, $timeout) {
    var vm = this;

    $timeout(function () {
      $state.go('home.arrangements')
    }, 90000);


  }


angular
  .module('au-ciel')
  .controller('GatheringsController', GatheringsController)

}());
