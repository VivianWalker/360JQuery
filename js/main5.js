	
$(document).ready(function(){
	var timer;
	$("ul.menu-list .pop").mouseover(function(){
		if(timer!=undefined){
			clearTimeout(timer);
		}
		// $(this).children(".menu-pop").animate({height:"400px"}).css({"z-index":"2"}).show().children(".context").show();
		// $(this).siblings().children(".menu-pop").animate({height:"400px"}).css({"z-index":"1"});
		$(".menu-pop").animate({height:"400px"}).css({"z-index":"2"}).show().children(".context").show();
		$(this).siblings().children(".menu-pop").css({"z-index":"1"});
	});
	$("ul.menu-list .pop").mouseout(function(){
		timer=setTimeout(function(){
			$(".menu-pop").animate({height:'0px'}).hide();
		},100);
	});





	// slide-box2
	var slide_index3=0;
	var slide3=$("#slide3");
	slide3.mouseover(function(){
		$(this).children(".slide-prev").show();
		$(this).children(".slide-next").show();
	})
	slide3.mouseout(function(){
		$(this).children(".slide-prev").hide();
		$(this).children(".slide-next").hide();
	})
	$("#slide3 .slide-prev").click(function(){
		var btn=true;
		if(btn){
			btn=false
			slide_index3--;
			if(slide_index3<0){
				slide3.children("ul").stop().animate({left:-slide_index3*618+"px"}).children(":eq(2)").css({
					position:"relative",
					left:-1854+"px",
				})
				slide_index3=2;			
			}else if(slide_index3==1){
				slide3.children("ul").css({left:"-1236px"}).children(":eq(2)").css({
					position:"relative",
					left:"0"
				});
				slide3.children("ul").stop().animate({left:-slide_index3*618+"px"})
			}else{
				slide3.children("ul").stop().animate({left:-slide_index3*618+"px"})
			}			
			slide3.children(".change1").children("li").removeClass("active");
			slide3.children(".change1").children(":eq("+slide_index3+")").addClass("active");
			btn=true;
		}
	})
	$("#slide3 .slide-next").click(function(){
		var btn=true;
		if(btn){
			btn=false
			slide_index3++;
			if(slide_index3>2){
				slide3.children("ul").stop().animate({left:-slide_index3*618+"px"}).children(":eq(0)").css({
					position:"relative",
					left:(slide_index3)*618+"px"
				})
				slide_index3=0;			
			}else if(slide_index3==1){
				slide3.children("ul").css({left:"0px"}).children(":eq(0)").css({
					position:"relative",
					left:"0px"
				});
				slide3.children("ul").stop().animate({left:-slide_index3*618+"px"})
			}else{
				slide3.children("ul").stop().animate({left:-slide_index3*618+"px"})
			}			
			slide3.children(".change1").children("li").removeClass("active");
			slide3.children(".change1").children(":eq("+slide_index3+")").addClass("active");
			btn=true;
		}
	})
})

