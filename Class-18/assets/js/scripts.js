jQuery(document).ready(function($){
    $(".homepage-slides").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        autoplay: true 
    });

    $(".team-list").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true 
    });
    $(".testimonial-list").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false 
    });
     $(".logo-carousel").owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false 
    });
    

    $("#web-design-skillbar").circleProgress({
        value: 0.9,
        size: 270,
        thickness: 2,
        fill: '#0BBBC1',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-nb').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $("#graphic-design-skillbar").circleProgress({
        value: 0.95,
        size: 270,
        thickness: 2,
        fill: '#0BBBC1',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-nb').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $("#digital-design-skillbar").circleProgress({
        value: 0.84,
        size: 270,
        thickness: 2,
        fill: '#0BBBC1',
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-nb').html(Math.round(84 * progress) + '<i>%</i>');
    });

    $(".portfolio-filter li").on('click', function() {
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");

        var filterValue = $(this).attr("data-filter");

        $(".portfolio-list").isotope({
            filter: filterValue,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.col-md-3',
                horizontalOrder: false
            }
        });
    });

    $(".portfolio-list").isotope({
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.col-md-3',
            horizontalOrder: false
        }
    });

    // var uluru = {lat: 23.8766719, lng: 90.3607783};


    var center = [23.8766719, 90.3607783];
    $('.map')
      .gmap3({
        center: center,
        zoom: 11,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      })
      .marker({
        position: center
      })
      .overlay({
        position: center,
        content:  '<div style="color:#fff; font-size:18px; border:1px solid #ddd; background-color: #7FAB5B; width:120px; line-height:50px; height: 50px; text-align:center">' +
          'Hello Uttara ' +
        '</div>',
        x:-60,
        y:-92
      })
      .on({
        mouseover: function (overlay) {
          overlay.$.find(">*").css({backgroundColor: "#00FF00"})
        },
        mouseout: function (overlay) {
          overlay.$.find(">*").css({backgroundColor: "#7FAB5B"})
        }
      });
});
 

  

