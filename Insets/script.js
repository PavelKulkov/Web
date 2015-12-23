$(document).ready(function(){
	
	$(".text").append("<p>Текст 1</p>");
	
	$(".menu li").click(function(){
        date = new Date();
		var id = $(this).attr("id");
        $('.selected').removeClass('selected');
        $("#"+ id).addClass('selected');
        $(".text").empty();
        $(".text").append("<p>Текст "+id+"</p>");
    });
});
