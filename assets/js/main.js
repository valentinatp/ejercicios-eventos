function principal(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){
		alert("Hola mundox");
	});
	var sobre = document.getElementById("cajita");
	sobre.addEventListener("mouseout", function(){
		alert("No estás sobre mí");
	});
	var fuera = document.getElementById("caja");
	fuera.addEventListener("mouseover", function(){
		alert("Estás sobre mí");
	});
}
principal();

function recargar(){
	alert("Está cargada");
}

