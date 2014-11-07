'use strict';

describe('Service: brightcove', function () {

  // load the service's module
  beforeEach(module('humanSynthApp'));

  // instantiate service
  var brightcove;
  beforeEach(inject(function (_brightcove_) {
    brightcove = _brightcove_;
  }));

  it('should do something', function () {
    expect(!!brightcove).toBe(true);
  });

});
