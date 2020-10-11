$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        mouseDrag:false,
        autoplay:true,
        animateOut: 'slideOutUp',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            }
        }
    });


    // -----------vailidation  contact----------//
    jQuery('#name').keypress(function (evt) { 
        var inputValue = (evt.which) ? evt.which : evt.keyCode;
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)  && inputValue != 46) { 
         evt.preventDefault(); 
    }
 });
    jQuery('#thank-you').hide();
    
        
    });





    




}); 
