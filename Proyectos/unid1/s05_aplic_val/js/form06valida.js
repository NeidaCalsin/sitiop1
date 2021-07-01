function fnValidar06()
{
    var xGenero=document.getElementById("lstGenero").value;
    if(xGenero=="")
    {
        alert("Seleccione Genero...");
        return false;
    } 
    var xResult=document.getElementById("txtResultado").value;
    if(xResult=="" || xResult==0 )
    {
        alert("Revice... Resultado ¿0 o VACIO?");
        return false;
    }
    return true;
	 
}

function verConta(genero, mtzAlumnos)
{
	contadorGenero=0;
    if(mtzAlumnos.length>0){
        mtzAlumnos.forEach(element =>{
            if(element[4]==genero){
                contadorgenero++;
            }
        });
    }
    document.getElementById("txtResultado").value=contadorGenero;
}
	 
