const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia="";
	let eligioPreferencia = false;
	
	for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			valorElegidoPreferencia =elementoPref[i].value;
			eligioPreferencia = true;
		}
	}

	let elementoEstado = document.getElementsByName("radEstado");
	let valorElegidoPreEstado = "";
	let eligioEstado = false;
	for(let i=0; i < elementoEstado.length; i++) {
		if(elementoEstado[i].checked){
			valorElegidoPreEstado = elementoEstado[i].value;
			eligioEstado=true;
		}
	}

	if(!eligioPreferencia){
		alert("Elija UNA PREFERENCIA...");
		return false;
	}else{
		alert("Su preferencia elegida es " + valorElegidoPreferencia);
	}

	if (!eligioEstado){
		alert("Elija un ESTADO CIVIL...");
		return false;
	}else{
		alert("Su estado civil es " + valorElegidoPreEstado);
	}
	/// caso contrario ///
	return true;
}
