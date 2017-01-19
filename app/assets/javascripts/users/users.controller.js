(function () {

  'use strict';

  function UsersController ($scope, $element, close, UserFactory) {

    $scope.email = user.email;
    $scope.createUser = createUser;
    $scope.id = user.id;


    $scope.close = function(result) {
 	    close(result, 500);
    };

    function createUser() {
        return UserFactory.createUser()
                .then(handleResponse)
                .catch(handleError)

        function handleResponse(data) {
            console.log(data)
        }
        function handleError(error) {
            console.log(error)
        }
    }

  }

  angular
    .module('au-ciel')
    .controller('UsersController', UsersController)

}());
