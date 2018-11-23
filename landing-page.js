$(document).ready(function()
{

    //init ScrollMagic
var controller = new ScrollMagic.Controller();

 /*var pinLandingPage = new ScrollMagic.Scene({
    triggerElement: '#landingPage',
    triggerHook: 0,
    duration: '30%'
})
.setPin('#landingPage',{ pushFollowers: false})
    .addTo(controller);

//pin again
    var pinLandingPage2 = new ScrollMagic.Scene({
        triggerElement: '#product01',
        triggerHook: 0.4
    })
        .setPin('#landingPage',{ pushFollowers: false})
        .addTo(controller);
*/

    //Loop through each product
    $('.product').each(function () {
        //build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '100%'
        })
            .setClassToggle(this, 'fade-in') //add class to product01
            .addTo(controller);
    });

});