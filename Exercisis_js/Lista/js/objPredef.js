const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");
const out3 = document.querySelector("#out3");
const out4 = document.querySelector("#out4");
const out5 = document.querySelector("#out5");
const out6 = document.querySelector("#out6");
const out7 = document.querySelector("#out7");
const out8 = document.querySelector("#out8");
const out9 = document.querySelector("#out9");
const out10 = document.querySelector("#out10");
const out11 = document.querySelector("#out11");
const out12 = document.querySelector("#out12");
const out13 = document.querySelector("#out13");
const out14 = document.querySelector("#out14");
const out15 = document.querySelector("#out15");
const out17 = document.querySelector("#out17");
const out18 = document.querySelector("#out18");
const out19 = document.querySelector("#out19");
const out20 = document.querySelector("#out20");
const out21 = document.querySelector("#out21");

const r1 = "Valor máximo que puede tener un número en JavaScript";
const r2 = "Valor mínimo que puede tener un número en JavaScript";
const r3 = "Altura total de la panatalla";
const r4 = "Anchura total de la panatalla";
const r5 = "Altura de la página web";
const r6 = "Anchura de la página web";
const r7 = "URL de la página web";
const r8 = "Nombre de la página web con su extensión (index.html)";
const r9 = "Nombre de la página web sin su extensión (index)";
const r10 = "Valor aleatorio entre 0 y 200 (utilizando Math)";
const r11 = "Sistema operativo del ordenador";

let titol = "Default";
let barra = "no";
let ventana;
let bg_color = null;
let btn_sel = null;
let btn_bdr = null;

const luz = document.querySelectorAll(".luz");

const restore = () =>
{
    location.reload();
}

const changeBgColor = (color) =>
{
    document.body.style.backgroundColor = color;
}

const erase = (id) =>
{
    document.querySelector(id).innerHTML = "";
}

const checkInput = (input, num) =>
{
    if (input == null)
        return false;
    else if (input.trim() === "")
        return false;
    else if (num && Number.isNaN(Number(input)))
        return false;
    return true;
}

const getWeb = (ext) =>
{
    let split = window.location.href.split("/");
    let ret = split[split.length - 1];

    if (!ext)
        return ret;
    return ret.substring(0, ret.lastIndexOf("."));
};

const ej1CreateElement = () =>
{
    const tabla = document.createElement("table");
    tabla.classList.add("tbl-1");

    const addTitle = () =>
    {
        const nav = tabla.insertRow();

        const th1 = document.createElement("td");
        th1.textContent = "PROPIEDAD";
        th1.classList.add("orange");

        const th2 = document.createElement("td");
        th2.textContent = "VALOR OBTENIDO CON JS";
        th2.classList.add("green");

        nav.append(th1, th2);
    };

    const addRow = (a, b) =>
    {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = a;
        fila.insertCell().textContent = b;
    };

    addTitle();

    addRow(r1, Number.MAX_VALUE);
    addRow(r2, Number.MIN_VALUE);
    addRow(r3, window.screen.height);
    addRow(r4, window.screen.width);
    addRow(r5, window.screen.availHeight);
    addRow(r6, window.screen.availWidth);
    addRow(r7, window.location.href);
    addRow(r8, getWeb(0));
    addRow(r9, getWeb(1));
    addRow(r10, Math.floor(Math.random() * 201));
    addRow(r11, navigator.platform);

    document.querySelector("#contenedor").appendChild(tabla);
};

const ej1InnerHtml = () =>
{
    let ta = '<table class="tbl-1">', tb = "</table>";
    let tra = "<tr>", trb = "</tr>";
    let thb = "</th>";
    let thOrange = '<th class="orange">';
    let thGreen = '<th class="green">';
    let tda = "<td>", tdb = "</td>";
    
    let tabla = ta + tra;
    
    tabla += thOrange + "PROPIEDAD" + thb;
    tabla += thGreen + "VALOR OBTENIDO CON JS" + thb + trb + tra;
    
    tabla += tda + r1 + tdb;
    tabla += tda + Number.MAX_VALUE + tdb + trb;

    tabla += tra + tda + r2 + tdb;
    tabla += tda + Number.MIN_VALUE + tdb + trb;

    tabla += tra + tda + r3 + tdb;
    tabla += tda + window.screen.height + tdb + trb;

    tabla += tra + tda + r4 + tdb;
    tabla += tda + window.screen.width + tdb + trb;

    tabla += tra + tda + r5 + tdb;
    tabla += tda + window.screen.availHeight + tdb + trb;

    tabla += tra + tda + r6 + tdb;
    tabla += tda + window.screen.availWidth + tdb + trb;

    tabla += tra + tda + r7 + tdb;
    tabla += tda + window.location.href + tdb + trb;

    tabla += tra + tda + r8 + tdb;
    tabla += tda + getWeb(0) + tdb + trb;

    tabla += tra + tda + r9 + tdb;
    tabla += tda + getWeb(1) + tdb + trb;

    tabla += tra + tda + r10 + tdb;
    tabla += tda + Math.floor(Math.random() * 201) + tdb + trb;

    tabla += tra + tda + r11 + tdb;
    tabla += tda + navigator.platform + tdb + trb;

    out1.innerHTML += tabla + tb + "<br/>";
}

