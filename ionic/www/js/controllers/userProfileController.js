(function() {

var module = angular.module('wingme.controllers');

module.controller('ProfileCtrl', function(Profile, Auth, $scope, $state) {
  
  var vm = this;

  vm.postProfile = function(username, age, location, job, hobbies, want, dealBreaker, socialMedia, misc) {
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

    Profile.postProfile(userProfile)
      .then(function(){
        console.log('Profile posted');
      })
      .catch(function(err){
        console.error(err);
      });  
  }
});

})();
