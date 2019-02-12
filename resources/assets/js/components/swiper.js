const swiper = require('swiper');
/*
 |--------------------------------------------------------------------------
 | Document Ready Function
 |--------------------------------------------------------------------------
 */
$(function() {

   'use strict';
	var popupGallery;
	$(document).ready(function () {
		$('#myButton').click(function (e) {
		e.preventDefault();
		   	$('#exampleModal').on('show.bs.modal', function (e) {
		      popupGallery = new Swiper('.swiper', {
		        loop: true,
      			slidesPerView: 2,
      			spaceBetween: 10,
      			pagination: {
        			el: '.swiper-pagination',
        			clickable: true,
      			},
		      });

		      $('.swiper-container-next').click(function () {
		        popupGallery.slideNext();
		      });

		      $('.swiper-container-prev').click(function () {
		        popupGallery.slidePrev();
		      });
		    });
		    
		    $('#exampleModal').on('shown.bs.modal', function (e) {
		      popupGallery.update();
		    });

		    $('#exampleModal').modal();
		  });
	});
	if (screen.width < 480) {
	$(document).ready(function () {
		$('#myButton').click(function (e) {
		e.preventDefault();
		   	$('#exampleModal').on('show.bs.modal', function (e) {
		      popupGallery = new Swiper('.swiper', {
		        loop: true,
      			slidesPerView: 1,
      			spaceBetween: 1,
      			pagination: {
        			el: '.swiper-pagination',
        			clickable: true,
      			},
		      });

		      $('.swiper-container-next').click(function () {
		        popupGallery.slideNext();
		      });

		      $('.swiper-container-prev').click(function () {
		        popupGallery.slidePrev();
		      });
		    });
		    
		    $('#exampleModal').on('shown.bs.modal', function (e) {
		      popupGallery.update();
		    });

		    $('#exampleModal').modal();
		  });
	});
	}
});