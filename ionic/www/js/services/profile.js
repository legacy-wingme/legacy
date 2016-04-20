(function() {

var module = angular.module('wingme.services');

module.factory('Profile', profile);

// --------------------------------------

function profile($http, $state, Auth, Config) {

  return {
    postProfile: postProfile
  }

  // ------------

  function postProfile(userProfile) {
    console.log(userProfile);
    var request = {
      method: 'POST',
      url: Config.dev.api + '/profiles',
      data: userProfile
    };

    // we return a promise here so that the controller retains async control.
    return $http(Auth.attachToken(request))
      .then(success, error);

    // we can expect an encoded token string from our server.
    function success(resp) {
      console.log(resp);
      return resp;
    }

    function error(err) {
      return console.error(err);
    }
  }

}

})(); // end
