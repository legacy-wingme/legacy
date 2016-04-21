(function() {

  var module = angular.module('wingme.services');

  module.factory('Sms', sms);

  function sms($http, Config, Auth) {


    function postsms(username) {
      var request = {
      method: 'POST',
      url: Config.dev.api + '/message',
      headers: {
        "cache-control": "no-cache",
        "postman-token": "7f3e76b7-3bf7-660a-6838-3610bc7184b1",
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        username: username
      }
    };
    return $http(request);
    }
    return {
      postsms: postsms
    }

  }


})();
