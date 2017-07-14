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

	$

})


$("#iniciar-sesion").click(function(){
	var pass = $("#pass").val();
    var mail = $("#email").val();
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);//<--- con esto vamos a validar el formato del correo


    if(mail ==""){// valida si mi campo email esta vacio, si es asi, se mostrara un alert con la informacion
        alert("El campo Email es obligatorio");
    }
    if(pass ==""){//valida si mi campo password esta vacio, si es asi, se mostrara un alert con la informacion
		alert("El campo contraseña es obligatorio")
	}
    else if(!caract.test(mail)){// si mi campo email no cumple con el formato, este mostrar un alert con la informacion
        alert("Debes ingresar un formato válido");
    }
    else if(pass.length > 8){// si mi password es mayor a 8 digitos, este mostrara un alert indicando que solo se pueden igresar como maximo 8 caracteres
		alert("Tu contraseña solo puede contener máximo 8 carácteres")
	}
    else{
        $("#iniciar-sesion").attr("href", "opciones.html");// si todas las condiciones no se cumplen, al presionar el boton con el ID iniciar sesion, me redireccionara a mi nuevo index (opciones)
    }
  });