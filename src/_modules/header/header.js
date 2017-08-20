'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var main = $('main');
    var footer = $('footer');
    var gotop = $('.gotop');
    var url = window.location.pathname;
    var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'') + '$');

    header.addClass('-ontop');

    $('.header__hamburguer').on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
        main.toggleClass('-blur');
        footer.toggleClass('-blur');
    });

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('-ontop');
            } else {
                header.addClass('-ontop');
            }

            if (scroll >= 800) {
                gotop.removeClass('-hidden');
            } else {
                gotop.addClass('-hidden');
            }
        });
    });


    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });


    // now grab every link from the navigation
    $('.header__menu li a').each(function(){
        // and test its normalized href against the url pathname regexp

        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).parents('.header__menu li').addClass('-active');
        }
    });
};

module.exports = Header;
