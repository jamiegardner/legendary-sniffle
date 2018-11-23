$(document).ready(function()
{

    //init ScrollMagic
var controller = new ScrollMagic.Controller();

    //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#product01'

    })
        .setClassToggle('#product01', 'fade-in') //add class to product01
        .addTo(controller);

    ourScene = new ScrollMagic.Scene({
        triggerElement: '#product02'
    })
        .setClassToggle('#product02', 'fade-in') //add class to product01
        .addTo(controller);

    ourScene = new ScrollMagic.Scene({
        triggerElement: '#product03'
    })
        .setClassToggle('#product03', 'fade-in') //add class to product01
        .addTo(controller);

    ourScene = new ScrollMagic.Scene({
        triggerElement: '#product04'
    })
        .setClassToggle('#product04', 'fade-in') //add class to product01
        .addTo(controller);

});