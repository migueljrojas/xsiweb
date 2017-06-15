'use strict';

// Constructor
var Job = function() {
  this.name = 'job';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Job;
