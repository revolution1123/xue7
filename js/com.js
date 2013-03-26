//课程分类nav
$(function(){
	$(".main_tab_item").mouseenter(function(){
		$(".main_tab_item").removeClass("main_tab_item_hover");
		$(this).addClass("main_tab_item_hover");
	});
});


//频道页面左侧nav
$(function(){
	$(".channel_tab_title").click(function(){
		$(this).addClass("channel_tab_title_hover").next(".channel_tab_con").slideDown().siblings(".channel_tab_con").slideUp();
		$(this).siblings().removeClass("channel_tab_title_hover");
	});
})

//频道页面下导航
$(function(){
	$(".class_subject_item").click(function(){
	$(".class_subject_item").removeClass("class_subject_current");
	$(this).addClass("class_subject_current");
		return false;
	});
})
