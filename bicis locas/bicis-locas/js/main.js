function validateForm(){
	var nombre = document.getElementById("name").value;
	if(nombre == ""||nombre == null){
		alert("Digite el usuario");
	return false;
	}
	  if (!/^[a-zA-Z]*$/g.test(document.getElementById("name"))) {
        alert("Invalid characters");
        return false;
    }
	var apellido = document.getElementById("lastname").value;
	if(apellido == ""||apellido == null){
		alert("Digite el apellido");
	return false;
	}
	var correo = document.getElementById("input-email").value;
	if(correo == ""||correo == null){
 		alert("Digite su correo");
 	return false;
 	}
	var contraseña = document.getElementById("input-password").value;
	if(constraseña == ""||contraseña == null){
 		alert("Digite su contraseña");
 	return false;
 	}


 // DEBE TENER MENOS DE 6 CARACTERES
 	var contra = document.getElementById("input-password").value;
 	if(contra.length<5){
 		alert("Contraseña al menos 6 caracteres");
 	}else if(contra=="123456"||contra=="password"||contra=="098754"){
 		alert("por favor escribe otra");
 	}


	//SELECCIONAR UN ELEMENTO DE LA CAJA
	var s1 = document.getElementById("form-control").value;
	if(s1=="Selecciona tu tipo de bici"){
		alert("por favor selecciona una opcion");
		return false;
	}
}