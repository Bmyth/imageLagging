var _top;
$(function(){
	_top = scrollTop();
	$(window).scroll(_.debounce(function(e){
		imageLag();
		_top = scrollTop();
	}, 20))
})

function scrollTop(){
	return $(window).scrollTop()
}

function imageLag(){
	var offset = _top - scrollTop();
	if(offset > -10 && offset < 10){
		return;
	}
	if($('.clone').length > 0){
		return;
	}
	var photos = $('.photo');
	photos.each(function(){
		var img = $(this).find('img');
		var num = 5;
		// var offsets = [];
		for (var i = 0; i < num; i++){
			var y = offset - parseInt(offset / num * i);
			var item = $(img).clone().addClass('clone').appendTo($(this));
			if(offset > 0){
				$(item).css('top', -y)
				$(item).animate({'top': 0}, 600, 'linear', function(){
					$('.clone').remove();
					console.log('s')
				})
			}else{
				$(item).css('bottom', y)
				$(item).animate({'bottom': 0}, 600, 'linear', function(){
					$('.clone').remove();
					console.log('s')
				})
			}
		}
	})
}