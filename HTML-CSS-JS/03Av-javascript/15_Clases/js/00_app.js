/*
CLASSES EN JAVASCRIPT

Las Classes en JavaScript son una sintaxis moderna (ES6)
para crear objetos de forma reutilizable.

Internamente JavaScript sigue usando prototipos,
pero las clases hacen el código más claro, ordenado y didáctico,
especialmente cuando trabajamos con programación orientada a objetos.
*/

console.clear();

/*
1. ¿POR QUÉ NECESITAMOS CLASSES?

Crear un solo objeto literal está bien para ejemplos pequeños.

Pero cuando necesitamos crear MUCHOS objetos similares
(productos, usuarios, alumnos, pedidos...),
repetir el mismo código una y otra vez no es práctico ni escalable.

Las classes nos permiten definir una estructura común
y reutilizarla tantas veces como queramos.
*/

const productoLiteral = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
};

console.log("Objeto literal:", productoLiteral);

/*
2. DEFINICIÓN DE UNA CLASS

Una class es una PLANTILLA o MOLDE.

No crea objetos por sí misma, sino que define:
- Qué propiedades tendrán los objetos
- Qué comportamiento (métodos) tendrán
*/

class Producto {
  /*
  CONSTRUCTOR
  -----------
  El constructor es un método especial:

  - Se ejecuta AUTOMÁTICAMENTE al usar 'new'
  - Sirve para inicializar el objeto
  - Recibe parámetros (datos iniciales)

  En este caso:
  nombre      → nombre del producto
  precio      → precio del producto
  disponible  → si está disponible o no
  */
  constructor(nombre, precio, disponible) {
    /*
    this hace referencia al OBJETO que se está creando.

    Es como decir:
    "este objeto que estoy construyendo"
    */
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }
}

/*
3. CREAR OBJETOS A PARTIR DE UNA CLASS

Usamos la palabra clave 'new'.

Cada vez que usamos 'new':
- Se crea un objeto nuevo
- Se ejecuta el constructor
- this apunta a ese nuevo objeto
*/

const producto1 = new Producto("Monitor 20 pulgadas", 30, true);
const producto2 = new Producto("Teclado mecánico", 80, false);

console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);

/*
Cada objeto es independiente,
pero ambos siguen la misma estructura definida por la class.
*/

/*
4. AÑADIR MÉTODOS A UNA CLASS

Los MÉTODOS son funciones asociadas a los objetos.

Sirven para:
- Definir comportamiento
- Trabajar con los datos del propio objeto
*/

class ProductoConMetodo {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  /*
  Este método puede acceder a las propiedades
  del objeto usando this
  */
  mostrarInfo() {
    return `El producto ${this.nombre} cuesta ${this.precio}€`;
  }
}

const producto3 = new ProductoConMetodo("Ratón", 15);
console.log(producto3.mostrarInfo());

/*
IMPORTANTE SOBRE THIS Y ARROW FUNCTIONS

No usamos arrow functions para métodos de clase porque:

- Las arrow functions NO tienen su propio this
- Heredan this del contexto exterior

En una class, necesitamos que this apunte
al objeto que llama al método.
*/

/*
5. MODIFICAR PROPIEDADES DE UN OBJETO

Aunque el objeto sea const:
- NO podemos reasignar el objeto
- SÍ podemos modificar sus propiedades
*/

producto1.disponible = false;
console.log("Producto 1 modificado:", producto1);

/*
6. HERENCIA DE CLASSES (extends)

La herencia permite crear clases ESPECIALIZADAS.

- Reutilizamos código
- Evitamos duplicación
- Creamos relaciones padre → hijo
*/

class ProductoDigital extends Producto {
  constructor(nombre, precio, disponible, tamano) {
    /*
    super()
    -------
    Llama al constructor de la clase padre (Producto).

    Es obligatorio llamarlo ANTES de usar this
    */
    super(nombre, precio, disponible);
    this.tamano = tamano;
  }

  /*
  Método propio de ProductoDigital
  */
  descargar() {
    return `Descargando ${this.nombre}...`;
  }
}

const ebook = new ProductoDigital("Ebook JavaScript", 15, true, "5MB");

console.log(ebook);
console.log(ebook.descargar());

