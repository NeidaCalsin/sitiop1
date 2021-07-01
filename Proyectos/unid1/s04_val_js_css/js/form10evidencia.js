const fnValidar10 = () => {
    let xNombre= document.getElementById("txtNombre").value;
    if(xNombre== "" ||/^\s+$/.test(xTexto)){
        alert("Falta NOMBRE Y APELLIDOS...");
        return false;}

    let xNumer= document.getElementById("txtNume").value;
    if(xNumer== "") {
        alert("Falta NUMERO...");
        return false;}

	let cont=0;
    letvalorElegidoPreferencia="";
    let elementoP= document.getElementsByName("chkOpciones[]");
	let eligioPreferido = false;
	for(let i=0; i < elementoP.length; i++) {
		if(elementoP[i].checked) {
			valorElegidoPreferido =elementoP[i].value;
			eligioPreferido = true;
            cont=cont+1;}
    }

    if(cont==0){
        alert("Elija DOS OPCIONES");
        return false;

    }else if (cont!=2){
        if (cont==1){
            cont='una'
            alert('Debes elegir dos opciones  ,NO ('+cont+' )');
            return false;

        }else if(cont==3){
            cont='tres'
            alert('Debes elegir dos opciones  ,NO ('+cont+' )');
            return false;

        }else if(cont==4){
            cont='cuatro'
            alert('Debes elegir dos opciones  ,NO ('+cont+' )');
            return false;

        }else if(cont==5){
            cont='cinco'
            alert('Debes elegir dos opciones  ,NO ('+cont+' )');
            return false;
        }
    }

	return true;
}