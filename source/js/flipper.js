var FlipperModule = (function () {
	$(document).ready(function(){
		$('.password-question__item_registration').on('click', function(e){
			$('.flipper').toggleClass("rotate-authorize");
			$('.authorize__title').text('Регистрация');
			$('.authorize__text').css({'display': 'none'});
			$('.flip-container').css({'top': '302px'});
		});

		$('.password-question__item_entrance').on('click', function(e){
			$('.flipper').toggleClass("rotate-authorize");
			$('.authorize__title').text('Добро пожаловать');
			$('.authorize__text').css({'display': 'block'});
			$('.flip-container').css({'top': '380px'});
		});
	});	
}());