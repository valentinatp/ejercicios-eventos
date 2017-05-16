function principal(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){
		alert("Hola mundox");
	});
	var load = document.getElementsByTagName("body");
	load.addEventListener("load", function(){
		alert("Está cargada");
	});


}
principal();

