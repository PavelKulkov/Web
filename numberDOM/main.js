function main(){
	var dom = new Array();
	dom = getDom(document.documentElement,dom);
	var message =  "Количество узлов в документе = "+dom.length+"; Узлы: ";
	for(var i=0;i<dom.length;i++){
		message += dom[i]+ " ";
	}
	alert(message);
	
}
function getDom(element,number){
	for(var i=0;i<element.childNodes.length;i++){
		if(element.childNodes[i].nodeType == 1){
			number[number.length] = element.childNodes[i].tagName;
		}
		if(element.childNodes[i].childNodes.length > 0){
			getDom(element.childNodes[i],number);
		}
	}
	return number;
}
