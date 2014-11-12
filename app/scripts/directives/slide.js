'use strict';

/**
 * @ngdoc directive
 * @name humanSynthApp.directive:slide
 * @description
 * # slide
 */
angular.module('humanSynthApp').directive('slide', function () {

	var link = function($scope, element){


		element.click(function(){
			element.transition({
				top: -110
			});
		});

	};


	return {
		link: link
	};
});
