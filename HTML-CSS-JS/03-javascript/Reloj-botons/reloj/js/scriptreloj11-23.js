// Obtener el elemento canvas y su contexto
let canvas = document.querySelector("#clockCanvas");
let ctx = canvas.getContext("2d");

// Definir el centro del reloj
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

// Definir el radio del reloj
let radius = canvas.width / 2 - 10;

// Función para dibujar el reloj
function drawClock() {
  // Obtener la hora actual
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar el fondo del reloj
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#f5f5f5";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.stroke();

  // Dibujar las horas
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(
    centerX + Math.sin((hours * Math.PI) / 6) * (radius * 0.5),
    centerY - Math.cos((hours * Math.PI) / 6) * (radius * 0.5)
  );
  ctx.lineWidth = 5;
  ctx.stroke();

  // Dibujar los minutos
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(
    centerX + Math.sin((minutes * Math.PI) / 30) * (radius * 0.7),
    centerY - Math.cos((minutes * Math.PI) / 30) * (radius * 0.7)
  );
  ctx.lineWidth = 3;
  ctx.stroke();

  // Dibujar los segundos
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(
    centerX + Math.sin((seconds * Math.PI) / 30) * (radius * 0.9),
    centerY - Math.cos((seconds * Math.PI) / 30) * (radius * 0.9)
  );
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Actualizar el reloj cada segundo
setInterval(drawClock, 1000);

/* 

1. Primero, obtenemos el elemento canvas y su contexto utilizando  `document.getElementById("clockCanvas")`  y  `canvas.getContext("2d")` , respectivamente.

2. Definimos las variables  `centerX`  y  `centerY`  para representar el centro del reloj en el canvas, y calculamos el radio del reloj utilizando  `canvas.width / 2 - 10` .

3. Luego, creamos la función  `drawClock()`  que se encargará de dibujar el reloj en el canvas. Dentro de esta función, obtenemos la hora actual utilizando  `new Date()` , y extraemos las horas, minutos y segundos utilizando los métodos  `getHours()` ,  `getMinutes()`  y  `getSeconds()` .

4. Limpiamos el canvas utilizando  `ctx.clearRect(0, 0, canvas.width, canvas.height)`  para asegurarnos de que no haya elementos previos en el canvas.

5. Dibujamos el fondo del reloj utilizando  `ctx.beginPath()`  para comenzar un nuevo trazo,  `ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)`  para dibujar un arco circular,  `ctx.fillStyle`  para establecer el color de relleno y  `ctx.fill()`  para rellenar el arco. Luego, utilizamos  `ctx.strokeStyle`  y  `ctx.stroke()`  para establecer el color y dibujar el borde del arco.

6. Dibujamos las horas utilizando  `ctx.beginPath()`  para comenzar un nuevo trazo,  `ctx.moveTo(centerX, centerY)`  para mover el punto de inicio del trazo al centro del reloj, y  `ctx.lineTo(x, y)`  para dibujar una línea desde el centro hasta las coordenadas calculadas basadas en las horas actuales. Utilizamos  `ctx.lineWidth`  para establecer el ancho de la línea y  `ctx.stroke()`  para dibujarla.

7. Repetimos el paso anterior para dibujar los minutos y los segundos, utilizando coordenadas calculadas basadas en los minutos y segundos actuales.

8.Con  `setInterval(drawClock, 1000)` llamamos a la función  `drawClock()`  cada segundo, actualizando el reloj en tiempo real.

 */