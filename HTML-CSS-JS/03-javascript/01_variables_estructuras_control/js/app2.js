const PRECIO = 20;
console.log(PRECIO);

const mo = "Pantalla 19Pulgadas";
console.log(mo);

const nom = function nombre()
{
    let nombre = prompt("Introduce tu nombre");
    alert(nombre + " es mi nombre");
    /* alert(`${nombre} es mi nombre`); */
    console.log(nombre + " es mi nombre");
    /* console.log(`${nombre} es mi nombre`); */
    document.querySelector("#mostrar1").innerHTML = `${nombre} es mi nombre`;
}