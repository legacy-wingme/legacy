(function() {

var module = angular.module('wingme.controllers');

module.controller('AddWingCtrl', function(Wings, Sms, Auth, $scope) {
  var vm = this;
  vm.message = Auth.username + " has made a wing request.";
  vm.submit = function(username){
    var targetUsername = $scope.addWing.username;
    Wings.addWingPost(username);
    Auth.getNumber(targetUsername).then(function(data) {
      Sms.postsms(data.data[0].phonenumber, vm.message).then(function($state){
        $state.go($state.current, {}, {reload: true, inherit: false});
      })
    })
  };

});

})();
