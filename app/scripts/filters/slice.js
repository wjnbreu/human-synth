'use strict';

/**
 * @ngdoc filter
 * @name humanSynthApp.filter:slice
 * @function
 * @description
 * # slice
 * Filter in the humanSynthApp.
 */
angular.module('humanSynthApp')
  .filter('slice', function () {
    return function (arr, start, end) {
      return (arr ||[]).slice(start, end);
    };
  });
