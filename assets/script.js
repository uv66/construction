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
    jQuery('#gform').submit(function(){
        jQuery.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSe0nowVGepowP0zuYksbndonXj6gSdJMTRC493SXedsSlPKpw/?',
        data: jQuery(this).serialize() // getting filed value in serialize form
        })
        .done(function(data){
          console.log(data); // if getting done then call.
        jQuery('#gform').replaceWith(jQuery('#thank-you').html());

        })
        .fail(function() { // if fail then getting message
        // just in case posting your form failed
        alert( "Po failed." );

        });
        // to prevent refreshing the whole page page
        return false;
        
    });





    




}); 
