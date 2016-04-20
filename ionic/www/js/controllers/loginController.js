(function() {

var module = angular.module('wingme.controllers');

module.controller('LoginCtrl', loginCtrl);

function loginCtrl(Auth, $state, $rootScope) {

  var vm = this;
  
  vm.error = false;
  vm.message;

  vm.login = function(username, password) {
    Auth.login(username, password)
      .then(function(resp) {
        if (resp.data.success) {
          $rootScope.$broadcast('loggedIn');
          console.log(resp.config.data.username);
          Auth.username = resp.config.data.username;
          $state.go('tab.addWing');
        } else {
          vm.error = true;
          vm.message = resp.data.message;
          console.error(resp.data.message);
        }
      })
  }

  vm.redirectToSignup = function() {
    $state.go('signup');
  }
}

})();
