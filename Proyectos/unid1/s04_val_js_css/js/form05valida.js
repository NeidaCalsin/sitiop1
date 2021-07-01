const fnValidar05 = () => {

    var xTexto = document.getElementById("txtTexto").value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(xTexto))){
        alert("Escriba 9 numeros agrupos entre 3 y separados por un espacio...");
        return false;
    }
    var xNumero=document.getElementById("txtNumero").value;
    if(!(/^\d{9}$/.test(xNumero))){
        alert("Falta NUMEROS...");
        return false;
    }

    var xFijo = document.getElementById("txtFijo").value;
    if(!(/^05[45]\s\d{6}$/ .test(xFijo))) {
        alert("NUMERO de telefono fijo...");
        return false;
    }
    ///caso contrario///
    return true;
}  