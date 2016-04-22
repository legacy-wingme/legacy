(function() {

var module = angular.module('wingme.controllers');

module.controller('NavCtrl', navCtrl);

function navCtrl(Auth, $state, $scope) {

  var vm = this;
  vm.inChat = false;

  vm.authed = Auth.isAuthed();

  vm.logout = function() {
    Auth.logout();
    $state.go('login');
  }

  vm.chat = function () {
    vm.inChat = true;
    $state.go('chat');
  }

  vm.leave = function () {
    vm.inChat = false;
    $state.go('tab.addWing');
  }

  // listeners

  $scope.$on('loggedOut', function() {
    vm.authed = false;
  });

  $scope.$on('loggedIn', function() {
    vm.authed = true;
  })
}

})();
