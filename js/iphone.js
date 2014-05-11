$(document).ready(function(){
	
	$('.tab-lib').click(function(){
		$('.tab-selected').removeClass('tab-selected');
		$(this).addClass('tab-selected');
		$('.content-page').hide();
		$('#page-lib').show();
		$('.header .title').text("Library");
	});
	$('.tab-worm').click(function(){
		$('.tab-selected').removeClass('tab-selected');
		$(this).addClass('tab-selected');
		$('.content-page').hide();
		$('#page-worm').show();
		$('.header .title').text("BookWorm");
	});
	$('.tab-news').click(function(){
		$('.tab-selected').removeClass('tab-selected');
		$(this).addClass('tab-selected');
		$('.content-page').hide();
		$('#page-news').show();
		$('.header .title').text("NewsFeed");
	});
	$('.tab-club').click(function(){
		$('.tab-selected').removeClass('tab-selected');
		$(this).addClass('tab-selected');
		$('.content-page').hide();
		$('#page-club').show();
		$('.header .title').text("BookClub");
	});
	$('#menu-home').click(function(){
		$('.iphone-container').animate({left:'0px'});
		$('.footer-tab').animate({left:'0px'});
		$('.header p').animate({marginLeft:'85px'});
		$('.hidden-menu').animate({left:'-200px'});
		$('.tab-selected').removeClass('tab-selected');
		$("tab-lib").addClass('tab-selected');
		$('.content-page').hide();
		$('#page-lib').show();
		$('.header .title').text("Library");
		$('#page-read').animate({left:'0px'});
		$('#page-read').animate({top:'570px'});
	});
	$('#menu-profile').click(function(){
		$('.iphone-container').animate({left:'0px'});
		$('.footer-tab').animate({left:'0px'});
		$('.header p').animate({marginLeft:'85px'});
		$('.hidden-menu').animate({left:'-200px'});
		$('.tab-selected').removeClass('tab-selected');
		$('.content-page').hide();
		$('#page-profile').show();
		$('.header .title').text("Profile");
		$('#page-read').animate({left:'0px'});
		$('#page-read').animate({top:'570px'});
	});
	$('.book').click(function(){
		$('.tab-selected').removeClass('tab-selected');
		$('.content-page').hide();
		$('#page-book').show();
		$('.header .title').text("Book");
	});
	$('.club-rect').click(function(){
		$('.content-page').hide();
		$('#page-clubinfo').show();
		$('.header .title').text("BookClub");
	});
	$('.club-name').click(function(){
		$('.content-page').hide();
		$('#page-clubinfo').show();
		$('.header .title').text("BookClub");
	});

	$('.start-book').click(function(){
  		$('.content-page').hide();
		$('.header .title').text('Reading...');
		$('#page-read').animate({top:'65px'});
		var delay=0;
		$('.start-booklist .start-book').each(function(){
			$(this).delay(delay).animate({top:'600px'},1000);
			delay+=200;
		});			
		$('.blur-bg').hide();
		$('.iphone-container').removeClass('blur');
		$('.add-btn').hide();
		$('.exit-btn').show();
	});

	$('.exit-btn').click(function(){
		$('.exit-btn').hide();
		$('.add-btn').show();
		$('#page-lib').show();
		$('.header .title').text('Library');
		$('#page-read').animate({top:'570px'});
		$('.tab-selected').removeClass('tab-selected');
		$('.tab-lib').addClass('tab-selected');
	});

	$('.reading-footer-tab .circle-tab').click(function(){
		if($('#play-btn').hasClass('clicked'))
		{
			$('.reading-footer-tab .circle-tab img').attr("src", "./images/pause.png");
			$('.reading-footer-tab .circle-tab p').html("Stop");
			$('.header .title').text('Reading...');
			
			$('#play-btn').removeClass('clicked');
		}else{
			$('.reading-footer-tab .circle-tab img').attr("src", "./images/play.png");
			$('.reading-footer-tab .circle-tab p').html("Continue");
			$('.header .title').text('Pause');
			$('#play-btn').addClass('clicked');
		}
	});

	$('.tab-happy').click(function(){
		$('.emotion img').attr("src","./images/happy.png");
		$('.emotion p').text('Happy');
		$('.blur-bg-read').show();
		$('.message-box').show();
	});
	$('.tab-sad').click(function(){
		$('.emotion img').attr("src","./images/sad.png");
		$('.emotion p').text('Sad');
		$('.blur-bg-read').show();
		$('.message-box').show();
	});
	$('.tab-cry').click(function(){
		$('.emotion img').attr("src","./images/cry.png");
		$('.emotion p').text('Cry');
		$('.blur-bg-read').show();
		$('.message-box').show();
	});
	$('.tab-angry').click(function(){
		$('.emotion img').attr("src","./images/angry.png");
		$('.emotion p').text('Angry');
		$('.blur-bg-read').show();
		$('.message-box').show();
	});
	$('.message-box .submit-btn').click(function(){
		$('.blur-bg-read').hide();
		$('.message-box').hide();
	});
	$('.message-box .cancel-btn').click(function(){
		$('.blur-bg-read').hide();
		$('.message-box').hide();
	});

	$('.list-btn').click(function(){
		if ($('.iphone-container').css("left")=='0px') {
			$('.iphone-container').animate({left:'200px'});
			$('.footer-tab').animate({left:'200px'});
			$('.hidden-menu').animate({left:'0px'});
			$('#page-read').animate({left:'200px'});
		}else{
			$('.iphone-container').animate({left:'0px'});
			$('.footer-tab').animate({left:'0px'});
			$('.hidden-menu').animate({left:'-200px'});
			$('#page-read').animate({left:'0px'});
		}
	});
	$('.add-btn').click(function(){
		$('.content-page').hide();
		$('#page-addbook').show();
		$('.header .title').text("Add Book");
	});

	$('#footer-panel .circle-tab').click(function(){
		if($('#footer-panel .circle-tab p').text() == 'Read')
		{
			$('#footer-panel.circle-tab img').attr("src", "./images/social.png");
			$('#footer-panel .circle-tab p').html("Select");
			var delay=0;
			$('.start-booklist .start-book').each(function(){
				$(this).delay(delay).animate({top:'400px'},1000);
				delay+=200;
			});
			$('.blur-bg').show();
			$('.iphone-container').addClass('blur');
		}else{
			$('#footer-panel .circle-tab img').attr("src", "./images/read.png");
			$('#footer-panel .circle-tab p').html("Read");
			var delay=0;
			$('.start-booklist .start-book').each(function(){
				$(this).delay(delay).animate({top:'600px'},1000);
				delay+=200;
			});			
			$('.blur-bg').hide();
			$('.iphone-container').removeClass('blur');
		}
	});

	$('.hidden-menu .menu').click(function(){
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
	$('.btn-recommend').click(function(){
		$('.recommend-box').show();
	});
	$('.recommend-box .submit-btn').click(function(){
		$('.recommend-box').hide();
	});
	$('.recommend-box .cancel-btn').click(function(){
		$('.recommend-box').hide();
	});
	$('.btn-scan').click(function(){
		$('.page-addbook').hide();
		$('.tab-selected').removeClass('tab-selected');
		$('tab-lib').addClass('tab-selected');
		$('.content-page').hide();
		$('#page-lib').show();
		$('.header .title').text("Library");
	});

	var quotes=["Hey!!! Click me. I can speak!",
	"Hire me. I am the most talented UX worm in the world! :)",
	"Let me think what to eat? Fiction? Novel?",
	"To eat or not to eat, that is not a question",
	"Hey! Read more books so that I have something to eat.",
	"Hi, pretty, can you give ISBN of the book you are reading?"];
	$('.pic-worm').click(function(){
		$(this).find('.quote-worm').text(quotes[Math.floor(Math.random()*6)]);
	});

	var pageno=54;
	var status=0;
	$('.btn-feed').click(function(){
		$('.add-food p').text('Food: ' + pageno + ' pages left.');
		$('.food').animate({right:'185px',top:'-60px'},500,function(){$('.food').css("opacity",0).css("right","48px").css("top","16px").css("opacity",1);});
		if(status<4){
			status++;
		}
		$('#status-no').text(status);
		if (status == 4) {
			$('.info .status').removeClass('red');
			$('.info .status').addClass('green');
			$('.info .status').text('Full');
		};
		pageno--;
	});



})//function ready end

