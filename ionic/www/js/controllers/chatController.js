(function() {

  var module = angular.module('wingme.controllers');

  module.controller('ChatCtrl', function($scope, $state, $ionicPopup, Messages, Auth) {
    $scope.messages = Messages;
    $scope.username = Auth.username;
    $scope.chat = {
      string: ''
    };
    $scope.text;


    $scope.addMessage = function(text) {
      $scope.text = text;
      $scope.chat.string = '';
     // $ionicPopup.prompt({
     //   title: 'Need to get something off your chest?',
     //   template: 'Let everybody know!'
     // }).then(function(res) {
      $scope.messages.$add(
      {
        "message": $scope.text,
        "username": $scope.username
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
