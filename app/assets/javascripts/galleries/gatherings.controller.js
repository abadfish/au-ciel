(function () {

  'use strict';

  function GatheringsController (WelcomeService, $state, $window, $location, $timeout) {
    var vm = this;
    vm.welcome = welcome;


    $timeout(function () {
      $state.go('home.arrangements')
    }, 90000);

    function welcome() {
      return WelcomeService.contactModal();
    }

  }


angular
  .module('au-ciel')
  .controller('GatheringsController', GatheringsController)

}());
