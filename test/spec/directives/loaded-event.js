'use strict';

describe('Directive: loadedEvent', function () {

  // load the directive's module
  beforeEach(module('humanSynthApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loaded-event></loaded-event>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loadedEvent directive');
  }));
});
