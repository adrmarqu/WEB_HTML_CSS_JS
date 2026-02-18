const output = document.querySelector("output");
let text = "";
let text1 = "El resultado de la primera función es: ";
let text2 = "El resultado de la segunda función es: ";
let text3 = "El resultado de la tercera función es: ";

/* Formas de declarar una función */

/* Función 1 - Puedes llamarla incluso antes de declararla */

function sumar(a, b)
{
    console.log(text1 + (a + b));
    return a + b;
}
let a = 2, b = 2;

text1 += sumar(a, b);

/* Función 2 - Tienes que llamarla después de declararla */

const suma2 = function (a, b)
{
    console.log(text2 + (a + b));
    return a + b;
}
a = 3; b = 3;

text2 += suma2(a, b);

/* Función 3 - Són las más rápidas */

const sumar3 = (a, b) =>
{
    console.log(text3 + (a + b));
    return a + b;
};
a = 4; b = 4;
text3 += sumar3(a, b);

text += text1 + "<br/>" + text2 + "<br/>" + text3;

output.innerHTML = text;

const aprendiendo1 = function ()
{
    console.log("aprendiendo1");
};

const aprendiendo2 = () =>
{
    console.log("aprendiendo2");
};

const aprendiendo3 = () => console.log("aprendiendo3");

const carrito = 
[
    { nombre: "texto1", precio: 500 },
    { nombre: "texto2", precio: 700 },
    { nombre: "texto3", precio: 300 },
    { nombre: "texto4", precio: 200 },
    { nombre: "texto5", precio: 50 },
    { nombre: "texto6", precio: 500 },
];

const nuevoArray = carrito.map(
    (producto) => `Articulo: ${producto.nombre} Precio: ${producto.precio}`);

const nuevoArray2 = carrito.forEach(
    (producto) => console.log(`Articulo: ${producto.nombre} Precio: ${producto.precio}`)
);

console.log(nuevoArray);
/* console.log(nuevoArray2); */