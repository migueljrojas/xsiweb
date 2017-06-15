'use strict';

var Job = require('../job');

describe('Job View', function() {

  beforeEach(function() {
    this.job = new Job();
  });

  it('Should run a few assertions', function() {
    expect(this.job);
  });

});
