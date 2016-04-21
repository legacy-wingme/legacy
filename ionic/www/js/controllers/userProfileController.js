(function() {

var module = angular.module('wingme.controllers');

module.controller('ProfileCtrl', function(Profile, Auth, $scope, $state) {
  
  var vm = this;

  vm.postProfile = function(age, location, job, hobbies, want, dealBreaker, socialMedia, misc) {
    console.log('inside vm.postProfile');
    
    var userProfile = {
      username: Auth.username,
      age: age,
      location: location,
      job: job,
      hobbies: hobbies,
      want: want,
      dealBreaker: dealBreaker,
      socialMedia: socialMedia,
      misc: misc
    };

    $scope.master = {};
    Profile.postProfile(userProfile);
    $scope.master = angular.copy(userProfile);
      .then(function(){
        console.log('Profile posted');
      })
      .catch(function(err){
        console.error(err);
      });
    };

    $scope.reset = function() {
       angular.copy($scope.master, $scope.profile);
     };

     $scope.reset();

  }
});
})();
