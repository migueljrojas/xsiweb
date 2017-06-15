'use strict';

var Team = require('../team');

describe('Team View', function() {

  beforeEach(function() {
    this.team = new Team();
  });

  it('Should run a few assertions', function() {
    expect(this.team);
  });

});
