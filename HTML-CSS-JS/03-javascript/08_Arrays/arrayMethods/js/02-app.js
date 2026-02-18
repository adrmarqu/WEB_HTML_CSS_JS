let all = new Array();

/* Operador spread -> ... */

const array = [1, 2, 3];
const nuevoArray = [...array, 4, 5, 6, "final"];


const original = [1, 2, 3]
const copia = [...original];


const despues = [4, 5, 6];
const antes = [1, 2, 3, ...despues];


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arryaConcatenado = [...array1, ...array2];


const matrices = [[1, 2], [3, 4]];
const combinada = [].concat(...matrices);


const persona = { nombre: "Luís", edad: 30 };
const direccion = { calle: "Calle Falsa", ciudad: "Springfield" };
const personaCompleta = { ...persona, ...direccion };


const original2 = { a: 1, b: 2 };
const copia2 = { ...original2 };

const usuario = { nombre: "Ana", edad: 25 };
const actualizado = { ...usuario, edad: 26 };

let x = 0;
all[x++] = array;
all[x++] = nuevoArray;
all[x++] = "<br/>";
all[x++] = original;
all[x++] = copia;
all[x++] = "<br/>";
all[x++] = despues;
all[x++] = antes;
all[x++] = "<br/>";
all[x++] = array1;
all[x++] = array2;
all[x++] = arryaConcatenado;
all[x++] = "<br/>";
all[x++] = matrices;
all[x++] = combinada;
all[x++] = "<br/>";
all[x++] = persona;
all[x++] = direccion;
all[x++] = personaCompleta;
all[x++] = "<br/>";
all[x++] = original2;
all[x++] = copia2;
all[x++] = "<br/>";
all[x++] = usuario;
all[x++] = actualizado;
all[x++] = "<br/>";


let msg = "";
for (let i = 0; i < all.length; i++)
{
    msg += all[i] + "<br/>";
    console.log(all[i]);
}
document.write(msg);