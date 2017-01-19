(function () {

  'use strict';

  function ArrangementsController (WelcomeService, $state, $window, $location, $timeout) {
    var vm = this;
    vm.welcome = welcome;

    $timeout(function () {
      $state.go('home.about')
    }, 120000);

    function welcome() {
       return WelcomeService.contactModal();
    }

  }


angular
  .module('au-ciel')
  .controller('ArrangementsController', ArrangementsController)

}());
