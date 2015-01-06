$(window).load(function() {
	var ww=$(window).width();
	var wh=$(window).height();

	set_div();

	$("#sec2swiul li").click(function() {
		$(this).children().stop(false,false);
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		TweenMax.fromTo($(this).find(".sec2swliico img"),.6,{rotation:0},{rotation:360});
		$(".sec2_con dd").find(".sec2prod1").css({
			opacity: '0',
			left: '-20%'
		});
		$(".sec2_con dd").find(".sec2prod2").css('opacity', '0');
		$(".sec2_con dd").find(".sec2prodtext").css('top', '-50%');;

		var num=$("#sec2swiul li").index(this);
		$(".sec2_con dd:eq("+num+")").find(".sec2prod1").animate({
			opacity: 1},
			800, function() {
			$(this).delay(400).animate({left:0}, 400);
		});
		$(".sec2_con dd:eq("+num+")").find(".sec2prodtext").animate({top:wh*0.2}, 1000,"easeOutElastic");
		$(".sec2_con dd:eq("+num+")").find(".sec2prod2").animate({opacity:1}, 1000)
		$("#sec2ulactico").stop().animate({left: num*360+135}, 400);
	});/* function() {
		var num=$("#sec2swiul li").index(this);
		$(".sec2_con dd:eq("+num+")").find(".sec2prod1").fadeOut("400",function(){
			$(this).css('left', '-20%');
		});
		$(".sec2_con dd:eq("+num+")").find(".sec2prod2").fadeOut();
		$(".sec2_con dd:eq("+num+")").find(".sec2prodtext").animate({top:-wh*0.5});
	}*/

	$(".secbtm_list>ul>li:last").css('margin', '0');

	/*$("#sec5").on('mousewheel',function(event){
		event.preventDefault();
		var dtop=$("#fullpage").position().top;
		var translate3d = 'translate3d(0px, ' + (dtop-400) + 'px, 0px)';
		// var transition = 'all ' + 700 + 'ms ' + 'ease';
		if(event.deltaY==-1){
			$("#fullpage").css({
				'margin-top':-400,
			});
		}else if(event.deltaY==1){
			translate3d=dtop;
			$("#fullpage").css({
				'margin-top':0,
			});
		}
	})

	$(".secbtm").on('mousewheel',function(event){

	})*/


})

function removeMouseWheelHandler(){
	if (document.addEventListener) {
		document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
		document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
	} else {
		document.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
	}
}	

$(function(){
	$(window).resize(function(event) {
		set_div();
	});
})

function set_div(){
	var $sec2prod1=$(".sec2prod1");
	var $sec2prod2=$(".sec2prod2");
	var ww=$(window).width();
	var wh=$(window).height();
	$sec2prod1.width(ww*0.7);
	if(ww*0.7>1343){
		$sec2prod1.width(1343);
	}else{
		$sec2prod1.width(ww*0.7);
	}
	var sec2prod1h=$(".sec2prod1>img").height();
	$sec2prod1.height(sec2prod1h);
	var sec2prod2h=$(".sec2prod2>img").height();
	if(ww*0.3>399){
		$sec2prod2.width(399);
	}else{
		$sec2prod2.width(ww*0.3);
	}
	$sec2prod2.height(sec2prod2h);
}