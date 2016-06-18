$.fn.simpleani = function(animation) {
    
    
    var animationName = animation;
    
    $(this).addClass("animated "+animation);
    
};







$(document).ready(function(){
    
    $("#img").simpleani("swing");
});
    

