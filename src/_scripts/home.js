'use strict';

// Constructor
var Home = function() {
    $(function soyxsi() {

        //Btn Action IT
        $( '.btn__soy-it' ).on( 'click', function() {
            $( '.it, .finanzas' ).addClass('-hidden');
            $( '.it-open' ).addClass('-shown');
        });

        //Btn Action Finanzas
        $( '.btn__soy-finanzas' ).on( 'click', function() {
            $( '.it, .finanzas' ).addClass('-hidden');
            $( '.finanzas-open' ).addClass('-shown');
        });

        //Btn Action Close
        $( '.btn__close' ).on( 'click', function(){
            $( '.finanzas-open' ).removeClass('-shown');
            $( '.it-open' ).removeClass('-shown');
            $( '.it, .finanzas' ).removeClass('-hidden');
        });

    });

};

module.exports = Home;
