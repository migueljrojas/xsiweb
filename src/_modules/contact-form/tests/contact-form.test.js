'use strict';

var ContactForm = require('../contact-form');

describe('ContactForm View', function() {

  beforeEach(function() {
    this.contactForm = new ContactForm();
  });

  it('Should run a few assertions', function() {
    expect(this.contactForm);
  });

});
