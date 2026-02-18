let newAddr = prompt("Nova adreça HTML:");

/* if (window.opener && newAddr)
    window.opener.location.href = newAddr;
else
    window.opener.location.href = "index.html"; */

let msg = "";
const clock = document.querySelector("#clock");

const updateClock = () =>
{
    const d = new Date();

    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    msg = `<br/>Hora actual --> Hora: ${hour}, Minuto: ${min}, Segundo: ${sec}<br/>`;

    clock.innerHTML = msg;
}

setInterval(updateClock, 1000);