const ej1JSON = () =>
{
    const datos = 
    [
        {left: r1, right: Number.MAX_VALUE},
        {left: r2, right: Number.MIN_VALUE},
        {left: r3, right: window.screen.height},
        {left: r4, right: window.screen.width},
        {left: r5, right: window.screen.availHeight},
        {left: r6, right: window.screen.availWidth},
        {left: r7, right: window.location.href},
        {left: r8, right: getWeb(0)},
        {left: r9, right: getWeb(1)},
        {left: r10, right: Math.floor(Math.random() * 201)},
        {left: r11, right: navigator.platform},
    ];

    let tabla =
    `
        <table class="tbl-1">
            <tr>
                <th class="orange">PROPIEDAD</th>
                <th class="green">VALOR OBTENIDO CON JS</th>
            </tr>
    `;

    datos.forEach(row =>
    {
        tabla +=
        `
            <tr>
                <td>${row.left}</td>
                <td>${row.right}</td>
            </tr>    
        `;
    });

    tabla += "</table><br/>";

    out1.innerHTML += tabla;
}

const ej2 = () =>
{
    if (navigator.cookieEnabled)
    {
        if (window.confirm("Las cookies estan activadas, quieres continuar en la página?"))
            out2.innerHTML = "Bienvenido a la página con cookies";
        else
            location.replace("index.html");
    }
    else
        out2.innerHTML = "Las cookies no estan activadas!";
}

const ej3 = () =>
{
    let answer = "";

    do
    {
        answer = prompt("Introduce un título para la página web");
    }
    while (!checkInput(answer, false));

    answer = answer.toUpperCase();
    document.title = answer;

    out3.innerHTML = `El nuevo título de la página web será: "${answer}"`;
}

const ej4 = () =>
{
    const error = () =>
    {
        alert(
                '"títol" ha de tenir entre 3 i 20 caràcters.\n' +
                '"barra" ha de tenir els valors "yes" o "no".\n' +
                'Tens de possar: "títol,barra"'
            );
    };

    const checkData = (titol, barra) =>
    {
        if (titol === "" || titol.length < 3 || titol.length > 20)
            return error, false;
        if (barra != "yes" && barra != "no")
            return error, false;
        return true;
    }

    for (let data = "", ok = false, spl = ""; !ok; )
    {
        data = prompt("Introduce un título y si va haber barra separado por ',':");

        if (!checkInput(data, false))
        {
            error(); continue ;
        }

        spl = data.split(",");

        if (spl.length != 2)
        {
            error(); continue ;
        }
        
        titol = spl[0].trim();
        barra = spl[1].trim();

        if (!(ok = checkData(titol, barra)))
        {
            error(); continue ;
        }
    }
    out4.innerHTML = `El título es: "${titol}"<br/>La barra es "${barra}"`;
}

const ej5 = () =>
{
    const width = Math.floor(Math.random() * 451 + 50);
    const height = Math.floor(Math.random() * 451 + 50);

    ventana = window.open("./finestra.html", "_blank", `width=${width},height=${height},scrollbars=${barra}`);

    out5.innerHTML = "Ventana finestra.html abierta";
}

const ej6 = () =>
{
    const width = Math.floor(Math.random() * 451 + 50);
    const height = Math.floor(Math.random() * 451 + 50);

    ventana = window.open("./finestra.html", "_blank", `width=${width},height=${height},scrollbars=${barra}`);

    ventana.onload = () =>
    {
        ventana.document.title = titol;
    }
    out6.innerHTML = "Abierta nueva ventana de finestra.html<br/>Cambiado el título correctamente";
}

const ej7 = () =>
{
    const width = Math.floor(Math.random() * 451 + 50);
    const height = Math.floor(Math.random() * 451 + 50);

    ventana = window.open("./finestra.html", "_blank", `width=${width},height=${height},scrollbars=${barra}`);

    ventana.onload = () =>
    {
        ventana.document.title = titol;
    }
    out7.innerHTML = "Abierta nueva ventana de finestra.html<br/>Cambiado el título correctamente<br/>Iniciando reloj";
}

