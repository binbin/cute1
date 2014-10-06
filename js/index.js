$(function(){
	$(".scrollable").scrollable({mousewheel: true,circular: true,next:'.scrollingHotSpotRight',prev:'.scrollingHotSpotLeft',speed:600/*默认400*/}).autoscroll(3000);

})