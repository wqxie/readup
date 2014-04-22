$(document).ready(function(){
	$('.tab-lib').click(function(){
		$('.tab').find('.tab-selected').removeClass('.tab-selected');
		$(this).addClass('.tab-selected');
		$('.content-page').hide();
		$('#page-lib').show();
	});
	$('.tab-worm').click(function(){
		$('.tab').find('.tab-selected').removeClass('.tab-selected');
		$(this).addClass('.tab-selected');
		$('.content-page').hide();
		$('#page-worm').show();
	});
	$('.tab-news').click(function(){
		$('.tab').find('.tab-selected').removeClass('.tab-selected');
		$(this).addClass('.tab-selected');
		$('.content-page').hide();
		$('#page-news').show();
	});
	$('.tab-club').click(function(){
		$('.tab').find('.tab-selected').removeClass('.tab-selected');
		$(this).addClass('.tab-selected');
		$('.content-page').hide();
		$('#page-club').show();
	});



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
			$('.circle-tab img').attr("src", "./images/read.png");
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
	

	$('.first-tab').click(function(){
		if ($('.second-tab').hasClass('tab-bar-selected')) {
			$('.second-tab').removeClass('tab-bar-selected');
		}
		if ($('.third-tab').hasClass('tab-bar-selected')) {
			$('.third-tab').removeClass('tab-bar-selected');
		}
		if (!($('.first-tab').hasClass('tab-bar-selected'))) {
			$('.first-tab').addClass('tab-bar-selected');
		}
		$('#mybook').show();
		$('#suggestion').hide();
		$('#wishlist').hide();
	});
	$('.second-tab').click(function(){
		if ($('.first-tab').hasClass('tab-bar-selected')) {
			$('.first-tab').removeClass('tab-bar-selected');
		}
		if ($('.third-tab').hasClass('tab-bar-selected')) {
			$('.third-tab').removeClass('tab-bar-selected');
		}
		if (!($('.second-tab').hasClass('tab-bar-selected'))) {
			$('.second-tab').addClass('tab-bar-selected');
		}
		$('#mybook').hide();
		$('#suggestion').show();
		$('#wishlist').hide();
	});
	$('.third-tab').click(function(){
		if ($('.second-tab').hasClass('tab-bar-selected')) {
			$('.second-tab').removeClass('tab-bar-selected');
		}
		if ($('.first-tab').hasClass('tab-bar-selected')) {
			$('.first-tab').removeClass('tab-bar-selected');
		}
		if (!($('.third-tab').hasClass('tab-bar-selected'))) {
			$('.third-tab').addClass('tab-bar-selected');
		}
		$('#mybook').hide();
		$('#suggestion').hide();
		$('#wishlist').show();
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
		$('.food').animate({right:'192px',top:'-66px'},500,function(){$('.food').css("opacity",0).css("right","48px").css("top","16px").css("opacity",1);});
		pageno--;
	});


})//function ready end
