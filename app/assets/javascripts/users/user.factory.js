(function() {

    'use strict';

  function UserFactory($http) {

        return {
          createUser: createUser
        }

    function createUser(user) {
      var req = {
              method: 'POST',
              url: '/users',
              headers: {
                  'Content-Type': 'application/json'
              },
              data: {user: user}
          }
          return $http(req)
                  .then(handleResponse)
                  .catch(handleError)
      }

    function handleResponse(response) {
        return response.data
    }

    function handleError(error) {
        console.log(error)
    }
  }

    angular
    .module('au-ciel')
    .factory('UserFactory', UserFactory)
}())