/*
7. PROPIEDADES Y MÉTODOS: PÚBLICOS, PRIVADOS Y PROTEGIDOS

En programación orientada a objetos es muy importante el concepto de
ENCAPSULACIÓN.

La encapsulación consiste en:
- Decidir qué partes del objeto se pueden usar desde fuera
- Y cuáles solo deben usarse internamente

En JavaScript moderno existen principalmente:

Miembros PÚBLICOS
Miembros PRIVADOS

(JavaScript no tiene protegidos reales como otros lenguajes,
pero veremos cómo se simulan.)

7.1 MIEMBROS PÚBLICOS

Son los más comunes.

- Se pueden acceder desde fuera del objeto
- Son ideales para datos y acciones que queremos exponer

Ejemplo:
-------------------------------------------------

Los métodos estáticos:

- Pertenecen a la CLASE
- NO a los objetos creados con new
- Se usan para lógica general
*/

class EjemploPublico {
  constructor(nombre) {
    // Propiedad pública
    this.nombre = nombre;
  }

  // Método público
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const ejemploPub = new EjemploPublico("Producto público");
console.log(ejemploPub.nombre);
console.log(ejemploPub.saludar());

/*

7.2 MIEMBROS PRIVADOS (#)

Desde ES2022, JavaScript permite propiedades y métodos PRIVADOS
usando el prefijo #.

- SOLO son accesibles dentro de la clase
- NO se pueden usar desde fuera
- Protegen los datos del objeto
*/

class EjemploPrivado {
  // Propiedad privada
  #stock;

  constructor(nombre, stock) {
    this.nombre = nombre; // pública
    this.#stock = stock;  // privada
  }

  // Método privado
  #reducirStock() {
    this.#stock--;
  }

  // Método público que usa lo privado
  vender() {
    if (this.#stock > 0) {
      this.#reducirStock();
      return `Venta realizada. Stock restante: ${this.#stock}`;
    }
    return "No hay stock";
  }
}

const ejemploPriv = new EjemploPrivado("Producto privado", 2);
console.log(ejemploPriv.nombre);
console.log(ejemploPriv.vender());
console.log(ejemploPriv.vender());

/*
Esto daría ERROR:
console.log(ejemploPriv.#stock);
ejemploPriv.#reducirStock();
*/

/*
7.3 ¿Y LOS PROTEGIDOS?

JavaScript NO tiene modificador 'protected' como Java o PHP.

Pero se suele SIMULAR así:
- Usando una convención con _nombre
- Indicando que NO debería usarse desde fuera
*/

class EjemploProtegido {
  constructor() {
    this._idInterno = 123; // "protegido" por convención
  }

  _metodoInterno() {
    return "Uso interno de la clase";
  }
}

const ejemploProt = new EjemploProtegido();
console.log(ejemploProt._idInterno); // se puede, pero no se debería

/*
8. MÉTODOS ESTÁTICOS

Los métodos estáticos:

- Pertenecen a la CLASE
- NO a los objetos creados con new
- Se usan para lógica general
*/

class Tienda {
  static bienvenida() {
    return "Bienvenido a la tienda online";
  }
}

/*
No instanciamos métodos estáticos porque:

- No dependen de datos de un objeto
- No usan this de una instancia
*/

/* console.log(Tienda.bienvenida());
  static bienvenida() {
    return "Bienvenido a la tienda online";
  } */

/*
No instanciamos métodos estáticos porque:

- No dependen de datos de un objeto
- No usan this de una instancia
*/

console.log(Tienda.bienvenida());

/*
Esto daría error:

const t = new Tienda();
t.bienvenida();
*/

/*
8. EJEMPLO FINAL COMPLETO


Ejemplo sencillo combinando:
- constructor
- métodos
- this
*/

class ProductoFinal {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInfo() {
    return `Producto: ${this.nombre} - ${this.precio}€`;
  }
}

const p1 = new ProductoFinal("Monitor", 30);
const p2 = new ProductoFinal("Teclado", 20);

console.log(p1.mostrarInfo());
console.log(p2.mostrarInfo());

/*
RESUMEN RÁPIDO

✔ Las classes son plantillas de objetos
✔ El constructor inicializa los datos
✔ this hace referencia al objeto actual
✔ Los métodos definen comportamiento
✔ extends permite herencia
✔ super llama al constructor padre
✔ static crea métodos de clase
*/
