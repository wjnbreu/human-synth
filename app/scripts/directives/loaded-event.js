/*global $:false */

'use strict';

/**
 * @ngdoc directive
 * @name humanSynthApp.directive:loadedEvent
 * @description
 * # loadedEvent
 */
angular.module('humanSynthApp').directive('loadedEvent', function () {
	
	var width = $(window).width();
	var height = $(window).height();
	var pWidth, pHeight;
	var ratio = 1920 / 1200;

	var resize = function(element){


		width = $(window).width();
		height = $(window).height();

		if ((width / ratio) < height){
			pWidth = Math.ceil(height * ratio);
			element.width(pWidth).height(height).css({
				left: (width - pWidth) / 2,
				top: 0
			});
		}

		else{
			pHeight = Math.ceil(width / ratio);
			element.width(width).height(pHeight).css({
				left: 0,
				top: (height - pHeight) / 2
			});
		}


	};

	var link = function($scope, element){
		element.bind('loadeddata', function(){
			//when element is loaded, make sure it's is 100% width
			resize(element);
		});

		$(window).resize(function(){
			resize(element);
		});

	};

	return {
		link: link
	};
});
