$(function(){
	$('.reviews-list li').click(function(e) {
		if(!$(this).hasClass('active')) {
			$(this).addClass('active').siblings('li.active').removeClass('active');
			$('.info').html($(this).find('.review-preview').html());
		}
	})

	$(window).load(function(e) {
		$('.content-holder').css('padding-bottom',$('.footer').height()+'px');
	})	

	$(window).resize(function(){
		$('.content-holder').css('padding-bottom',$('.footer').height()+'px');
	})
});