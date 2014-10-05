$(function(){
	var years=[],mems=[],allMems=$('ul.mems > li > a'),hs=[]
	$('.labels li').each(function(){
		years.push($(this).data('date'))
		mems.push($())
		hs.push(0)
	})
	$('ul.mems > li').each(function(){
		var date = $(this).data('date')
		var m=$(this).find('> a')
		var li =$(this)
		$.each(years,function(i,item){
	        if(date === item){
	        	mems[i]=mems[i].add(m)
	        	if(hs[i]===0){
	        		hs[i]=li.offset().top;
	        		// console.log(m.offset().top)
	        	}
	        }
		})
	}) 
	$('.labels li a').click(function(){
		$('.labels li a').removeClass('highlight')
		$(this).addClass('highlight')
		allMems.removeClass('highlight')
		var index=$(this).parent().index()
		mems[index].addClass('highlight')
		// $(window).scrollTop(hs[index] - 95)
		$('body, html').animate({scrollTop: hs[index] - 95}, 300);
	})
	// console.log(years)
	var labels=$('.labels')
	var offset= labels.offset()
	var  top = offset.top
	var left = offset.left
	$(window).scroll(function(){
       if($(window).scrollTop()>top){
       	  labels.css({
       	  	left:left
       	  })
       	  labels.addClass('lebelsoverflow')
       }else{
       	 labels.css({
       	  	left:0
       	  })
       	 labels.removeClass('lebelsoverflow')
       }
	})
})