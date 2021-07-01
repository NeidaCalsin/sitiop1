function verTablas(generoElegido,mtzAlumnos,turnoElegido)
{
	contadorTurno=0;
    orden=0;
    res="";
	
    t01 ="<table>";
	t01 +="<tr>";
	t01 +="<th class='titulo' colspan='4' >Datos personales"+res+"</th>";
	t01 +="</tr>";
	t01 +="<tr>";
	t01 +="<th>N°.</th><th>Turno</th><th>Apellidos y Nombres</th><th>Género</th>";
	t01 +="</tr>";

    if(mtzAlumnos.length >0){
        for(var i=0; i< mtzAlumnos.length; i++){
            	mtzGenero=mtzAlumnos[i][4];  
            	turnoMtz=mtzAlumnos[i][3];         				
					if(turnoMtz==turnoElegido){
						if(mtzGenero==generoElegido){
							orden++;
							apeNom=mtzAlumnos[i][2] +", "+ mtzAlumnos[i][1];
							genero= fnGenero(mtzAlumnos[i][4]);
							turnos=fnTurno(mtzAlumnos[i][3]);
							t01 += "<tr>";
							t01 += "<td>"+orden+"</td> <td>"+turnos+"</td> <td>"+apeNom+"</td> <td>"+genero+"</td>";
							t01 += "</tr>";
							contadorTurno++;
						}	
                    }
    }
    t01 +="<table>";
    document.getElementById("marco").innerHTML= t01;
    
}

function fnGenero(xGenero){
    if(xGenero=="M"){
        return "Masculino";
    }else if(xGenero=="F"){
        return "Femenino"
    }
}
function fnTurno(turno)
{
	if(turno=="M"){
        return "Mañana";
    }else if(turno=="N"){
        return "Noche"
    }
}
function borrarMarco(){
	document.getElementById("marco").innerHTML = "Resutado borrado..."
}

}