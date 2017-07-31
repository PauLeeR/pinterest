$(document).ready(function(){
	//$.each(data, function(i, item) {  //recorro el arreglo con each
		//console.log(item);
		// el arreglo json que está en data.js lo dividimos en dos grupos de 20 
		var primerosVeinte = data.slice(0, 19);
		var segundosVeinte = data.slice(20, 40);
		// contar por cada append para cortarlo cuando agregue los 20 y no tener un scroll infinito
		var contador = 0;

		primerosVeinte.forEach(function(item){

			var divImg = $(document.createElement('div'));
			divImg.addClass('imgs');
			divImg.append('<img class="foto" id="foto" src="dist/img/'+ item.image_url+'" onclick="mostrarModal()">');
			divImg.append('<h3 class="titulo">'+item.title+'</h3>' );
			divImg.append('<p class="descripcion">' + item.description + '</p>');
			divImg.append('<div><span><i class="fa fa-user-circle-o fa-2x iconito" aria-hidden="true"></i> ' + item.username +'</span></div>');
			divImg.append('<span class="hashtag">' + '#' + item.hashtag + '</span></div>'); //con html lo sobreescribe
			//$('.imgs').html('onclick=mostrarModal();');//$('.imgs').append(user);		

			var modalUp = '<div><div><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div class="botonGuardar"><button type="button" class="botonMdl">Guardar</button></div>';
			var modalImg = '<h3>'+ item.title + '</h3><img src="dist/img/' + item.image_url +'">';

			var modalDown = '<div><div><i class="fa fa-user-circle-o fa-2x iconito" aria-hidden="true"></i>'+ item.username +'</div><button class="leerlo">Leerlo</button></div><div>'+ item.description +'</div>';

			var modal = $('<div class="modalito"><div class="mdl"><div class="content"><div class="txt"><button type="button" class="close"><span class="cerrar">x</span></button>'+ modalUp + modalImg + modalDown +'<button type="button" class="botoncito">Close</button></div></div></div></div>');

			$('#contenedor-pics').append(divImg);
			//$('.imgs').append('<p>dfdf</p>');

			$('.ventana-modal').append(modal);

			$('#foto').on('click', function(){
				$(".modal").mostrarModal();
			});

			$(".cerrar").click(function(){
				$(".modal").fadeOut();

			});

		});

		// Check if a user has scrolled to the bottom
		$(window).scroll(function() {

			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                // si ya cargue 20 fotos paro
                if (contador == 20) {
                	return;
                }

                // Ahora se deberían mostrar los segundos 20 objetos del arreglo
                segundosVeinte.forEach(function(itemes) {
                	console.log(itemes);
                	
                	var divImg = $(document.createElement('div'));
                	divImg.addClass('imgs');
                	divImg.append('<img class="foto" id="foto" src="dist/img/'+ itemes.image_url+'" onclick="mostrarModal()">');
                	divImg.append('<h3 class="titulo">'+itemes.title+'</h3>' );
                	divImg.append('<p class="descripcion">' + itemes.description + '</p>');
                	divImg.append('<div><span><i class="fa fa-user-circle-o fa-2x iconito" aria-hidden="true"></i> ' + itemes.username +'</span></div>');
					divImg.append('<span class="hashtag">' + '#' + itemes.hashtag + '</span></div>'); //con html lo sobreescribe
				//$('.imgs').html('onclick=mostrarModal();');//$('.imgs').append(user);		

				var modalUp = '<div><div><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div class="botonGuardar"><button type="button" class="botonMdl">Guardar</button></div>';
				var modalImg = '<h3>'+ itemes.title + '</h3><img src="dist/img/' + itemes.image_url +'">';

				var modalDown = '<div><div><i class="fa fa-user-circle-o fa-2x iconito" aria-hidden="true"></i>'+ itemes.username +'</div><button class="leerlo">Leerlo</button></div><div>'+ itemes.description +'</div>';

				var modal = $('<div class="modalito"><div class="mdl"><div class="content"><div class="txt"><button type="button" class="close"><span class="cerrar">x</span></button>'+ modalUp + modalImg + modalDown +'<button type="button" class="botoncito">Close</button></div></div></div></div>');

				$('#contenedor-pics').append(divImg);
				//$('.imgs').append('<p>dfdf</p>');

				$('.ventana-modal').append(modal);

				$('#foto').on('click', function(){
				$(".modal").mostrarModal();
				});

				$(".cerrar").click(function(){
				$(".modal").fadeOut();

				});

				contador++; //para que deje de contar

				});

        	};
		});

	});

/*$(document).ready(function(){
//$('.imgs').click(function(){
//	mostrarModal();
//	console.log($(this).attr('img'));
//})

	function mostrarModal(){
    $(".modal").fadeIn();
		
	}
 

});*/
