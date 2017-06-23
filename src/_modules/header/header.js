'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var main = $('main');
    var footer = $('footer');

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
        });
    });
};

module.exports = Header;