const ej8 = () =>
{
    const width = Math.floor(Math.random() * 451 + 50);
    const height = Math.floor(Math.random() * 451 + 50);

    ventana = window.open("./finestra.html", "_blank", `width=${width},height=${height},scrollbars=${barra}`);

    ventana.onload = () =>
    {
        ventana.document.title = titol;
        ventana.replaceURL();
    }
    out8.innerHTML = "Abierta nueva ventana de finestra.html<br/>Cambiado el título correctamente<br/>Iniciando reloj";
}

const ej9Black = () =>
{
    document.title = "Titulo nuevo!";

    changeBgColor("black");
    document.body.style.color = "white";

    out9.innerHTML = "El titulo de la página se ha cambiado. El fondo se ha cambiado a color negro, y las letras de texto se han cambiado a color blanco."
}

const ej9White = () =>
{
    document.title = "Titulo viejo!";

    changeBgColor("white");
    document.body.style.color = "black";

    out9.innerHTML = "El titulo de la página ha vuelto a cambiar. El fondo se ha cambiado a color blanco, y las letras de texto se han cambiado a negro."
}

const ej10 = () =>
{
    const h = window.screen.height;
    const w = window.screen.width;
    const uh = window.innerHeight;
    const uw = window.innerWidth;

    let msg = "";

    msg += "La anchura de la pantalla es: " + w + "<br/>";
    msg += "La altura de la pantalla es: " + h + "<br/>";
    
    msg += "La anchura útil de la pantalla es: " + uw + "<br/>";
    msg += "La altura útil de la pantalla es: " + uh + "<br/>";
    
    const d = Math.sqrt(w**2 + h**2).toFixed(2);
    const ud = Math.sqrt(uw**2 + uh**2).toFixed(2);


    msg += "La diagonal de la pantalla es: " + d + "px<br/>";
    msg += "La diagonal útil de la pantalla es: " + ud + "px<br/>";

    out10.innerHTML = msg;
}

const ej11 = () =>
{
    let scr = window.open("", "Nueva pestaña", "width=800, height=600");
    scr.document.body.innerHTML = "";
    scr.document.write
    (`
        <h1>Nueva ventana creada desde javascript</h1>
        <button onclick="window.close()" style="width:200px;height:100px;background-color: aqua; cursor:pointer; ">Cerrar ventana</button>
    `);
}

const ej12 = () =>
{
    let text = prompt("Escribe un texto:");

    text = text.trim();

    if (!text || text == "")
    {
        out12.innerHTML = "Texto vacío!";
        return ;
    }

    text = String(text);

    let msg = `Input: "${text}"`;
    if (text.length > 10)
        msg += `<br/>Últimos 5 carátcers: "${text.slice(-5)}"`;
    out12.innerHTML = msg;
}

const ej13 = () =>
{
    const fuse = (a, str, b) =>
    {
        return a + str + b;
    };

    let text = String(prompt("Introduce un texto:"));

    if (text == "null")
        return ;

    text = text.trim();
    if (text === "")
    {
        out13.innerHTML = "Input invalido";
        return ;
    }
    let msg = "Datos del texto introducido:<br/><br/>";
    msg += "Número de carácteres escritos: " + text.length + "<br/>";
    
    msg += "Texto en cursiva: " + fuse("<i>", text, "</i>") + "<br/>";
    
    msg += "Texto en negrita: " + fuse("<b>", text, "</b>") + "<br/>";
    
    msg += "Texto de color rojo: ";
    msg += fuse('<span style="color:red;">', text, "</span>") + "<br/>";
    
    msg += "Texto en un tamaño muy grande: ";
    msg += fuse('<span style="font-size: 5rem;">', text, "</span>") + "<br/>";
    
    msg += "Texto rayado: ";
    msg += fuse('<del style="text-decoration-thickness: 0.1rem;">', text, "</del>") + "<br/>";

    msg += "Texto subrayado: ";
    msg += fuse("<u>", text, "</u>");

    out13.innerHTML = msg;
}

const ej14 = () =>
{
    const getCelda = (str, type, clases) =>
    {
        return `<${type} class="${clases}">${str}</${type}>`;
    };

    const getRow = (a, b, type, c1, c2) =>
    {
        let row = `<tr>${getCelda(a, type, c1)}`;
        row += `${getCelda(b, type, c2)}</tr>`;

        return row;
    };

    const fillText = (s) =>
    {
        if (s == "")
            return "default";
        return s;
    };

    let s1 = prompt("Introuce información del encabezado izquierdo:");
    if (s1 == null)
        return ;
    let s2 = prompt("Introuce información del encabezado derecho:");
    if (s2 == null)
        return ;
    let i1 = prompt("Introuce información de la celda izquierda:");
    if (i1 == null)
        return ;
    let i2 = prompt("Introuce información de la celda derecha:");
    if (i2 == null)
        return ;

    s1 = fillText(s1.trim());
    s2 = fillText(s2.trim());
    i1 = fillText(i1.trim());
    i2 = fillText(i2.trim());

    let tabla = '<table class="tbl-1 tbl-2">';
    
    tabla += getRow(s1, s2, "th", "orange", "green");
    tabla += getRow(i1, i2, "td", "", "");

    tabla += "</table>";

    out14.innerHTML += tabla;
}

