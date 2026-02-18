//const p1 = document.getElementById("parrafo1");

/* Conseguir todos los parrafos */
const parrafos = document.getElementsByTagName("p");

const pid = document.querySelector("#principal p#parrafo1");
const pid2 = document.querySelector("#principal h2");

const ejecutar = () =>
{
   /*  p1.onclick = hola; */
    pid.onclick = paraId;
    pid2.onclick = paraId;
    
    for (let i = 0; i < 8; i++)
        parrafos[i].onclick = hola;
};

const hola = () =>
{
    alert("HOLAAAAAA!!!");
};

const adeu = () =>
{
    alert("ADEEUUUUU!!!");
};

const paraId = () =>
{
    alert("Has clickeado en una Id");
};

const detectar_tecla = (e) =>
{
    e.keyCode = 13 ? alert("Has presionado la tecla 'Enter'") : alert("No has clickado sobre 'Enter'");
};

const bgcolor = () =>
{
    document.querySelector("#principal").style.backgroundColor = "yellow";
};

const color = () =>
{
    document.querySelector("#principal").style.color = "red";
};

window.addEventListener("load", ejecutar);