const h = document.querySelector("#hora");
const m = document.querySelector("#minuto");
const s = document.querySelector("#segundo");
const msg = document.querySelector("#msg-finestra");

const clock = () =>
{
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    let text = "";

    if (hour >= 6 && hour <= 14)
        text = "Buenos días";
    else if (hour > 14 && hour < 20)
        text = "Buenas tardes";
    else
        text = "Buenas noches";

    h.innerHTML = `${hour}`;
    m.innerHTML = `${min}`;
    s.innerHTML = `${sec}`;
    msg.innerHTML = text;
};

clock();
setInterval(clock, 1000);

function replaceURL()
{
    let url = prompt("Introduce una nueva URL para la página de objetos predefinidos:");

    url.trim();
    if (url && window.opener)
        window.opener.location.href = url;
};