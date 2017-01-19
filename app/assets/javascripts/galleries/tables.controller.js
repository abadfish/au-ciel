(function () {

  'use strict';

  function TablesController (WelcomeService, $state, $window, $location, $timeout) {
    var vm = this;
    vm.welcome = welcome;

    $timeout(function () {
      $state.go('home.gatherings')
    }, 60000);

    function welcome() {
       return WelcomeService.contactModal();
    }
  }


angular
  .module('au-ciel')
  .controller('TablesController', TablesController)

}());
