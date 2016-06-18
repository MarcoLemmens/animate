(function ( $ ) {

    $.fn.animate = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            animation: "poster",
            duration: 2
        }, options );


        var durationcss = settings.duration + "s";

        $(this).addClass("animated " + settings.animation);
        $(this).css("-webkit-animation-duration", durationcss);
        $(this).css("animation-duration", durationcss);



    };

}( jQuery ));