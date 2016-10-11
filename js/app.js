/*var cargar= function(){
	var enlaces= document.querySelectorAll("li a");

	for(var i= 0, l= enlaces.length; i<l; i++){
		var link= enlaces[i].getAttribute("href");
		var enlace= youtube.generateThumbnailUrl(link);
		var imagen= document.createElement("img");
		imagen.setAttribute("src", enlace);
		enlaces[i].appendChild(imagen);
	}
}
window.addEventListener("load", cargar);*/

var recorrer= function(){
	var link= $(this).attr("href");
	var enlace= youtube.generateThumbnailUrl(link);
	var imagen= $("<img>");
	imagen.attr("src", enlace);
	$(this).append(imagen);
}

$(document).ready(function(){
	//console.log($("ul").children());
	$("a").each(recorrer)
});
