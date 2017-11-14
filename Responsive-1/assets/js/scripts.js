jQuery(document).ready(function($) {
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		autoplay: false
	});

	$(".team-list").owlCarousel({
		margin: 30,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false,
		responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    }
	});
	
	$(".testimonial-list").owlCarousel({
		margin: 30,
		loop: true,
		nav: false,
		dots: true,
		autoplay: false,
		responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    }
	});

	$(".logo-carousel").owlCarousel({
		margin: 30,
		loop: true,
		nav: false,
		dots: false,
		autoplay: false,
		responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:3,
	        },
	        1000:{
	            items:5,
	        }
	    }
	});

	$("#web-design-skillbar").circleProgress({
		value: 0.9,
		size: 270,
		thickness: 2,
		fill: '#22babf',
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.skil-count-no').html(Math.round(90 * progress) + '<i>%</i>');
	});

	$("#graphic-design-skillbar").circleProgress({
		value: 0.95,
		size: 270,
		thickness: 2,
		fill: '#22babf',
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.skil-count-no').html(Math.round(95 * progress) + '<i>%</i>');
	});

	$("#digital-marketing-skillbar").circleProgress({
		value: 0.84,
		size: 270,
		thickness: 2,
		fill: '#22babf',
	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.skil-count-no').html(Math.round(84 * progress) + '<i>%</i>');
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
});