window.onload=function(){
	var slide=document.getElementById("slide");
	var slide_aside=document.getElementsByClassName("slide-aside")[0];
	var aside_top=document.getElementById("aside-top");
	var aside_bottom=document.getElementById("aside-bottom");
	var bg1=aside_top.getElementsByClassName("bg")[0];
	var bg2=aside_bottom.getElementsByClassName("bg")[0];
	var slide_prev=document.getElementsByClassName("slide-prev");
	var slide_next=document.getElementsByClassName("slide-next");
	var slide_box=document.getElementsByClassName("slide-box");
	var aLi1=slide_box[0].getElementsByTagName("li");
	var aLi2=slide_box[1].getElementsByTagName("li");
	var liIndex=0;
	var liIndex2=0;
	var aOl=document.getElementsByClassName("change1");
	var oLi1=aOl[0].getElementsByTagName("li");
	var oLi2=aOl[1].getElementsByTagName("li");
	function aLi_show(aLi,oLi,liIndex){
		for(var i=0;i<aLi.length;i++){
			// aLi[i].style.display="none";
			aLi[i].style.opacity=0;
			oLi[i].className="";
		}
		// aLi[liIndex].style.display="block";
		aLi[liIndex].style.opacity=1;
		oLi[liIndex].className="active";
	}
	function aLi1_prev(){
		liIndex--;
		if(liIndex<0){
			liIndex=aLi1.length-1;
			liIndex2=aLi2.length-1;
			slide.style.top=-398+"px";
			aLi_show(aLi2,oLi2,liIndex2);
		}else{
			aLi_show(aLi1,oLi1,liIndex);
		}
	}
	function aLi1_next(){
		liIndex++;
		if(liIndex==aLi1.length){
			liIndex=0;
			liIndex2=0;
			slide.style.top=-398+"px";
			aLi_show(aLi2,oLi2,liIndex2);
		}else{
			aLi_show(aLi1,oLi1,liIndex);
		}
	}
	function aLi2_prev(){
		liIndex2--;
		if(liIndex2<0){
			liIndex2=aLi2.length-1;
			liIndex=aLi1.length-1;
			slide.style.top=0+"px";
			aLi_show(aLi1,oLi1,liIndex);
		}else{
			aLi_show(aLi2,oLi2,liIndex2);
		}
	}
	function aLi2_next(){
		liIndex2++;
		if(liIndex2==aLi2.length){
			liIndex=0;
			liIndex2=0;
			slide.style.top=0+"px";
			aLi_show(aLi1,oLi1,liIndex);
		}else{
			aLi_show(aLi2,oLi2,liIndex2);
		}
	}
	function auto_slide(){
		if(slide.style.top==""||slide.style.top=="0px"){
			aLi1_next();
		}else{
			aLi2_next();
		}
	}	
	function preventDefault(event){
		event=event||window.event;
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	}
	aside_top.onclick=function(){
		slide.style.top=0+"px";
		bg2.className="bg";
		bg1.className="bg active";
		liIndex=0;
		aLi_show(aLi1,oLi1,liIndex)
	}
	aside_bottom.onclick=function(){
		slide.style.top=-398+"px";
		bg1.className="bg";
		bg2.className="bg active";
		liIndex2=0;
		aLi_show(aLi2,oLi2,liIndex2)
	}
	slide.onmouseover=slide_aside.onmouseover=function(){
		slide_prev[0].style.display="block";
		slide_next[0].style.display="block";
		slide_prev[1].style.display="block";
		slide_next[1].style.display="block";
	}
	slide.onmouseout=function(){
		slide_prev[0].style.display="none";
		slide_next[0].style.display="none";
		slide_prev[1].style.display="none";
		slide_next[1].style.display="none";
	}
	
	timer=setInterval(auto_slide,3000);

	for(var i=0;i<oLi1.length;i++){
		oLi1[i].index=i;
		oLi1[i].onmouseover=function(){
			clearInterval(timer);
			liIndex=this.index;
			aLi_show(aLi1,oLi1,liIndex);
			timer=setInterval(auto_slide,3000);
		}
	}
	for(var i=0;i<oLi2.length;i++){
		oLi2[i].index=i;
		oLi2[i].onmouseover=function(){
			clearInterval(timer);
			liIndex2=this.index;
			aLi_show(aLi2,oLi2,liIndex2);
			timer=setInterval(auto_slide,3000);
		}
	}
	slide_prev[0].onclick=function(event){
		clearInterval(timer);
		aLi1_prev();
		timer=setInterval(auto_slide,3000);
		preventDefault(event);
	}
	slide_prev[1].onclick=function(event){
		clearInterval(timer);
		aLi2_prev();
		timer=setInterval(auto_slide,3000);
		preventDefault(event);
	}
	slide_next[0].onclick=function(event){
		clearInterval(timer);
		aLi1_next();
		timer=setInterval(auto_slide,3000);
		preventDefault(event);
	}
	slide_next[1].onclick=function(event){
		clearInterval(timer);
		aLi2_next();
		timer=setInterval(auto_slide,3000);
		preventDefault(event);
	}
}
