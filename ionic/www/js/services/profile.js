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
    return $http.post(request.url, userProfile);
  }

}

})(); // end
