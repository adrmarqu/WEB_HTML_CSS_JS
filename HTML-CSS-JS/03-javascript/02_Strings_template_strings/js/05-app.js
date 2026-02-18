const producto = "Monitor 20 Pulgadas";

/* Replace */
console.log(producto.replace("20", "24"));
console.log(producto.replace("Pulgadas", '"'));

/* Slice */
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 10));
console.log(producto.slice(2, 1));

/* Substring */
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const nom = "Pepe";
console.log(nom.substring(0, 2));
console.log(nom.charAt(0));
console.log(nom.charAt(3));