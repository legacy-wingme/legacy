(function() {

  var module = angular.module('wingme.services');

  module.factory('Sms', sms);

  function sms($http, Config, Auth) {


    function postsms() {
      var request = {
      method: 'POST',
      url: Config.dev.api + '/message'
    };
    return $http.post(request.url);
    }
    return {
      postsms: postsms
    }

  }


})();
