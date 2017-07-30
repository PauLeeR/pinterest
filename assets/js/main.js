$(document).ready(function(){
	$.each(data, function(i, item) {
		console.log(item);

		var divImg = $(document.createElement('div'));
		divImg.addClass('imgs');
		divImg.append('<img class="foto" id="foto" src="dist/img/'+ item.image_url+'" onclick="mostrarModal()">');
		divImg.append('<h3 class="titulo">'+item.title+'</h3>' );
		divImg.append('<p class="descripcion">' + item.description + '</p>');
		divImg.append('<div><span><i class="fa fa-user-circle-o fa-2x iconito" aria-hidden="true"></i> ' + item.username +'</span></div>');
			divImg.append('<span class="hashtag">' + '#' + item.hashtag + '</span></div>'); //con html lo sobreescribe
			//$('.imgs').html('onclick=mostrarModal();');//$('.imgs').append(user);		

			$('#contenedor-pics').append(divImg);
			//$('.imgs').append('<p>dfdf</p>');

			$('#foto').on('click', function(){
				$(".modal").mostrarModal();
			});

			$(".cerrar").click(function(){
				$(".modal").fadeOut();

			});
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
