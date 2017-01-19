(function () {

  'use strict';

  function WelcomeService ($element, $state, $window, $location, ModalService) {
    var vm = this;
    vm.loadVideo = loadVideo;
    vm.contactModal = contactModal;

    activate();

    function activate() {
      loadVideo();
    }

    function loadVideo() {
      document.getElementById("mp4_src").src = "https://s3.amazonaws.com/au-ciel/sky-14s.mp4";
    }

    function contactModal() {
      ModalService.showModal({
        templateUrl: 'users/register.html',
        controller: 'UsersController'
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          if (result === 'redirect') {
            $state.go("home.thankyou")
          } else {
            console.log(result);
          }
        });
      });
    }
  }



  angular
    .module('au-ciel')
    .controller('WelcomeService', WelcomeService)

}());
