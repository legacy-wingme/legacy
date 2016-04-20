(function() {

var module = angular.module('wingme.controllers');

module.controller('ProfileCtrl', function(Profile, $scope, $state) {
  
  var vm = this;

  vm.postProfile = function(age, location, job, hobbies, want, dealBreaker, socialMedia, misc) {
    console.log('inside vm.postProfile');
    var userProfile = {
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

  // vm.clearFields = function () {
    
  // }
});

})();
