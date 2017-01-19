(function () {

  'use strict';

  function WeddingsController (WelcomeService, ModalService, $element, $state, $window, $location, $timeout) {
    var vm = this;
    vm.welcome = welcome;
    // vm.contactModal = contactModal;

    $timeout(function () {
      $state.go('home.tables')
    }, 50000);

    function welcome() {
       return WelcomeService.contactModal();
    }
    // function contactModal() {
    //   ModalService.showModal({
    //     templateUrl: 'users/register.html',
    //     controller: 'UsersController'
    //   }).then(function(modal) {
    //     modal.element.modal();
    //     modal.close.then(function(result) {
    //       console.log(result);
    //     });
    //   });
    // }


  }


angular
  .module('au-ciel')
  .controller('WeddingsController', WeddingsController)

}());
