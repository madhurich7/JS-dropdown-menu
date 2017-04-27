$(document).ready(function(){
	$('html').click(function(){
		//alert('body');
		if($(this).find('body').find('.open')[0]){
			$(this).find('.dropdown').removeClass('open');
		}
		console.log($(this).find('body').find('.open')[0]);
		//console.log('sfsda');
	});
		
	//console.log($('.dropdown').find('.open'));
	$('.dropdown').click(function(e){
		e.stopPropagation();
		console.log($('body').find('.open')[0]);
		
	if($('body').find('.open')[0]){
		$(this).removeClass('open');
	}else{
		$(this).addClass('open');
	}


	});

	
});