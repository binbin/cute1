$(function(){
	var p=$('#pager')
	p.pagination(p.data('totalpage'),{items_per_page:1,//不可变，每页1项
		                        num_display_entries:3,//两点有点中间显示的个数
								num_edge_entries:2,//前后显示的个数
								current_page:p.data('currentpage'),
								link_to:p.data('link'),
								next_show_always:false,
								prev_show_always:false,
								callback:$.noop,
								prev_text:"上一页",
								next_text:"下一页"})
})