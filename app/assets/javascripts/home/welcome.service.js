(function () {

  'use strict';

  function WelcomeService ($state, $window, $location, ModalService) {
    var ctrl = this;
    ctrl.contactModal = contactModal;
    ctrl.thankYouModal = thankYouModal;

    function contactModal() {
      ModalService.showModal({
        templateUrl: 'users/register.html',
        controller: 'UsersController'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function() {
          console.log(user);
        });
      });
    }

    function thankYouModal() {
      ModalService.showModal({
        templateUrl: 'users/thankyou.html',
        controller: 'UsersController'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(user) {
          console.log(user);
        });
      });
    }

  }

  angular
    .module('au-ciel')
    .service('WelcomeService', WelcomeService)

}());
