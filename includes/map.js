$(document).ready(function() {
	var lastCity;
	$('.city').click(function() {
		var city = ($(this).attr('id'));
		var info = '.team_info #'+city;
		var infoHTML = $(info).html();
		$('.detail').html(infoHTML);
		$('.info_container').removeClass(lastCity);
		$('.info_container').addClass(city);
		lastCity = city;
		
	});
	

});