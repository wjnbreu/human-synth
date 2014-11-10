'use strict';

describe('Directive: magnify', function () {

  // load the directive's module
  beforeEach(module('humanSynthApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<magnify></magnify>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the magnify directive');
  }));
});
