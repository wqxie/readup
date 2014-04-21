$(document).ready(function(){
	$('.list-btn').click(function(){
		if ($('.iphone-container').css("left")=='0px') {
			$('.iphone-container').animate({left:'200px'});
			$('.footer-tab').animate({left:'200px'});
			$('.header p').animate({marginLeft:'10px'});
			$('.hidden-menu').animate({left:'0px'});
		}else{
			$('.iphone-container').animate({left:'0px'});
			$('.footer-tab').animate({left:'0px'});
			$('.header p').animate({marginLeft:'85px'});
			$('.hidden-menu').animate({left:'-200px'});
		}
	});

	$('.circle-tab').click(function(){
		if($('.circle-tab p').text() == 'Read')
		{
			$('.circle-tab img').attr("src", "./images/social.png");
			$('.circle-tab p').html("Select");
			var delay=0;
			$('.start-booklist .start-book').each(function(){
				$(this).delay(delay).animate({top:'400px'},1000);
				delay+=200;
			});
			$('.blur-bg').show();
			$('.iphone-container').addClass('blur');
		}else{
			$('.circle-tab img').attr("src", "./images/run.png");
			$('.circle-tab p').html("Read");
			var delay=0;
			$('.start-booklist .start-book').each(function(){
				$(this).delay(delay).animate({top:'600px'},1000);
				delay+=200;
			});			
			$('.blur-bg').hide();
			$('.iphone-container').removeClass('blur');
		}
		
		console.log("click");
	});

	$('.hidden-menu .menu').click(function(){
		console.log("test");
		$('.hidden-menu .selected').removeClass('selected');
		$(this).addClass('selected');
	});
	
	var quotes=["Let me think what to eat? Fiction? Novel?",
	"To eat or not to eat, that is not a question",
	"Hey! Read more books so that I have something to eat.",
	"Yuqing is the most beatiful woman:)"];
	$('.pic-worm').click(function(){
		$(this).find('.quote-worm').text(quotes[Math.floor(Math.random()*4)]);
	});

	var pageno=54;
	$('.btn-feed').click(function(){
		$('.info .status').removeClass('red');
		$('.info .status').addClass('green');
		$('.info .status').text('Full');
		$('.add-food p').text('Food: ' + pageno + ' pages left.');
		pageno--;
	});

})//function ready end
