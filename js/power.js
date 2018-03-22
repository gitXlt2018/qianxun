/*
* @Author: Administrator
* @Date:   2017-10-03 00:33:40
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-03 00:43:38
*/
$(function(){

	var num=0;
	var timer=null;
	function go(){
		timer=setInterval(function(){
			num ++;
			if(num>4){
				num = 0;
				$('.right ul').css('left','0');
				num=1;
			}
			$('.right ul').stop().animate({left:-(num*747)+'px'});
		},2500);
	}
	go();

	$('.right').hover(function(){
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		go();
	});

	// 左切换
	$('.right .s1').click(function(){
		num--;
		if(num<0){
			num=0
		}
		$('.right ul').stop().animate({left:-(num*747)+'px'});
	})

	// 右切换
	$('.right .s2').click(function(){
		num++;
		if(num>4){
			num=4;
		}
		$('.right ul').stop().animate({left:-(num*747)+'px'});
	});

});