const numero6 = 20;
const numero7 = "20";
console.log(numero6);
console.log(numero7);

const numero1 = 30.6;
const numero2 = 9.3;
const numero3 = 20.2;
const numero4 = 0.10813;
const numero5 = -3;

const numero8 = new Number(20);
console.log(numero8);

let resultado;

resultado = numero1 + numero4;
console.log(resultado);
console.log(resultado.toFixed(2));

resultado = numero1 - numero4;
console.log(resultado);
console.log(resultado.toFixed(2));

resultado = numero1 * numero4;
console.log(resultado);
console.log(resultado.toFixed(2));

resultado = numero1 / numero4;
console.log(resultado);
console.log(resultado.toFixed(2));

resultado = numero1 % numero4;
console.log(resultado);
console.log(resultado.toFixed(2));

resultado = Math.PI;
console.log(resultado);

/* Redondear */
resultado = Math.round(2.5);
console.log(resultado);

/* Redondear hacia arriba */
resultado = Math.ceil(2.2);
console.log(resultado);

/* Truncar, Redondear hacia abajo */
resultado = Math.floor(2.8);
console.log(resultado);

/* Raiz quadrada */
resultado = Math.sqrt(144);
console.log(resultado);

/* Absoluto */
resultado = Math.abs(-300);
console.log(resultado);

/* Potencia */
resultado = Math.pow(2, 5);
console.log(resultado);

/* Minimo */
resultado = Math.min(2, 5, 3, 4, 1, 8, 9, 2, -4, 0);
console.log(resultado);

/* Maximo */
resultado = Math.max(2, 5, 3, 4, 1, 8, 9, 2, -4, 0);
console.log(resultado);

/* Random - Entre 0 y 1 */
resultado = Math.random();
console.log(resultado);

/* Random - Entre 0 y 30 */
resultado = Math.floor(Math.random() * 30);
console.log(resultado);

resultado = 20 + 30 * 2;
console.log(resultado);
resultado = (20 + 30) * 2;
console.log(resultado);

resultado = (20 + 10 + 20 + 40 + 50) * 0.2;
console.log(resultado);

let punutaje = 0;

++punutaje;
console.log(punutaje);

--punutaje;
console.log(punutaje);

punutaje += 3;
console.log(punutaje);

punutaje -= 3;
console.log(punutaje);

const num1 = "20";
const num2 = "20.2";
const num3 = "Uno";
const num4 = 20;

console.log(num1);

console.log(Number(num1));
console.log(Number(num2));
console.log(Number.parseInt(num1));
console.log(Number.parseFloat(num2));
console.log(Number.parseInt(num3));

console.log(Number.isInteger(num4));
console.log(Number.isInteger(num3));
console.log(num4.toString());