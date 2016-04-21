(function() {

var module = angular.module('wingme.controllers');

module.controller('AddWingCtrl', function(Wings, Sms) {

	var vm = this;
	vm.submit = function(username){
		Wings.addWingPost(username);
    Sms.postsms().then(function($state){
    	$state.go($state.current, {}, {reload: true, inherit: false});
    })
	};


});

})();
