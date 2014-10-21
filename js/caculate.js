//存放数据,用来计算和
var item1_1 = 0;
var item2_1 = 0;

var item2_1_1 = 0;
var item2_1_2 = 0;
var item2_1_3 = 0;
var item2_1_4 = 0;
var item2_1_5 = 0;
var item2_1_6 = 0;
var item2_1_7 = 0;

var item2_2 = 0;
var itemn2_3 = 0;
var item2_3 = 0;
var item2_4 = 0;
var item2_5 = 0;
var item2_6 = 0;
var item2_7 = 0;
var item2_8 = 0;
var item2_9 = 0;
var item3_1 = 0;
var item4_1 = 0;
var total = 0;


//设置基本价格
function setBaseprice() {
	var basePrice = $("#basePrice");
	item1_1 = parseInt(basePrice.val(),10);
	var price1_1 = document.getElementById("price1_1");
	price1_1.innerText = item1_1;
	getSum();
}


//选择2.1
function item2_1Select(select) {
	item2_1 = parseInt(select.value);
	var price2_1 = document.getElementById("price2_1");
	price2_1.innerText = item2_1;
	getSum();
}

function item2_1_1Select(select) {
	item2_1_1 = parseInt(select.value,10);
	var price2_1_1 = document.getElementById("price2_1_1");
	price2_1_1.innerText = item2_1_1;
	getSum();
}
function item2_1_2Select(select) {
	item2_1_2 = parseInt(select.value,10);
	var price2_1_2 = document.getElementById("price2_1_2");
	price2_1_2.innerText = item2_1_2;
	getSum();
}
function item2_1_3Select(select) {
	item2_1_3 = parseInt(select.value,10);
	var price2_1_3 = document.getElementById("price2_1_3");
	price2_1_3.innerText = item2_1_3;
	getSum();
}
function item2_1_4Select(select) {
	item2_1_4 = parseInt(select.value);
	var price2_1_4 = document.getElementById("price2_1_4");
	price2_1_4.innerText = item2_1_4;
	getSum();
}
function item2_1_5Select(select) {
	item2_1_5 = parseInt(select.value);
	var price2_1_5 = document.getElementById("price2_1_5");
	price2_1_5.innerText = item2_1_5;
	getSum();
}
function item2_1_6Select(select) {
	item2_1_6 = parseInt(select.value);
	var price2_1_6 = document.getElementById("price2_1_6");
	price2_1_6.innerText = item2_1_6;
	getSum();
}
function item2_1_7Select(select) {
	item2_1_7 = parseInt(select.value);
	var price2_1_7 = document.getElementById("price2_1_7");
	price2_1_7.innerText = item2_1_7;
	getSum();
}

//选择2.2
function item2_2Select(select) {
	item2_2 = parseInt(select.value);
	var price2_2 = document.getElementById("price2_2");
	price2_2.innerText = item2_2;
	getSum();
}

//选择n2.3
function itemn2_3Select(select) {
	itemn2_3 = parseInt(select.value);
	var pricen2_3 = document.getElementById("pricen2_3");
	pricen2_3.innerText = itemn2_3;
	getSum();
}

//选择2.3
function item2_3Select(select) {
	item2_3 = parseInt(select.value);
	var price2_3 = document.getElementById("price2_3");
	price2_3.innerText = item2_3;
	getSum();
}

//选择2.4
function item2_4_1Select(select) {
	var coatItem = $("#coatItem")[0];
	coatItem.options.length = 0;
	if(select.value=='0'){
		item2_4 = parseInt(select.value);
		var price2_4 = document.getElementById("price2_4");
		price2_4.innerText = item2_4;
		getSum();
	}else{
		/**2014.10.21**/
		$.get('getItemByCoat.action',{coat:select.value},function(json){
			for (var i = 0; i < json.length; i++) {	
				jsAddItemToSelect(coatItem, json[i].item, json[i].price);
			}
			item2_4_2Select(coatItem);
			getSum();
		},'json')
		/*new Ajax.Request("getItemByCoat.action?coat=" + select.value, {method:"get", onSuccess:function (transport) {
			var json = transport.responseText.evalJSON(true);
			for (var i = 0; i < json.length; i++) {	
				jsAddItemToSelect(coatItem, json[i].item, json[i].price);
			}
			item2_4_2Select(coatItem);
			getSum();
		}});*/
	}
	
	
}
function item2_4_2Select(select) {
	item2_4 = parseInt(select.value);
	var price2_4 = document.getElementById("price2_4");
	price2_4.innerText = item2_4;
	getSum();
}

//选择2.5
function item2_5Select(select) {
	item2_5 = parseInt(select.value);
	var price2_5 = document.getElementById("price2_5");
	price2_5.innerText = item2_5;
	getSum();
}

