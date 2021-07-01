const pasarTexto = () => {
    var xValor=document.getElementById("texto1").value;
    document.getElementById("texto2").value=xValor;
	
}

const fnConcatenar = () => {
    var xTexto1=document.getElementById("texto1").value;
    var xTexto3=document.getElementById("texto3").value;
    document.getElementById("texto4").value=xTexto1 + "/" + xTexto3;	
}
