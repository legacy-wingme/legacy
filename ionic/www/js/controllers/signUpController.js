(function() {

var module = angular.module('wingme.controllers');

module.controller('SignUpCtrl', function(Auth, $state, $rootScope) {

  var vm = this;

  vm.error = false;
  vm.message;

  vm.signup = function(username, email, phonenumber, firstname, lastname, password) {
    var userObj = {
      username: username,
      email: email,
      phonenumber: phonenumber,
      firstname: firstname,
      lastname: lastname,
      password: password
    }
    console.log(userObj);

    Auth.signup(userObj)
      .then(function(resp) {
        if (resp.data.success) {
          $state.go('tab.profile');
          $rootScope.$broadcast('loggedIn');
        } else {
          vm.error = true;
          vm.message = resp.data.message;
        }
      });
  }
});

})();
