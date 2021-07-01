function fnValidar02 () {
    let xNom= document.getElementById("txtNombre").value;
    if(xNom== "" ||/^\s+$/.test( xNom)){
        alert("Falta NOMBRES...");
        return false;
    }

    let Genero = document.getElementsByName("radGenero");
	let ElegidoPreGenero = "";
	let elegirGenero = false;

	for(let i=0; i < Genero.length; i++) {
		if(Genero[i].checked){
			ElegidoPreGenero = Genero[i].value;
			elegirGenero=true;
		}
    }

    if (!elegirGenero){
		alert("Elija un genero...");
		return false;
    }
    
    let cont=0;
    let ElegidoPreferencia="";
    let elementoP = document.getElementsByName("chkPref[]");
	let eligioPreferido = false;
	for(let i=0; i < elementoP.length; i++) {
		if(elementoP[i].checked) {
			ElegidoPreferencia =elementoP[i].value;
			eligioPreferido = true;
            cont=cont+1;
		}
    }
    if(cont==0){
        alert("Elija DOS PREFERENCIAS");
        return false;

    }else if (cont!=2){
        if (cont==1){
            cont='una'
            alert('elija DOS PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;

        }else if(cont==3){
            cont='tres'
            alert('Elija DOS PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;

        }else if(cont==4){
            cont='cuatro'
            alert('Elija DOS PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;

        }
    }
    
return true;

}
