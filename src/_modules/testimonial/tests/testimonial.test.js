'use strict';

var Testimonial = require('../testimonial');

describe('Testimonial View', function() {

  beforeEach(function() {
    this.testimonial = new Testimonial();
  });

  it('Should run a few assertions', function() {
    expect(this.testimonial);
  });

});
