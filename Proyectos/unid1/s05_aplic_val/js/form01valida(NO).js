function fnValidar01(){
    let xNombre= document.getElementById("txtNombres").value;
    if(xNombre== "" ||/^\s+$/.test(xTexto)){
        alert("Falta Nombres...");
        return false;
    }

    let xApellido= document.getElementById("txtApellidos").value;
    if(xApellido== "" ||/^\s+$/.test(xTexto)){
        alert("Falta Apellidos...");
        return false;
    }

    let xDireccion= document.getElementById("txtDireccion").value;
    if(xDireccion== "" ||/^\s+$/.test(xTexto)) {
        alert("Falta Direccion...");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if(xEdad=="") {
        alert("Falta Edad...");
        return false;
    }
    ss
    let xFecha = document.getElementById("fecNac").value;
    if(xFecha=="") {
        alert("Falta Fecha de nacimiento...");
        return false;
    }
return true
}
