'use strict';

/**
* @ngdoc function
* @name humanSynthApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the humanSynthApp
*/
angular.module('humanSynthApp').controller('MainCtrl', ['$scope', '$rootScope', '$timeout', 'contentfulClient', 'brightcove', function ($scope, $rootScope, $timeout, contentfulClient, brightcove){
	
	$scope.data = {};
	$scope.data.title = '';
	$scope.data.body = '';
	$scope.data.ready = false;
	$scope.video = false;
	$scope.intro = true;
	$scope.links = [];
	$scope.videoOn = true;
	$scope.flash = false;

	var timeout;



	var notify = function(){


		//if video ready never fires, drop spinner after 5 seconds
		timeout = $timeout(function(){
			$scope.video = true;
			
			//send notification
			$scope.flash = true;

		},5000);
		
		//drop spinner after video is ready
		$rootScope.$on('playerready', function(data, player){
			$scope.player = player;
			
			$timeout(function(){
				$scope.video = true;
				
				//clear timeout if video event fires first
				$timeout.cancel(timeout);

			},500);

		});

	};

	

	//get data
	contentfulClient.entries({'sys.id': '1twzxxkiC4wMWWyWEGuecq', 'include':10}).then(function(data){
		$scope.data = data[0];
		$scope.data.ready = true;
		console.log($scope.data);

		var videoId = $scope.data.fields.videoId;
		$scope.links = $scope.data.fields.links.links;
		//instantiate video player
		brightcove.init(videoId);
	
	});

	$scope.dropVid = function(){
		$scope.videoOn = false;
		$scope.intro = false;
		$scope.player.play();
	};

	$scope.dropBody = function(){
		$scope.videoOn = true;
		$scope.intro = true;
		$scope.player.pause();

	};


	//run notification
	notify();

}]);
