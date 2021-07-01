function fnGenerarTabla(res,num,nom,ape,tur)
{
    document.write("<table>");
    document.write("<tr>");
        document.write("<th class='titulo' colspan='4'>Datos personales"+res+"</th>>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td rowspan='3'><img src='img/if"+num+".jpg'></td>");
        document.write("<td id='tdIzq'>Nombres: </td><td id='tdDer'>"+nom+"</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td id='tdIzq'>Apellidos: </td><td id='tdDer'>"+ape+"</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td id='tdIzq'>Turno: </td><td id='tdDer'>"+tur+"</td>");
    document.write("</tr>");
    document.write("</table> <br>");
}

function fnTurno(turno)
    switch(turno)
{
    case 'M': return "Dia"; break;
    case 'N': return "Noche"; break;
    default:return "???"; break;

}