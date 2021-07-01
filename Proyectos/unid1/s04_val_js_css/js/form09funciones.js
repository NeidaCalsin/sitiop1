const alumnos = {
	lista:[
		[1, "Ruben Valeriano","Montoya Luna",  "M","M"],
		[2, "Isabel Valeria","Neira Romero",   "N","F"],
		[3, "Elena Luz","Luna Marroquin",      "N","F"],
		[4, "Elena Luz","Luna Marroquin",      "N","F"],
		[5, "José María","Lopez Diaz",         "M","M"],
		[6 ,"Erika Bony","Puma Coila",         "N","F"],
		[7, "Francisco Asis","Mamani Chuctaya","M","M"],
		[8, "Josefa Marin","Orozco Huanca",    "N","F"],
		[9,"Rosa Tamara","Sarmiento Ylachoque","N","F"],
		[10,"Suly Lesli","Rivarrey Quispe",    "M","F"],
		[11,"Suly Lesli","Rivarrey Quispe",    "M","F"],
		[12,"Katia Beatriz","Valencia Chura",  "N","F"],
		[13,"Bethy","Morales Llerena",         "N","F"],
		[14,"Luis Antonio","Valencia Puma",    "M","M"],
		[15,"Rolando Alfredo","Perez Manrique","M","M"],
		[16,"María Rosario","Monson Flores",   "M","F"],
		[17,"Lucero Ebony","Valencia Chura",   "N","F"],
		[18,"Gustavo Enrique","Mamani Quispe", "M","M"]
	]
}

const bucleTabla = (cantidad) => {
	document.write("<table border='1'>");
	document.write("<tr><th colspan='3'>Datos</th></tr>");
	document.write("<tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr>");
	for(var f=0; f < cantidad; f++){
		document.write("<tr>");
		for(var c=0; c < 3; c++){
			const {lista}=alumnos;
			document.write("<td>"+lista[f][c]+"</td>");
		}
		document.write("</tr>"); 
	}
	document.write("</table> <br>");

}