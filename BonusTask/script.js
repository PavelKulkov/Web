var ANSWER = "if(x>0){y=0;}else{y=1;}";
$(document).ready(function(){
	$('.block').click(function(){
		var id = $(this).attr("id");
		var parentId = $("#"+id).parent().attr("id");
	
		if(parentId == "result"){
			$('#content').append($('#'+id));
		}else{
			$('#result').append($('#'+id));
		}
	});
	$('.btnCheck').click(function(){
		var result = document.getElementById('result').childNodes;
		var tmp="";
		for(var i=0;i < result.length;i++){
			tmp+= result[i].innerText;
		}
		if(tmp.localeCompare(ANSWER) == 0){
			alert("Всё верно!");
		}
		else{
			alert("Неверно!Попробуйте ещё раз.");
		}
		
	});
	$('.btnClear').click(function(){
		location.reload();
	});
});
	
