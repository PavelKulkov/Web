$(document).ready(function(){
	var flagBoard = true;
	var flagDraughts = true;
	
    //Функция для добавления поля
    function addBoard(){
		
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                if((i%2==0 && j%2==0) || (i%2!=0 && j%2!=0)){
                    $(".board").append('<div class="light_cell"></div>');
                }
                else{
                    $(".board").append('<div class="dark_cell"></div>');
                }
            }
        }
    }
    
	//Функция для добавления фигур на поле
    function addDraughts(){
		$("div").filter(".dark_cell").slice(0, 12).append('<img class="dark" src="images/dark.png">');
		$("div").filter(".light_cell").slice(20, 32).append('<img class="light" src="images/light.png">');
	}
    
	//Функция для удаления фигур с поля
    function clearDraughts(){
		$(".light_cell, .dark_cell").empty();
		flagDraughts = true;
	}
    
    $("#createBoard").click(function(){
		if(!flagBoard){
			alert("Доска уже нарисована!");
		}
		else{
            addBoard();
		    flagBoard = false;
		}
    });
		
	$("#createFigures").click(function(){
		//Если поле нарисовано
		if(!flagBoard){
			//Если фигуры еще не добавлены
			if(flagDraughts){
				addDraughts();
			    flagDraughts = false;
			}
			else{
			    alert("Фигуры уже расставлены!");
		    }
		}
		else{
			alert("Доска еще не нарисована! Нажмите: Нарисовать доску");
		}
	});
	
	$("#clearBoard").click(function(){
		clearDraughts();
	});
});