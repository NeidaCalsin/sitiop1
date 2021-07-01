const fnValidar04 = () => {
    let cont=0;
    let valorElegidoPreferencia="";
    let elementoP = document.getElementsByName("checpref[]");
	let eligioPreferido = false;
	for(let i=0; i < elementoP.length; i++) {
		if(elementoP[i].checked) {
			valorElegidoPreferencia =elementoP[i].value;
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

        }else if(cont==5){
            cont='cinco'
            alert('Elija DOS PREFERENCIAS ,NO '+cont+' preferencias.');
            return false;
        }
    }

    return true
    
}
