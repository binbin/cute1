$(function(){
	$('ul.list > li > span > a').click(function(){
       var ul =$(this).parent().find('ul')
       if(ul.is(':visible')){
       	 ul.slideUp()
       }else{
       	 ul.slideDown()
       }
	})
})