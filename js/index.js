$(document).ready(function(){
   
    $(window).scroll(function(){
        if ($('#p-motivation').isOnScreen()) {
            // The element is visible, do something
            
            $('#p-motivation').removeClass('invisible'); 
            $('#p-motivation').addClass('magictime spaceInLeft'); 

        }
        if ($('#p-about').isOnScreen()) {
            // The element is visible, do something
            
            $('#p-about').removeClass('invisible'); 
            $('#p-about').addClass('magictime spaceInRight'); 

        }
        if ($('#p-approach').isOnScreen()) {
            // The element is visible, do something
            
            $('#p-approach').removeClass('invisible'); 
            $('#p-approach').addClass('magictime spaceInLeft'); 

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
        if ($('#pdf1').isOnScreen()) {
            // The element is visible, do something
            
            $('#pdf1').removeClass('invisible'); 
            $('#pdf1').addClass('magictime boingInUp'); 

        }
        if ($('#pdf2').isOnScreen()) {
            // The element is visible, do something
            
            $('#pdf2').removeClass('invisible'); 
            $('#pdf2').addClass('magictime boingInUp'); 

        }
        if ($('#p1').isOnScreen()) {
            // The element is visible, do something
            
            $('#p1').removeClass('invisible'); 
            $('#p1').addClass('magictime spaceInDown'); 

        }
        if ($('#p2').isOnScreen()) {
            // The element is visible, do something
            
            $('#p2').removeClass('invisible'); 
            $('#p2').addClass('magictime spaceInDown'); 

        }
        if ($('#p3').isOnScreen()) {
            // The element is visible, do something
            
            $('#p3').removeClass('invisible'); 
            $('#p3').addClass('magictime spaceInDown'); 

        }
        if ($('#p4').isOnScreen()) {
            // The element is visible, do something
            
            $('#p4').removeClass('invisible'); 
            $('#p4').addClass('magictime spaceInDown'); 

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
    viewport.bottom = viewport.top + win.height() + -200;
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};