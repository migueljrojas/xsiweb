'use strict';

// Constructor
var Home = function() {
    $(function soyxsi() {

        //Btn Action IT
        $( '.btn__soy-it' ).on( 'click', function() {
            $( '.it, .finanzas' ).css( 'display', 'none' );
            $( '.it-open' ).css( 'display', 'flex' );
        });

        //Btn Action Finanzas
        $( '.btn__soy-finanzas' ).on( 'click', function() {
            $( '.it, .finanzas' ).css( 'display', 'none' );
            $( '.finanzas-open' ).css( 'display', 'flex' );
        });

        //Btn Action Close
        $( '.btn__close' ).on( 'click', function(){
            $( '.finanzas-open' ).css( 'display', 'none' );
            $( '.it-open' ).css( 'display', 'none' );
            $( '.it, .finanzas' ).css( 'display', 'block' ).fadeIn( "slow" );
        });

    });
};

module.exports = Home;
