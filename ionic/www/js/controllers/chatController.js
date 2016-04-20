(function() {

  var module = angular.module('wingme.controllers');

  module.controller('ChatCtrl', function($scope, $state, $ionicPopup, Messages) {
    $scope.messages = Messages;

    $scope.addMessage = function(text) {

     // $ionicPopup.prompt({
     //   title: 'Need to get something off your chest?',
     //   template: 'Let everybody know!'
     // }).then(function(res) {
      $scope.messages.$add(
      {
        "message": text
      });
     // });
    };

    // $scope.logout = function() {
    //   var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
    //   ref.unauth();
    //   $state.go('login');
    // };
  });

})();
