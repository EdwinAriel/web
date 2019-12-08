this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "Edwin" && $("#Contrasena").val() == '1234'){
		logueado = true;
		if(logueado == true){
			window.location = "./pages/inicio.html"
		}
		
		}else{
			Swal.fire('Error');
	}
});
window .addEventListener('load',function(){
	$('.container').fadeIn(100);
});

$("#PDF").click(function(){
	window.location = "../pages/pdf.html";
});

$("#Galeria").click(function(){

	window.location = "../pages/galeria.html";
});


