function fnGenerarTabla(res,num,nomApe,tur,gen)
{
	document.write("<Table>");
	    document.write("<tr>");
            document.write("<th class='titulo' colspan='4'>Datos personales"+res+"</th>");
        document.write("</tr>");
        document.write("<tr>");
		    document.write("<td rowspan='3'><img src='img/f"+num+".jpg'></td>");
	        document.write("<td id='tdIzq'>Nombres y Apellidos: </td><td id='tdDer'>"+nomApe+"</td>");
        document.write("</tr>");
        document.write("<tr>");
	        document.write("<td id='tdIzq'>Turno: </td><td id='tdDer'>"+tur+"</td>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdIzq'>Género: </td><td id='tdDer'>"+gen+"</td>");
        document.write("</tr>");
    document.write("</table> <br>");

}

function fnTurno(turno)
{
	switch(turno)
	{
		case 'M': return "Día"; break;
		case 'N': return "Noche"; break;
		default: return "???"; break;
	}
}

function fnGenero(genero)
{
	switch(genero)
	{
		case 'M': return "Masculino"; break;
		case 'F': return "Femenino"; break;
		default: return "???"; break;
	}
}