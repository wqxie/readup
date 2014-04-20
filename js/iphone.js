$(document).ready(function(){
	$('.list-btn').click(function(){
		if ($('.iphone-container').css("left")=='0px') {
			$('.iphone-container').animate({left:'200px'});
			$('.header p').animate({marginLeft:'10px'});
			$('.hidden-menu').animate({left:'0px'});
		}else{
			$('.iphone-container').animate({left:'0px'});
			$('.header p').animate({marginLeft:'85px'});
			$('.hidden-menu').animate({left:'-200px'});
		}
	});

	$('.circle-tab').click(function(){
		if($('.circle-tab p').text() == 'Run')
		{
			$('.iphone-container').find('.card').addClass('flipped');
			$('.circle-tab img').attr("src", "./images/social.png");
			$('.circle-tab p').html("Stop");
		}else{
			$('.iphone-container').find('.card').removeClass('flipped');
			$('.circle-tab img').attr("src", "./images/run.png");
			$('.circle-tab p').html("Run");
		}
		
		console.log("click");
	});

	$('.hidden-menu .menu').click(function(){
		console.log("test");
		$('.hidden-menu .selected').removeClass('selected');
		$(this).addClass('selected');
	});



})//function ready end
