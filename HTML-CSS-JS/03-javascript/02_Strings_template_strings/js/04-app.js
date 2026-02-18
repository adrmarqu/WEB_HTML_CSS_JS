const producto = "           Monitor 20 Pulgadas.        ";

/* Limpiar contenidos */
console.log(producto);
console.log(producto.length);
console.log("|" + producto.trimStart() + "|");
console.log("|" + producto.trimEnd() + "|");
console.log("|" + producto.trimStart().trimEnd() + "|");
console.log(producto.trim().length);