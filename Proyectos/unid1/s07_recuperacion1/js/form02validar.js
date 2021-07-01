function fnValidar02()
{
	let xNum= document.getElementById("numero").value;
    if(xNum== "" ||/^\s+$/.test( xNum)){
        alert("Ingrese Numero...");
        return false;
    }
	let xPreferencia=document.getElementById("lstGenero").value;
    if(xPreferencia== ""|| /^\s+$/.test(xPreferencia)) {
        alert("Falta seleccionar GENERO...");
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
        alert('elija TRES PREFERENCIAS ,ha elegido '+cont);
        return false;
    }else if (cont!=3){
        if (cont==1){
            cont='una'
            alert('elija TRES PREFERENCIAS ,NO '+cont+' preferencia.');
            return false;
        }else if(cont==2){
            cont='dos'
            alert('Elija TRES PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;
        }else if(cont==4){
            cont='cuatro'
            alert('Elija TRES PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;
        }else if(cont==5){
            cont='cinco'
            alert('Elija TRES PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;
       }
	}
	
	/// Caso contrario ///
	return true;
}