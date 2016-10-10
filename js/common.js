$(function() {

	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('#project-clider').owlCarousel({
		items:1,
		loop:true, //Зацикливаем слайдер		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		margin: 55,
	});

	$('#comfortable-slider').owlCarousel({
		items:1,
		loop:true, //Зацикливаем слайдер		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		margin: 10,
	});

	$('#manufacture-clider').owlCarousel({		
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда			
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('#we-recomended-slider').owlCarousel({
		items:1,
		loop:true, //Зацикливаем слайдер		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		margin: 55,
	});

	$('#certificates-clider').owlCarousel({
		items:3,
		loop:true, //Зацикливаем слайдер		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		margin: 5,
	});

});
