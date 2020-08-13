jQuery(function () {

	$('.burger_container').click(function(){
		$('.header').slideToggle(500);
		$('.burger_before').toggleClass('_active');
		$('.burger').toggleClass('_active');
		$('.burger_after').toggleClass('_active');
	});
	$('._form').on('focus', function(){		
		if ($(this).val() == 'Имя'  || $(this).val() == 'Телефон') {
			$(this).val('');
		}
	});

	$('._form').on('blur', function(){
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Телефон');
			}
			
		}
	});
	$( document ).ready(function(){
		if($('html').width() <= 575){

			$('#slider_1').bxSlider({
				slideMargin: 30,
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: false,
				minSlides: 1,
				maxSlides: 6,
				slideWidth: 190,
				moveSlides: 1,
				swipeThreshold: 50,
				responsive: true,
			});
		}
	});
	var slider;
	$(window).resize(function(){
		if($('html').width() <= 575){
			 slider = $('#slider_1').bxSlider({
				slideMargin: 30,
				infiniteLoop: false,
				
				controls: false,
				minSlides: 1,
				maxSlides: 6,
				slideWidth: 190,
				moveSlides: 1,
				swipeThreshold: 50,
				responsive: true,
			});
		} else {
			if(slider === undefined){}else{
				slider.destroySlider();
			}
		}
	});




	$('#slider_2').bxSlider({
		slideMargin: 20,
		infiniteLoop: false,
		nextSelector: $('.next_control'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_control'),
		controls: true,
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 242,
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});


	var top = $('.recivies_cont').height();
	$('.next_control').css({
		'top': top/2 + 'px'
	});
	$('.prev_control').css({
		'top': top/2 + 'px'
	});


	$('.drop_control').click(function(){
		$('.add_drop').slideToggle(500);
	});
	$('.drop_item').click(function(){
		$('.drop_item_acc').text($(this).text());
		$('.add_drop').slideToggle(0);

	});





	$('.menu_link').click(function(){
		
	    $('html, body').animate({
	        scrollTop: $(`#to_scroll_${$(this).index()}`).offset().top - 30
	    }, 1000);
	});


	$('.part_1').click(function(){
		
		var pic = $('#gal_1').clone();
		$('.popup_cont').empty();
		$('.popup_cont').append(pic);
	});
	$('.part_2').click(function(){
		
		var pic = $('#gal_2').clone();
		$('.popup_cont').empty();
		$('.popup_cont').append(pic);
	});





	$('.arrow_up').click(function(){
		 $('html, body').animate({
	        scrollTop: 0 
	    }, 2000);
	});
});


