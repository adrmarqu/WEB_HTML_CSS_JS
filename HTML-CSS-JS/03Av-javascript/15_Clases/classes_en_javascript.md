![Categoria: javascript](./Classes_files/javascript.svg "Categoria: javascript")

Classes en JavaScript
====================

_Las **Classes en JavaScript** son una sintaxis moderna (ES6) para crear objetos de forma reutilizable i estructurada._

Internamente, JavaScript **continúa usando prototipos**, pero les classes facilitan:

- Un codi més clar i llegible
- Una millor organització
- La introducció a la **Programació Orientada a Objectes (POO)**

Aquest document acompanya els fitxers `index.html` i `00-app.js` i explica **pas a pas** tot el que apareix comentat en el JavaScript.

---

## 1. Per què necessitem Classes?

Crear objectes literals és suficient per a exemples petits:

```js
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true
};
```

Però quan el projecte creix i necessitem **molts objectes semblants** (productes, usuaris, alumnes, comandes...), repetir el mateix codi no és eficient.

👉 Les **classes** ens permeten definir una estructura comuna i reutilitzar-la tantes vegades com vulguem.

---

## 2. Què és una Class?

Una **class** és una **plantilla o motlle**.

No crea objectes directament, sinó que defineix:

- Quines **propietats** tindran els objectes
- Quins **mètodes** (accions) podran realitzar

```js
class Producto {
  constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }
}
```

---

## 3. El constructor

El **constructor** és un mètode especial:

- S'executa automàticament quan usem `new`
- Serveix per **inicialitzar l'objecte**
- Rep els valors inicials com a paràmetres

### Elements del constructor

- `nombre`, `precio`, `disponible` → dades inicials
- `this` → fa referència a **l'objecte que s'està creant**

```js
const producto1 = new Producto("Monitor", 30, true);
```

Cada vegada que fem `new`, es crea un objecte **independent**.

---

## 4. Propietats i mètodes

### Propietats

Les **propietats** són dades que descriuen l'objecte.

Exemples:
- nom
- preu
- disponibilitat

### Mètodes

Els **mètodes** són funcions associades a l'objecte.

Serveixen per:
- Definir comportament
- Treballar amb les seves dades internes

```js
class ProductoConMetodo {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInfo() {
    return `El producto ${this.nombre} cuesta ${this.precio}€`;
  }
}
```

---

## 5. `this` i per què NO usem arrow functions

`this` fa referència a **l'objecte que crida el mètode**.

En una class:

- Els mètodes normals tenen el seu propi `this`
- Les arrow functions **NO tenen `this` propi**

👉 Per això **no s'han d'usar arrow functions** com a mètodes de classe.

---

## 6. Modificar propietats

Encara que un objecte sigui declarat amb `const`:

- ❌ No podem reasignar l'objecte
- ✅ Sí podem modificar les seves propietats

```js
producto1.disponible = false;
```

---

## 7. Encapsulació: públic, privat i protegit

L'**encapsulació** consisteix a controlar què es pot usar des de fora d'un objecte.

### Membres públics

- Accessibles des de qualsevol lloc
- Són els més habituals

```js
this.nombre;
mostrarInfo();
```

---

### Membres privats (`#`)

JavaScript modern permet propietats i mètodes privats amb `#`.

- Només accessibles dins de la classe
- Protegeixen les dades internes

```js
#stock;
#reducirStock();
```

Intentar accedir-hi des de fora genera un error.

---

### Membres protegits (convenció)

JavaScript **NO té `protected` real**.

S'utilitza una convenció:

```js
_idInterno
```

👉 Es pot accedir, però **no s'hauria de fer**.

---

## 8. Herència (`extends`)

La **herència** permet crear classes especialitzades a partir d'altres.

- Reutilitza codi
- Evita duplicacions
- Estableix relacions pare → fill

```js
class ProductoDigital extends Producto {
  constructor(nombre, precio, disponible, tamano) {
    super(nombre, precio, disponible);
    this.tamano = tamano;
  }
}
```

---

## 9. `super()`

`super()`:

- Crida al constructor de la classe pare
- És obligatori abans d'usar `this`
- Inicialitza la part heretada de l'objecte

---

## 10. Mètodes estàtics

Els **mètodes estàtics**:

- Pertanyen a la classe
- NO a les instàncies
- No depenen de dades d'un objecte concret

```js
class Tienda {
  static bienvenida() {
    return "Bienvenido a la tienda online";
  }
}
```

S'utilitzen així:

```js
Tienda.bienvenida();
```

No es poden cridar des d'un objecte creat amb `new`.

---

## 11. Resum final

✔ Les classes són plantilles d'objectes
✔ El constructor inicialitza dades
✔ `this` referencia l'objecte actual
✔ Els mètodes defineixen comportament
✔ L'encapsulació protegeix dades
✔ `extends` permet herència
✔ `super()` inicialitza la classe pare
✔ `static` crea funcionalitat de classe

---

📚 Més informació:
- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

