
//Los IIFE  (Immediately Invoked Function Expressions o Expresiones de Función Invocadas Inmediatamente) son funciones que se ejecutan inmediatamente que son leidas...

// Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente...
(() => {

 let ahorro = 300;
//Evitamos que este código se mezcle con otras variables, el problema es que encapsula el código, y para hacerlo accesible desde otros archivos devemos elevar el ámbito de este código al window del navegador

 window.nombreCliente = "Juan Alberto";
 window.ahorro = ahorro;
})();

// Para no tener grandes cantidades de código dentro de una IIFE, ni conflictos de ámbito, son muy útiles los modulos y 2 palabras, export e import...
export const nombreCliente = "Pepe";
export let ahorro = 200;

//Podemos exportar e importar todo tipo de datos, variables, constantes, funciones, arrays, objetos, classes...
export function mostrarDatos(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

//Creación de una clase. Modelo para construir objetos
// Y uso de this
// /this se refiere al valor sobre el objeto o contexto (objeto) que se esta ejecutando en ese momento

export class Cliente 
{
  constructor(nombre, ahorro) 
  {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarDatos() 
  {
    return `Impresión en consola del Cliente: ${this.nombre} y su Ahorro: ${this.ahorro}`;
  }
}
