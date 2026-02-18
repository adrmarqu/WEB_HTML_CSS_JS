const output = document.querySelector("output");
const arrays = new Array(2);

const primerArray = new Array(6);

primerArray[0] = 100;
primerArray[1] = 300;
primerArray[2] = 500;
primerArray[5] = 600;

console.log("Posicion 1 del array: " + primerArray[1]);
console.log("Posicion 3 del array: " + primerArray[3]);

const segundoArray = [100, 300, 500, , , 600];


const tercerArray = new Array();
tercerArray[0] = "precio";
tercerArray[1] = 300;
tercerArray[2] = 500;
tercerArray[3] = 600;
tercerArray[7] = "final";

const cuartoArray = ["precio", 300, 500, 600,,,,"final"];

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");

const nums = [10, 20, 30, 40, 50, 60];

const deTodo = 
[
    "Hola",
    10,
    true,
    "si",
    null,
    1.5,
    { nombre: "Juan", trabajjo: "Programador" },
    ["<", 1, 2, 3, 4, ">"],
];

const carrito = [];

const producto =
{
    nombre: "Monitor de 20 Pulgadas",
    precio: 500,
};

const producto2 =
{
    nombre: "Movil",
    precio: 400,
};

const producto3 =
{
    nombre: "Tablet",
    precio: 600,
};

const producto4 =
{
    nombre: "Teclado",
    precio: 50,
};

const producto5 =
{
    nombre: "Ratón",
    precio: 20,
};

/* Push lo sube al final del array */
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

/* Eliminar primer elemento */
carrito.shift();

/* Eliminar ultimo elemento */
carrito.pop();

/* Eliminar por el medio - Elimina la posicion 1 y 2 */
carrito.splice(1, 2);

/* Agregar elemento al inicio */
carrito.unshift(producto3)

const numero = [10, 20, 30, 40, "50", "final",,6];
const [a, b, c, d, e, f, g, h] = numero;


const carro =
[
    {nombre: "Monitor 21 Pulfadas", precio: 500},
    {nombre: "Televisión 51 Pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Auriculares", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Móvil", precio: 500},
];

carro.forEach((producto) =>
{
    console.log("Articulo: " + producto.nombre + " Precio: " + producto.precio);
});

arrays[0] = primerArray;
arrays[1] = segundoArray;
arrays[2] = tercerArray;
arrays[3] = cuartoArray;
arrays[4] = meses;
arrays[5] = nums;
arrays[6] = deTodo;
arrays[7] = carrito;
arrays[8] = [a, b, c, d, e, f, g, h];
arrays[9] = carro;

output.innerHTML = "";
for (let i = 0; i < arrays.length; i++)
{
    output.innerHTML += `Array ${i + 1}: ${arrays[i]}<br/>`;
    console.log(arrays[i])
}