const ej15 = () =>
{
    const getElement = (s) =>
    {
        let str = prompt("Introduce la " + s + " del triangulo");
        if (str == null)
            return null;
        else if (str == "")
        {
            out15.innerHTML = "Error: Invalid input";
            return null;
        }
        let nbr = parseFloat(str.trim());
        if (isNaN(nbr) || nbr <= 0)
        {
            out15.innerHTML = "Error: Invalid input. Tienes que meter un número mayor a 0";
            return null;
        }
        return nbr;
    };

    let base = getElement("base");
    if (base == null)
        return ;
    let altura = getElement("altura");
    if (altura == null)
        return ;

    let area = base * altura / 2;

    document.write
    (
        "<h2>Resultado: </h2>" +
        "<p>Base del triangulo: " + base + "</p>" +
        "<p>Altura del triangulo: " + altura + "</p>" +
        "<p>Area del triangulo: <b>" + area + "</b></p>"
    );
}

const ej16 = () =>
{
    const btn_luz = document.querySelector("#btn-luz");

    luz.forEach((e) => 
    {
        if (e.classList.contains("hidden"))
            e.classList.remove("hidden");
        else
            e.classList.add("hidden");
    });

    if (btn_luz.innerHTML === "Encender")
    {
        btn_luz.classList.remove("luz-enc");
        btn_luz.classList.add("luz-apa");
        btn_luz.innerHTML = "Apagar";
    }
    else
    {
        btn_luz.classList.remove("luz-apa");
        btn_luz.classList.add("luz-enc");
        btn_luz.innerHTML = "Encender";
    }
}

const ej17 = () =>
{
    const getDia = (d) =>
    {
        switch (d.getDay())
        {
            case 0:
                return "domingo";
            case 1:
                return "lunes";
            case 2:
                return "martes";
            case 3:
                return "miércoles";
            case 4:
                return "jueves";
            case 5:
                return "viernes";
            case 6:
                return "sábado";
            default:
                return "unknown error";
        }
    }

    let maya = new Date(2012, 11, 21);
    let fecha = new Date();

    out17.innerHTML = "El fin del mundo ocurrio hace "
                        + (fecha - maya)
                        + " milisegundos!<br/>";

    out17.innerHTML += "La fecha actual es: " +
                        `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ` +
                        ` ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}` +
                        ` siendo el dia de la semana el ${getDia(fecha)}`;
}

const ej18 = () =>
{
    let fechaAnterior = new Date(1970, 0, 1);
    let fechaActual = new Date();

    let fecha = fechaActual - fechaAnterior;

    out18.innerHTML = `Han pasado ${fecha} milisegundos des de el 1 de enero de 1970`;
}

const ej19Int = () =>
{
    let n = Math.floor(Math.random() * 10 + 1);

    out19.innerHTML = 
    `
        <div class="div-centred">
            ${n}
        </div>
    `;
}

const ej19Float = () =>
{
    let n = (Math.random() * 10 + 1).toFixed(2);

    if (n > 10)
        n = 10;

    out19.innerHTML = 
    `
        <div class="div-centred">
            ${n}
        </div>
    `;
}

const ej20 = () =>
{
    out20.innerHTML = "El fondo va a cambiar a rojo en 3 segundos!";
    setTimeout(() =>
    {
        changeBgColor("lightcoral");
        out20.innerHTML = "El fondo ahora va a cambiar a verde en 5 segundos!";

        setTimeout(() =>
            {
                changeBgColor("lightgreen");
                out20.innerHTML = "El fondo ha cambiado correctamente!";

            }, 5000);
    }, 3000);
}

const setColor = (btn) =>
{
    bg_color = window.getComputedStyle(btn).backgroundColor;
    let borderColor = window.getComputedStyle(btn).borderColor;

    if (btn_sel)
        btn_sel.style.border = btn_bdr;

    btn_bdr = window.getComputedStyle(btn).border;

    btn.style.border = `7px solid ${borderColor}`;
    btn_sel = btn;
}

const ej21 = () =>
{
    if (bg_color)
        changeBgColor(bg_color);
    bg_color = null;
}