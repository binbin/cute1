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
       $('ul.list > li li').each(function(){
              $(this).hover(function(){
                 $(this).addClass('current')
                 $(this).siblings().removeClass('current')
              },function(){
                 $(this).removeClass('current')
              })
       })
       $('ul.list > li ul').mouseleave(function(){

       })
       $('ul.list > li ul').each(function(){
              var ul=$(this),current
              ul.children().each(function(){
                     if($(this).hasClass('current')){
                          current = $(this)  
                     }
              })
              if(current){
                     ul.mouseleave(function(){
                            current.addClass('current')
                     })
              }
       })
})