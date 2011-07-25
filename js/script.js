/* Author: Julian Strategia */
$(document).ready(function() {
    $("img.a").hover(
    function() {
        $(this).stop().animate({
            "opacity": "0"
        },
        "medium");
    },
    function() {
        $(this).stop().animate({
            "opacity": "1"
        },
        "medium");
    });

});

//Slider

$(document).ready(function() {

	//Speed of the slideshow
	var speed = 5000;
	
	//You have to specify width and height in #slider CSS properties
	//After that, the following script will set the width and height accordingly
	$('#mask-gallery, #gallery li').width($('#slider').width());	
	$('#gallery').width($('#slider').width() * $('#gallery li').length);
	$('#mask-gallery, #gallery li, #mask-excerpt, #excerpt li').height($('#slider').height());
	
	//Assign a timer, so it will run periodically
	var run = setInterval('newsscoller(0)', speed);	
	
	$('#gallery li:first, #excerpt li:first').addClass('selected');

	//Pause the slidershow with clearInterval
	$('#btn-pause').click(function () {
		clearInterval(run);
		return false;
	});

	//Continue the slideshow with setInterval
	$('#btn-play').click(function () {
		run = setInterval('newsscoller(0)', speed);	
		return false;
	});
	
	//Next Slide by calling the function
	$('#btn-next').click(function () {
		newsscoller(0);	
		return false;
	});	

	//Previous slide by passing prev=1
	$('#btn-prev').click(function () {
		newsscoller(1);	
		return false;
	});	
	
	//Mouse over, pause it, on mouse out, resume the slider show
	$('#slider').hover(
	
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('newsscoller(0)', speed);	
		}
	); 	
	
});


