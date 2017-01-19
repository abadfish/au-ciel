(function () {

  'use strict';

  function UsersController ($scope, $element, close, UserFactory, $window, $location, WelcomeService) {
    $scope.createUser = createUser;
    $scope.sayThankYou = sayThankYou;


    $scope.close = function(result) {
 	    close(result, 500);
    };

    function createUser(user) {
        return UserFactory.createUser(user)
                .then(handleResponse)
                .catch(handleError)

        function handleResponse(data) {
            sayThankYou();
            $window.location.reload();

        }
        function handleError(error) {
            console.log(error)
        }
    }

    function sayThankYou() {
      return WelcomeService.thankYouModal()

    }

  }

  angular
    .module('au-ciel')
    .controller('UsersController', UsersController)

}());
