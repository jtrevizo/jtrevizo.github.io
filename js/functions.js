/* Obatined from stackoverflow to fix a problem http://stackoverflow.com/questions/18251388/jquery-and-jslint-was-used-before-it-was-defined */
/*jslint browser: true*/
/*global $, jQuery, alert*/



/* Function fades in picture and wait for switch to be clicked */
function main() {
    'use strict';
    $('#resize').hide();
    $('#resize').fadeIn(1000);
    $('.Bio').hide();
    $('.Bio').fadeIn(1000);
    
    /*Swaps Color of the web page to red*/
    $('.switcher').click(function () {
        $('.navbar').css("background-color", '#300e0e');
        $('.mainHeader').css("background-color", '#db4343');
        $('.Bio').css("color", '#db4343');
        $('.Active').css("background", '#bf0092');
        $('.colorChange').css("color", '#db4343');
        $('.ContactInfo').css("color", '#db4343');
    });

}

$(document).ready(main);