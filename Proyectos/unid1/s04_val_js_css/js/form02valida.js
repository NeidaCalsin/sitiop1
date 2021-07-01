const fnValidar02 = () => {
    let xPreferencia=document.getElementById("lstPreferencias").value;
    if(xPreferencia== ""|| /^\s+$/.test(xPreferencia)) {
        alert("Falta seleccionar PREFERENCIA...");
        return false;
    }
    let xmes=document.getElementById("lstMes").value;
    if(xmes==""){
        alert("Falta seleccionar MES actual... ");
        return false;
    }
    return true;
	
}