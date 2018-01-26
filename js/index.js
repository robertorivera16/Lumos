$(document).ready(function(){
   
    $(window).scroll(function(){
        if ($('#p-motivation').isOnScreen()) {
            // The element is visible, do something
            
            $('#p-motivation').removeClass('invisible'); 
            $('#p-motivation').addClass('magictime spaceInLeft'); 

        }
        
        if ($('#features').isOnScreen()) {
            // The element is visible, do something
            
            $('#features').removeClass('invisible'); 
            $('#features').addClass('magictime boingInUp'); 

        }
        if ($('#features1').isOnScreen()) {
            // The element is visible, do something
            
            $('#features1').removeClass('invisible'); 
            $('#features1').addClass('magictime boingInUp'); 

        }
        if ($('#features2').isOnScreen()) {
            // The element is visible, do something
            
            $('#features2').removeClass('invisible'); 
            $('#features2').addClass('magictime boingInUp'); 

        }
         
    });
});

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() + -100;
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};