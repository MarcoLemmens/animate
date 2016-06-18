$.fn.simpleani = function (animation, delay) {


    var animationName = animation;


    $(this).addClass("animated " + animation);


};


$(document).ready(function () {

    $("#img").simpleani("fallDown");


    window.setInterval(function () {
        $("#img2").simpleani("bounce");
    }, 1000);

    window.setInterval(function () {
        $("#img3").simpleani("poster");
    }, 2000);



});