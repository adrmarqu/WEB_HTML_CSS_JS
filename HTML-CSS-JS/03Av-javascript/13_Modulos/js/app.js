/* console.log(nombreCliente);
console.log(nombreCliente, ahorro); */

// 1) Para no agrupar en cada archivo en lo que se conoce como un IIFE Immediately Invoked Function Expression (Funciones que se ejecutan cuando se invokan), usaremos modulos, que nos permite importar y exportar parte del código entre archivos js según nuestras necesidades: ejemplo de importación de datos desde el archivo cliente.js

/* import { nombreCliente } from "./cliente.js"; //importamos y usamos la constante nombreCliente
console.log(nombreCliente); //imprimimos el valor de la constante nombreCliente en consola */

/* import { nombreCliente, ahorro} from "./cliente.js"; //añadimos el uso de la let ahorro
console.log(nombreCliente, ahorro); */

/* import { nombreCliente, ahorro, mostrarDatos } from "./cliente.js";
const cliente = mostrarDatos(nombreCliente, ahorro); //incluimos una función
console.log(cliente); */

/* import { nombreCliente, ahorro, Cliente } from "./cliente.js";
const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente);
console.log(cliente.nombre);
console.log(cliente.ahorro);
console.log(cliente.mostrarDatos()); */

import { Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

let nombreCliente = "Pepiño",
  ahorro = 4000;

let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarDatos());

console.log(cliente);
console.log(cliente.nombre);
console.log(cliente.ahorro);
console.log(cliente.mostrarDatos());

let nombreEmpresa = "International Holding de masticadores de chicle",
  ahorroEmpresa = 2000000000,
  categoriaEmpresa = "Construcción"; //tres variables que asigno al objeto empresa

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoriaEmpresa);
console.log(empresa.mostrarInformacion());

console.log(empresa);
console.log(empresa.nombre);
console.log(empresa.ahorro);
console.log(empresa.categoria);
console.log(empresa.mostrarInformacion());
let nombreEmpresa2 = "Grifos GRIFOS";
let ahorroEmpresa2 = 20000;
let categoriaEmpresa2 = "Fuentes públicas"; 

let empresa2 = new Empresa(nombreEmpresa2, ahorroEmpresa2, categoriaEmpresa2);  //defino otras tres variables esta vez directamente en el constructor

console.log(empresa2);
console.log(empresa2.nombre);
console.log(empresa2.ahorro);
console.log(empresa2.categoria);
console.log(empresa2.mostrarInformacion());
