jQuery(document).ready(function($){
    $(".homepage-slides").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        autoplay: true 
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
});
 

  

