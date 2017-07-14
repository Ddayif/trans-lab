/* Holiii acá va tu código también */
$( document ).ready(function(){
	$(".button-collapse").sideNav();// muestra el side-nav en cada uno de los index, menos en index.html (Home)
	$('select').material_select(); // inicializa el selector de numero de tarjeta que se encuentra en el index ver-saldo.html

	$("#agregar").click(function(){// al momento de dar click al boton con id agregar, este se vera impreso en un elemnto p que se le asigno como padre un div con id contenedor
		var agregar = $("#number_card").val();
		$("#contenedor-agregar").append("<p class=parrafos>" + agregar + "</p>");
		$("#number_card").val("");
	})

	$("#saldo").click(function(){
		var saldo = $("#number_card_saldo").val();
		$("#contenedor-saldo").append("<p class=parrafo-saldo>SALDO TOTAL</p><h1 class=saldo-tarjeta>" + saldo + "<h1>");
		$("#number_card_saldo").val("");
	})

	$("#calcular").click(function() {
		var calcular = $("#number_card_calcular").val();
		$("#contenedor-calcular-uno").append("<p class=parrafo-calcular>COSTO PASAJE</p><h1 class=calculo-saldo>" + calcular + "</h1>");
		$("#contenedor-calcular-dos").append("<p class=parrafo-calcular>SALDO FINAL</p><h1 class=calculo-saldo>" + calcular + "</h1>")
		$("#number_card_calcular").val("");
	});

})


