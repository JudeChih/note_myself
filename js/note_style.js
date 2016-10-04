$(function(){
	$('#bs-example-navbar-collapse-1 ul li').on('click',function(){
		var a = $(this).data('index');
		console.log(a);
		$("#main").load("js_note.html");
	})


	$('.three_btns div').hover(function(){
		$(this).find('i').addClass('move');
	},function(){
		$(this).find('i').removeClass('move');
	})
	$('.three_btns div').on('click',function(){
		var n = $(this).data('index');
		switch(n){
			case 1:
				moveUp();
				break;
			case 2:
				gotoTop();
				break;
			case 3:
				moveDown();
				break;
		}
	})
	function moveUp(){
		for(var i =0;i<=($('.note_border').length-1);i++){
			if($('.note_border').eq(i).offset().top < $(window).scrollTop() && $('.note_border').eq(i+1).offset().top > $(window).scrollTop()){
				$('html,body').animate({'scrollTop':$('.note_border').eq(i).offset().top},($(window).scrollTop()-$('.note_border').eq(i).offset().top));
					break;
			}else if($('.note_border').eq(0).offset().top > $(window).scrollTop() || $('.note_border').eq(0).offset().top == $(window).scrollTop()){
				$('html,body').animate({'scrollTop':'0px'},$(window).scrollTop());
				break;
			}else if($('.note_border').eq(i).offset().top == $(window).scrollTop()){
				$('html,body').animate({'scrollTop':$('.note_border').eq(i-1).offset().top},$(window).scrollTop() - $('.note_border').eq(i-1).offset().top);
				break;
			}else if($(window).scrollTop() > $('.note_border').eq(($('.note_border').length)-1).offset().top){
				$('html,body').animate({'scrollTop':$('.note_border').eq(($('.note_border').length)-1).offset().top},$(window).scrollTop() - $('.note_border').eq($('.note_border').length-1).offset().top);
				break;
			}
		}
	}
	function moveDown(){
		for(var i =0;i<=$('.note_border').length;i++){
			if($('.note_border').eq(i).offset().top < $(window).scrollTop() && $('.note_border').eq(i+1).offset().top > $(window).scrollTop()){
				$('html,body').animate({'scrollTop':$('.note_border').eq(i+1).offset().top},($('.note_border').eq(i+1).offset().top)-$(window).scrollTop());
				break;
			}else if($('.note_border').eq(0).offset().top > $(window).scrollTop()){
				$('html,body').animate({'scrollTop':$('.note_border').eq(0).offset().top},$('.note_border').eq(0).offset().top-$(window).scrollTop());
			}else if($('.note_border').eq(i).offset().top == $(window).scrollTop()){
				$('html,body').animate({'scrollTop':$('.note_border').eq(i+1).offset().top},$('.note_border').eq(i+1).offset().top-$(window).scrollTop())
			}
		}
	}
	function gotoTop(){
		$('html,body').animate({'scrollTop':'0px'},$(window).scrollTop());
	}
	$(window).scroll(function(){

	})
})