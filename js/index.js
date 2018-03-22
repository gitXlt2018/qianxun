/*
* @Author: Administrator
* @Date:   2017-10-01 22:20:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-07 17:55:46
*/
$(function(){
	var timer;
	var num=0;
	$('.screen1').removeClass('no');
	$('ol li').click(function(){
	var a=$(this).index();
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('section').stop().animate({'top':-100*a+'%'},500);
	num=a;
	$('section>div').eq(num).removeClass('no').siblings().addClass('no');
});


$(document).mousewheel(function(e,d){
	// d内置参数
	/*
		向下滚动-1
		向上滚动1
	*/
	// 函数节流：禁止用户过快滚动鼠标滚轮
	clearTimeout(timer);
	timer=setTimeout(function(){
		num=num-d;
		if(num<0){
			num=0;
		}
		if(num>6){
			num=6;
		}
		$('section').stop().animate({'top':-100*num+'%'})
		// 导航效果
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
		$('section>div').eq(num).removeClass('no').siblings().addClass('no');
	},400)
})


// 控制音乐
$('.music').click(function(event) {
	$(this).toggleClass('play');
	if($(this).hasClass('play')){
		$('audio')[0].play();
	}else{
		$('audio')[0].pause();
	}
});

})










