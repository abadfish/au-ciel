(function () {

  'use strict';

  function WelcomeService ($state, $window, $location, ModalService) {
    var ctrl = this;
    ctrl.contactModal = contactModal;

    function contactModal() {
      ModalService.showModal({
        templateUrl: 'users/register.html',
        controller: 'UsersController'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          console.log(result);
        });
      });
    }

  }

  angular
    .module('au-ciel')
    .service('WelcomeService', WelcomeService)

}());
