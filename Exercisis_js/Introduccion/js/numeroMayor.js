/* 

Que pida numeros al usuario con prompt mientra el numero sea <50. Si es >=50 mostrar un alert con un mensaje que indique el numero de veces que ha introducido un numero <50

*/

/* 

Limpiar linea

prompt(`${error} Introduce un número`).replace(",", ".").trim(); 


Interrogante/Ternarios

let r = edad >= 18 ? "Adulto" : "Menor"

if (edad >= 18) r = "Adulto";
else r = "Menor";


let r = vip ? a : vip2 ? b : c;

if (vip) r = a;
else if (vip2) r = b;
else r = c;

*/

function Mayor()
{
    let num = 0, count = 0;

    while (num < 50)
    {
        num = Number(prompt("Introduce un numero"));
        if (num < 50)
            count++;
        else if (isNaN(num))
            num = 0;
    }

    if (count == 1)
        document.querySelector("output").innerHTML = "Has introducido " + count + " número menor a 50";
    else
        document.querySelector("output").innerHTML = "Has introducido " + count + " números menores a 50";
        
}