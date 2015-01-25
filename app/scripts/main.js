$(function(){
	$(window).load(function(e) {
		app.initialize();
		app.stikFooter();
	})	

	$(window).resize(function(){
		app.stikFooter();
	})

	window.app = {
		initialize: function() {
			$('.reviews-list li').click(function(e) {
				if(!$(this).hasClass('active')) {
					$(this).addClass('active').siblings('li.active').removeClass('active');
					$('.info').html($(this).find('.review-preview').html());
				}
			})
		},

		stikFooter: function() {
			$('.content-holder').css('padding-bottom',$('.footer').height()+'px');
		}
	}

	
});