function newsscoller(prev) {

	//Get the current selected item (with selected class), if none was found, get the first item
	var current_image = $('#gallery li.selected').length ? $('#gallery li.selected') : $('#gallery li:first');
	var current_excerpt = $('#excerpt li.selected').length ? $('#excerpt li.selected') : $('#excerpt li:first');

	//if prev is set to 1 (previous item)
	if (prev) {
		
		//Get previous sibling
		var next_image = (current_image.prev().length) ? current_image.prev() : $('#gallery li:last');
		var next_excerpt = (current_excerpt.prev().length) ? current_excerpt.prev() : $('#excerpt li:last');
	
	//if prev is set to 0 (next item)
	} else {
		
		//Get next sibling
		var next_image = (current_image.next().length) ? current_image.next() : $('#gallery li:first');
		var next_excerpt = (current_excerpt.next().length) ? current_excerpt.next() : $('#excerpt li:first');
	}

	//clear the selected class
	$('#excerpt li, #gallery li').removeClass('selected');
	
	//reassign the selected class to current items
	next_image.addClass('selected');
	next_excerpt.addClass('selected');

	//Scroll the items
	$('#mask-gallery').scrollTo(next_image, 800);		
	$('#mask-excerpt').scrollTo(next_excerpt, 800);					
	
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l.Y(l.n,{15:9(x,t,b,c,d){6 c*(t/=d)*t+b},V:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},U:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},17:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},P:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},O:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},13:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},S:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},G:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},B:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},M:9(x,t,b,c,d){6-c*8.A(t/d*(8.g/2))+c+b},C:9(x,t,b,c,d){6 c*8.m(t/d*(8.g/2))+b},D:9(x,t,b,c,d){6-c/2*(8.A(8.g*t/d)-1)+b},16:9(x,t,b,c,d){6(t==0)?b:c*8.h(2,10*(t/d-1))+b},E:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.h(2,-10*t/d)+1)+b},F:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.h(2,10*(t-1))+b;6 c/2*(-8.h(2,-10*--t)+2)+b},I:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},12:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},11:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},K:9(x,t,b,c,d){f s=1.j;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.r(c)){a=c;f s=p/4}k f s=p/(2*8.g)*8.u(c/a);6-(a*8.h(2,10*(t-=1))*8.m((t*d-s)*(2*8.g)/p))+b},X:9(x,t,b,c,d){f s=1.j;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.r(c)){a=c;f s=p/4}k f s=p/(2*8.g)*8.u(c/a);6 a*8.h(2,-10*t)*8.m((t*d-s)*(2*8.g)/p)+c+b},N:9(x,t,b,c,d){f s=1.j;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.r(c)){a=c;f s=p/4}k f s=p/(2*8.g)*8.u(c/a);e(t<1)6-.5*(a*8.h(2,10*(t-=1))*8.m((t*d-s)*(2*8.g)/p))+b;6 a*8.h(2,-10*(t-=1))*8.m((t*d-s)*(2*8.g)/p)*.5+c+b},Z:9(x,t,b,c,d,s){e(s==w)s=1.j;6 c*(t/=d)*t*((s+1)*t-s)+b},14:9(x,t,b,c,d,s){e(s==w)s=1.j;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},H:9(x,t,b,c,d,s){e(s==w)s=1.j;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.y))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.y))+1)*t+s)+2)+b},z:9(x,t,b,c,d){6 c-l.n.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.i)){6 c*(7.q*t*t)+b}k e(t<(2/2.i)){6 c*(7.q*(t-=(1.5/2.i))*t+.i)+b}k e(t<(2.5/2.i)){6 c*(7.q*(t-=(2.J/2.i))*t+.L)+b}k{6 c*(7.q*(t-=(2.Q/2.i))*t+.T)+b}},W:9(x,t,b,c,d){e(t<d/2)6 l.n.z(x,t*2,0,c,d)*.5+b;6 l.n.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,71,'||||||return||Math|function|||||if|var|PI|pow|75|70158|else|jQuery|sin|easing|sqrt||5625|abs|||asin|easeOutBounce|undefined||525|easeInBounce|cos|easeInOutQuint|easeOutSine|easeInOutSine|easeOutExpo|easeInOutExpo|easeOutQuint|easeInOutBack|easeInCirc|25|easeInElastic|9375|easeInSine|easeInOutElastic|easeInQuart|easeOutCubic|625|easeInOutCubic|easeInOutQuart|984375|easeInOutQuad|easeOutQuad|easeInOutBounce|easeOutElastic|extend|easeInBack||easeInOutCirc|easeOutCirc|easeOutQuart|easeOutBack|easeInQuad|easeInExpo|easeInCubic|easeInQuint'.split('|'),0,{}))
/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});
/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l.Y(l.n,{15:9(x,t,b,c,d){6 c*(t/=d)*t+b},V:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},U:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},17:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},P:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},O:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},13:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},S:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},G:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},B:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},M:9(x,t,b,c,d){6-c*8.A(t/d*(8.g/2))+c+b},C:9(x,t,b,c,d){6 c*8.m(t/d*(8.g/2))+b},D:9(x,t,b,c,d){6-c/2*(8.A(8.g*t/d)-1)+b},16:9(x,t,b,c,d){6(t==0)?b:c*8.h(2,10*(t/d-1))+b},E:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.h(2,-10*t/d)+1)+b},F:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.h(2,10*(t-1))+b;6 c/2*(-8.h(2,-10*--t)+2)+b},I:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},12:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},11:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},K:9(x,t,b,c,d){f s=1.j;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.r(c)){a=c;f s=p/4}k f s=p/(2*8.g)*8.u(c/a);6-(a*8.h(2,10*(t-=1))*8.m((t*d-s)*(2*8.g)/p))+b},X:9(x,t,b,c,d){f s=1.j;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.r(c)){a=c;f s=p/4}k f s=p/(2*8.g)*8.u(c/a);6 a*8.h(2,-10*t)*8.m((t*d-s)*(2*8.g)/p)+c+b},N:9(x,t,b,c,d){f s=1.j;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.r(c)){a=c;f s=p/4}k f s=p/(2*8.g)*8.u(c/a);e(t<1)6-.5*(a*8.h(2,10*(t-=1))*8.m((t*d-s)*(2*8.g)/p))+b;6 a*8.h(2,-10*(t-=1))*8.m((t*d-s)*(2*8.g)/p)*.5+c+b},Z:9(x,t,b,c,d,s){e(s==w)s=1.j;6 c*(t/=d)*t*((s+1)*t-s)+b},14:9(x,t,b,c,d,s){e(s==w)s=1.j;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},H:9(x,t,b,c,d,s){e(s==w)s=1.j;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.y))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.y))+1)*t+s)+2)+b},z:9(x,t,b,c,d){6 c-l.n.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.i)){6 c*(7.q*t*t)+b}k e(t<(2/2.i)){6 c*(7.q*(t-=(1.5/2.i))*t+.i)+b}k e(t<(2.5/2.i)){6 c*(7.q*(t-=(2.J/2.i))*t+.L)+b}k{6 c*(7.q*(t-=(2.Q/2.i))*t+.T)+b}},W:9(x,t,b,c,d){e(t<d/2)6 l.n.z(x,t*2,0,c,d)*.5+b;6 l.n.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,71,'||||||return||Math|function|||||if|var|PI|pow|75|70158|else|jQuery|sin|easing|sqrt||5625|abs|||asin|easeOutBounce|undefined||525|easeInBounce|cos|easeInOutQuint|easeOutSine|easeInOutSine|easeOutExpo|easeInOutExpo|easeOutQuint|easeInOutBack|easeInCirc|25|easeInElastic|9375|easeInSine|easeInOutElastic|easeInQuart|easeOutCubic|625|easeInOutCubic|easeInOutQuart|984375|easeInOutQuad|easeOutQuad|easeInOutBounce|easeOutElastic|extend|easeInBack||easeInOutCirc|easeOutCirc|easeOutQuart|easeOutBack|easeInQuad|easeInExpo|easeInCubic|easeInQuint'.split('|'),0,{}))