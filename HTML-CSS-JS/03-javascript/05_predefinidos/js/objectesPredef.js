var tabla = document.createElement("table");
const out = document.querySelector("#galetes");  
const out2 = document.querySelector("#titulo-barra");
let titul = "", barra = "";


/* Ejercicio Tabla */

const Tabla = () =>
{
    const addTitle = () =>
    {
        const nav = tabla.insertRow();
        const th1 = document.createElement("td");
        const th2 = document.createElement("td");
        th1.textContent = "PROPIETAT";
        th1.classList.add("left");
        th2.textContent = "VALOR OBTINGUT AMB JS";
        th2.classList.add("right");
        nav.append(th1, th2);
    };

    const addRow = (a, b) =>
    {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = a;
        fila.insertCell().textContent = b;

        document.querySelector("#contenedor").appendChild(window.tabla);
    };

    const getWeb = (ext) =>
    {
        let split = window.location.href.split("/");
        let ret = split[split.length - 1];

        if (!ext)
            return ret;
        return ret.substring(0, ret.lastIndexOf("."));
    };

    addTitle();
    addRow("Valor màxim que por tenir un número en JavaScript", Number.MAX_VALUE);
    addRow("Valor mínim que pot tenir un número en JavaScript", Number.MIN_VALUE);
    addRow("Alçada total de la pantalla", window.screen.height);
    addRow("Amplada total de la pantalla", window.screen.width);
    addRow("Alçada de la pàgina web", window.screen.availHeight);
    addRow("Amplada de la pàgina web", window.screen.availWidth);
    addRow("URL de la pàgina web", window.location.href);
    addRow("Nom de la pàgina web amb la seva extensió (index.html)", getWeb(0));
    addRow("Nom de la pàgina web sense la seva extensió (index)", getWeb(1));
    addRow("Un valor aleatori entre 0 i 200 (utilitza Math)", Math.floor(Math.random() * 201));
    addRow("Sistema operatiu de l'ordinador", navigator.platform);
};

Tabla();

/* Ejercicio cookies */

const Cookies = () =>
{
    if (navigator.cookieEnabled && window.confirm("Quieres cookies?"))
        out.innerHTML = "Las cookies estan activadas<br/>";
    else
        location.replace("./test.html");
};

Cookies();

/* Titulo de la pagina */

const cambiarTitulo = () =>
{
    const titulo = document.querySelector("title");
    let text = "";

    do
    {
        text = prompt("Introduce un título para la página:");
    }
    while (!isNaN(text));
    titulo.innerHTML = text.toUpperCase();
};

cambiarTitulo();

/* Titulo y Barra */

const getData = () =>
{
    const error = () =>
    {
        alert(
                '"títol" ha de tenir entre 3 i 20 caràcters.\n' +
                '"barra" ha de tenir els valors "yes" o "no".\n' +
                'Tens de possar: "títol,barra"'
            );
    }

    const check = (t, b) =>
    {
        if (t === "" || (t.length < 3 || t.length > 20) || (b != "yes" && b != "no"))
            return error(), false;
        return true;
    }

    let data;

    do
    {
        data = prompt("Introduce un título y una barra separado por ',':");
        titul = ""; barra = "";

        if (data === null || data.trim() === "")
            continue ;

        let split = data.split(",");

        if (split.length != 2)
            continue ;

        titul = split[0].trim();
        barra = split[1].trim();
    }
    while(!check(titul, barra));
    
    out2.innerHTML = `El titul es: "${titul}"<br/>La barra es "${barra}"`;
}

getData();

/* Abrir una nueva ventana (finestra.html) */

/* titul = "Nuevo titulo desde objectesPredef.js";
barra = "no"; */
let pestana;

const ventana = () =>
{
    const width = Math.floor(Math.random() * 461 + 80);
    const height = Math.floor(Math.random() * 461 + 80);

    const getMsgTime = () =>
    {
        const d = new Date();

        const hour = d.getHours();
        const min = d.getMinutes();
        const sec = d.getSeconds();

        let msg = `Inicio de sessión --> Hora: ${hour}, Minuto: ${min}, Segundo: ${sec}<br/><br/>`;

        if (hour >= 6 && hour <= 14)
            msg += "bon dias";
        else if (hour > 14 && hour < 20)
            msg += "bon tarda";
        else
            msg += "bona nit";

        return msg;
    }

    /* pestana = window.open("./finestra.html", "_blank"); */

    pestana = window.open("./finestra.html", "_blank", `width=${width},height=${height},scrollbars=${barra}`);

    pestana.onload = () =>
    {
        pestana.document.title = titul;
        pestana.document.querySelector("#init").innerHTML = getMsgTime();
    }
}

ventana();

/* window.addEventListener("beforeunload", () =>
{
    pestana.close();
}); */