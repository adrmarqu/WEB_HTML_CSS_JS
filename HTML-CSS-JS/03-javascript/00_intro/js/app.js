/* alert("PopUp desde un alert desde un archivo js externo");
console.log("Texto escrito en la consola de javascript desde un archivo js externo"); */

/* Permite seleccionar un elemento del html. Es muy rápido */
document.querySelector("output").innerHTML = "<h2>Texto escrito dentro de un output desde un js externo</h2>";

/* Permite seleccionar un elemento con una id del html. Es algo lento */
document.getElementById("mostrar").innerHTML = "<h3 style='font-family:Arial,sans-serif'>Texto escrito dentro de la id='mostrar' desde un js externo</h3>";

const nom = function nombre()
{
    let nombre = prompt("Introduce tu nombre");
    alert(nombre + " es mi nombre");
    /* alert(`${nombre} es mi nombre`); */
    console.log(nombre + " es mi nombre");
    /* console.log(`${nombre} es mi nombre`); */
    document.querySelector("#mostrar1").innerHTML = `${nombre} es mi nombre`;
}

/* document.querySelector("#btn").onclick = nom; */
const btn = document.querySelector("#btn");
btn.onclick = nom; 
