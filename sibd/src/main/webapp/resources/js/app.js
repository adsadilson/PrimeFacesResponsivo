$(document).ready(function() {
	
	$('.js-toggle').bind('click', function() {
		$('.js-barra-lateral').toggleClass('is-toggled');
		$('.js-conteudo').toggleClass('is-toggled');
	});
	
});