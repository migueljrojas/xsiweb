'use strict';

// Constructor
var Job = function() {
    var jobs = $('.team__member');

    if (jobs) {
        jobs.each(function(){

            var $this = $(this);
            var close = $this.find('.team__member__btn-close');
            var trigger = $this.find('.team__member__overlay');

            trigger.click(function(){
                $this.addClass('-animating');
                $this.addClass('-expanded');

                setTimeout(function(){
                    $this.removeClass('-animating');
                }, 600);
            });

            close.click(function(){
                $this.addClass('-animating');
                $this.removeClass('-expanded');

                setTimeout(function(){
                    $this.removeClass('-animating');
                }, 600);
            })

        });
    }
};

module.exports = Job;
