const producto = "Monitor 20 Pulgadas";
const precio = "PVP 30€";

/* Concat - Juntar dos textos (strjoin) */
console.log(producto.concat(" En descuento"));
console.log(precio.concat(precio));

/* Formas de concatenar, con las comas no hace falta poner espacio */
console.log(producto + precio);
console.log(producto + "Con un precio de " + precio);
console.log("El producto " + producto + " tiene un precio de " + precio);
console.log("El producto", producto, "tiene un precio de", precio);
console.log(`El producto ${producto} tiene un precio de ${precio}`);
