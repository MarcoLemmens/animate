(function ( $ ) {

    $.fn.animate = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            animation: "poster",
            duration: 2,
            infinite: false
        }, options );

        var infinite;
        if(settings.infinite == false){
            infinite = "";
        }
        else{
            infinite = "infinite ";
        }


        var durationcss = settings.duration + "s";

        $(this).addClass("animated " + infinite + settings.animation);
        $(this).css("-webkit-animation-duration", durationcss);
        $(this).css("animation-duration", durationcss);

    };

}( jQuery ));