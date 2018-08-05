$(document).ready(function() {


$(".csb-cols").masonry({
  itemSelector: '.csb-cols-item',
  columnWidth: 3

});
 

$(window).stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });



$('.csb-quad-list').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
   responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1600:{
            items:1,

        }
    }
    
});

$('.owl-carousel, .csb-quad-list, .csb-blog-home-page-2, .service-icon-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:30,
    autoplayTimeout:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1600:{
            items:4,

        }
    }
    
});


$('.owl-carousel-clients').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:30,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1600:{
            items:5,

        }
    }
    
});


$('.owl-carousel-clients-2').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:30,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1600:{
            items:3,

        }
    }
    
});

$('.portfolio-showcase').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1600:{
            items:4,

        }
    }
    
});

$('.owl-carousel-clients-1').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:30,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1600:{
            items:5,

        }
    }
    
});

$(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });



$('.testimonials-rotator, .tweets').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:10,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1600:{
            items:1,

        }
    }
    
});



$('.team-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:10,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1600:{
            items:1,

        }
    }
    
});

$(".rotate").textrotator({
        animation: "fade",
        speed: 2000
      });




  $('#portfolio-carousel').mixItUp();


$(".photos").flickrPhotoStream({ 

    id: '52617155@N08',
    setId: '72157640564846903', 
    container: '<li class="photos-item" />',
    cssClass: 'photos-link'

});



    

  $('[data-toggle="tooltip"]').tooltip();

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });




});

