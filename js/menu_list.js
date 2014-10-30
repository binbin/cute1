$(function(){
	$('span.menu_item > a').click(function(){
       var ul =$(this).parent().parent().find('ul')
       var border_fix=ul.next()
       var ul_p_box=ul.parent()
       if(ul.is(':visible')){
       	 ul.slideUp(function(){
       	 	ul_p_box.removeClass('open')
       	 	
       	 })
       }else{
       	 ul.slideDown(function(){
			ul_p_box.addClass('open')
       	 })
       }
	})
})