//选择2.6
function item2_6_1Select(select) {
	//第一个select
	var layer = $("#layer");
	//ajax获得值

	/**2014.10.21**/
	$.get('getThickLayer.action',{thick:select.value,layer:layer.val()},function(data){
        item2_6 = parseInt(data,10);
		var price2_6 = $("#price2_6");
		price2_6.text(item2_6);
		getSum();
	},'text')
	/*new Ajax.Request("getThickLayer.action?thick=" + select.value + "&layer=" + layer.value, {method:"get", onSuccess:function (transport) {
		item2_6 = parseInt(transport.responseText);
		var price2_6 = $("#price2_6");
		price2_6.innerText = item2_6;
		getSum();
	}});*/
	
}
function item2_6_2Select(select) {
	//第一个select
	var thick = $("#thick2_6");
	//ajax获得值
	/**2014.10.21**/
	$.get('getThickLayer.action',{thick:thick.val(),layer:select.value},function(data){
		item2_6 = parseInt(data,10);
		var price2_6 = $("#price2_6");
		price2_6.text(item2_6);
		getSum();
	},'text')
	/*
	new Ajax.Request("getThickLayer.action?thick=" + thick.value + "&layer=" + select.value, {method:"get", onSuccess:function (transport) {
		item2_6 = parseInt(transport.responseText);
		var price2_6 = $("#price2_6");
		price2_6.innerText = item2_6;
		getSum();
	}});
	*/
}


//选择2.7
function item2_7_2Select(select) {
	//第一个select
	var thick = $("#thick");
	//ajax获得值
	/**2014.10.21**/
	$.get('getThickWidth.action',{thick:thick.val(),width:select.value},function(data){
		item2_7 = parseInt(data,10);
		var price2_7 = $("#price2_7");
		price2_7.text(item2_7);
		getSum();
	},'text')
	/*new Ajax.Request("getThickWidth.action?thick=" + thick.value + "&width=" + select.value, {method:"get", onSuccess:function (transport) {
		item2_7 = parseInt(transport.responseText);
		var price2_7 = $("#price2_7");
		price2_7.innerText = item2_7;
		getSum();
	}});*/
	
}
function item2_7_1Select(select) {
	//第一个select
	var width = $("#width");
	//ajax获得值
	/**2014.10.21**/
	$.get('getThickWidth.action',{thick:select.value,width:width.val()},function(data){
        item2_7 = parseInt(data,10);
		var price2_7 = $("#price2_7");
		price2_7.text(item2_7);
		getSum();
	},'text')
	/*new Ajax.Request("getThickWidth.action?thick=" + select.value + "&width=" + width.value, {method:"get", onSuccess:function (transport) {
		item2_7 = parseInt(transport.responseText);
		var price2_7 = $("#price2_7");
		price2_7.innerText = item2_7;
		getSum();
	}});*/
	
}

//选择2.8
function item2_8Select(select) {
	item2_8 = parseInt(select.value);
	var price2_8 = document.getElementById("price2_8");
	price2_8.innerText = item2_8;
	getSum();
}

//选择3.1
function item3_1Select(select) {
	item3_1 = parseInt(select.value);
	var price3_1 = document.getElementById("price3_1");
	price3_1.innerText = item3_1;
	getSum();
}

//计算总价
function getSum() {
	var totalPrice = $("#totalPrice")[0];
	var totalDiv = $('#total')[0];
	total = item1_1 + item2_1_1+ item2_1_2+ item2_1_3+ item2_1_4+ item2_1_5+ item2_1_6+ item2_1_7+itemn2_3+item2_3+item2_4+item2_5+item2_6+item2_7+item2_8+item3_1+item4_1;
	totalPrice.innerText = total;
	totalDiv.innerText = total;
}

//向select选项中 加入一个Item
function jsAddItemToSelect(objSelect, objItemText, objItemValue) {
	var varItem = new Option(objItemText, objItemValue);
	objSelect.options.add(varItem);
}
function getPosition() {
	var top = document.documentElement.scrollTop;
	var left = document.documentElement.scrollLeft;
	var height = document.documentElement.clientHeight;
	var width = document.documentElement.clientWidth;
	return {top:top, left:left, height:height, width:width};
}
function showPop() {
	var width = 120; //弹出框的宽度 
	var height = 80; //弹出框的高度 
	var obj = document.getElementById("pop");
	obj.style.display = "block";
	obj.style.position = "absolute";
	obj.style.zindex = "999";
	obj.style.width = width + "px";
	obj.style.height = height + "px";
	var Position = getPosition();
	leftadd = (Position.width - width) - 10;
	topadd = (Position.height - height) - 10;
	obj.style.top = (Position.top + topadd) + "px";
	obj.style.left = (Position.left + leftadd) + "px";
	window.onscroll = function () {
		var Position = getPosition();
		obj.style.top = (Position.top + topadd) + "px";
		obj.style.left = (Position.left + leftadd) + "px";
	};
}

