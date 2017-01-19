(function () {

  'use strict';

  function WeddingsController (WelcomeService, ModalService, $element, $state, $window, $location, $timeout) {
    var vm = this;
    vm.welcome = welcome;

    // $timeout(function () {
    //   $state.go('home.tables')
    // }, 50000);

    function welcome() {
       return WelcomeService.contactModal();
    }

  }


angular
  .module('au-ciel')
  .controller('WeddingsController', WeddingsController)

}());
