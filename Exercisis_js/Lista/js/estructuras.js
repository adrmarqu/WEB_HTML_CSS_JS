const i1 = document.querySelector("#input1");
const i2 = document.querySelector("#input2");
const i5 = document.querySelector("#input5");
const i7 = document.querySelector("#meses");
const i8 = document.querySelector("#input8");
const i9 = document.querySelector("#mostrar");

const b1 = document.querySelector("#borrar1");
const b2 = document.querySelector("#borrar2");
const b3 = document.querySelector("#borrar3");
const b4 = document.querySelector("#borrar4");
const b5 = document.querySelector("#borrar5");
const b6 = document.querySelector("#borrar6");
const b7 = document.querySelector("#borrar7");
const b8 = document.querySelector("#borrar8");
const b9 = document.querySelector("#borrar9");
const b10 = document.querySelector("#borrar10");
const b11 = document.querySelector("#borrar11");
const b12 = document.querySelector("#borrar12");
const b13 = document.querySelector("#borrar13");

const ej2 = document.querySelector("#ej2");
const ej3 = document.querySelector("#ej3");
const ej4 = document.querySelector("#ej4");
const ej5 = document.querySelector("#ej5");
const ej6 = document.querySelector("#ej6");
const ej7 = document.querySelector("#ej7");
const ej8 = document.querySelector("#ej8");
const ej9 = document.querySelector("#ej9");
const ej11 = document.querySelector("#ej11");

const err = document.querySelector("#error");
const par = document.querySelector("#par");
const impar = document.querySelector("#impar");

const precio = document.querySelector("#precio");
const iva = document.querySelector("#iva");

const n1 = document.querySelector("#num1");
const n2 = document.querySelector("#num2");
const sel = document.querySelector("#selector");

const rows = document.querySelector("#filas");
const cols = document.querySelector("#columnas");

const mostrar = document.querySelector("#mostrar2");
const mostrar2 = document.querySelector("#mostrar3");
const guardar = document.querySelector("#guardar");
const guardar2 = document.querySelector("#guardar2");
const eliminar = document.querySelector("#eliminar");
const eliminar2 = document.querySelector("#eliminar2");
const errors = document.querySelectorAll("#form-persona1 small");
const form = document.querySelector("#form-persona1");
const errors2 = document.querySelectorAll("#form-persona2 small");
const form2 = document.querySelector("#form-persona2");

const pdni = /^\d{8}[A-Z]$/;


const erase = (obj, ej) =>
{
    if (obj)
        obj.value = "";
    if (ej)
        ej.innerHTML = "";
};

const eraseForm = () => 
{
    errors.forEach(e =>
    {
        e.innerHTML = "";
    });
};

const eraseForm2 = () => 
{
    errors2.forEach(e =>
    {
        e.innerHTML = "";
    });
};

const def = () =>
{
    err.style.border = "3px solid black";
    par.style.border = "3px solid black";
    impar.style.border = "3px solid black";
};

const input1 = () =>
{
    const isPar = (n) =>
    {
        if (isNaN(n) || n === "")
            return -1;
        if (n % 2)
            return 1;
        return 0;
    };

    const val = i1.value.trim();

    def();
    if (val === "")
        return ;

    const num = isPar(val);
    if (num === -1)
        err.style.border = "5px solid red";
    else if (num === 0)
        par.style.border = "5px solid blue";
    else
        impar.style.border = "5px solid blue";
};

const input2 = () =>
{
    const calcula = () =>
    {
        return 144 / 12;
    };

    if (i2.value.trim() == calcula())
        ej2.innerHTML = "Resultado correcto";
    else
        ej2.innerHTML = "Resultado o input incorrecto";
};

const input3 = () =>
{
    const p = precio.value.trim();
    const va = iva.value.trim();

    let result = Number(p) + Number(p) * Number(va) / 100;
    if (isNaN(result))
        result = "Input incorrecto!"; 
    ej3.innerHTML = result;
};

const input4 = () =>
{
    let result;
    const a = n1.value.trim();
    const b = n2.value.trim();

    if (a === "" || b === "")
    {
        ej4.innerHTML = "Input vacio";
        return ;
    }

    switch (sel.value)
    {
        case "sumar":
            result = Number(a) + Number(b);
            break ;
        case "restar":
            result = Number(a) - Number(b);
            break ;
        case "multiplicar":
            result = Number(a) * Number(b);
            break ;
        case "dividir":
            result = Number(a) / Number(b);
            break ;
        case "modulo":
            result = Number(a) % Number(b);
            break ;
        default:
            result = "Has de elegir un operador";
    }
    if (isNaN(result))
        result = "Input incorrecto";
    ej4.innerHTML = result;
};

const input5 = () =>
{
    const val = i5.value.trim();
    const base = "codi_producte ";

    if (val === "")
        return ;
    ej5.innerHTML = "";
    for (let i = 0; i < val; i++)
    {
        ej5.innerHTML += base + i + "<br/>";
    }
};

const input6 = () =>
{
    const getTable = (a, b) =>
    {
        const tabla = document.createElement("table");
        for (let i = 0; i < a; i++)
        {
            const fila = document.createElement("tr");
            for (let j = 0; j < b; j++)
            {
                const tipo = i ? "td" : "th"; 
                const celda = document.createElement(tipo);
                celda.textContent = `R: ${i} C: ${j}`;
                celda.contentEditable = true;
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        tabla.classList.add("table-struct");
        return tabla;
    }

    const row = rows.value.trim();
    const col = cols.value.trim();

    if (row === "" || col === "")
        return ;
    ej6.innerHTML = "";
    ej6.appendChild(getTable(row, col));
};

const input7 = () =>
{
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const getArray = () =>
    {
        const arr = meses.slice();
        for (let i = arr.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
        return arr;
    };

    const getAlpha = (arr) =>
    {
        const len = arr.length;

        const getLowest = () =>
        {
            if (!arr)
                return null;
            let lowest = arr[0];
            let idx = 0;
            for (let i = 1; i < arr.length; i++)
            {
                if (lowest > arr[i])
                {
                    lowest = arr[i];
                    idx = i;
                }
            }
            arr.splice(idx, 1);
            return lowest;
        }
        
        let result = "";
        for (let i = 0; i < len; i++)
        {
            result += getLowest();
            if (i !== len - 1)
               result += ", ";
        }
        return result;
    };

    const getInvertido = (inv) =>
    {
        for (let i = 0, j = inv.length - 1; i < j; i++, j--)
            [inv[i], [inv[j]]] = [inv[j], [inv[i]]];

        return inv.join(", ");
    };

    const array = getArray();

    let real = "El orden real de los meses es:<br>[ ";
    real += meses.join(", ");

    let alfa = "El orden alfabético de los meses es:<br>[ ";
    alfa += getAlpha(array.slice());

    let guion = "Los meses separados por guiones son:<br>[ ";
    guion += array.join("-");
    
    let invertido = "El orden invertido de los meses es:<br>[ ";
    invertido += getInvertido(array.slice());
    
    let char = "Los meses separados por un carácter:<br>[ ";
    char += array.join("&");
    
    let original = "El array de meses utilizado es:<br>[ ";
    original += array.join(", ");

    ej7.innerHTML = real + " ]<br><br>";
    ej7.innerHTML += alfa + " ]<br><br>";
    ej7.innerHTML += guion + " ]<br><br>";
    ej7.innerHTML += invertido + " ]<br><br>";
    ej7.innerHTML += char + " ]<br><br>";
    ej7.innerHTML += original + " ]<br><br>";
};

const input8 = () =>
{
    let empty = 0, len, area = i8.value.trim();

    if (area === "")
        empty = 1;
    area = area.toLowerCase();
    area = area.split(" ");
    let result = "La primera palabra es: " + area[0] + "<br>";
    len = area.length;
    if (empty)
        len = 0;
    result += "La última palabra es: " + area[len - 1] + "<br>";
    result += "El número total de palabras es de: " + len + "<br>"; 
    result += "Las palabras ordenadas alfabeticamente separadas por un guion:<br><br>";
    if (!empty)
        result += "[ " + area.sort().join("-") + " ]";

    ej8.innerHTML = result;
};

const input9 = () =>
{
    const array = 
    {
        nom: "Adrià",
        cognom: "Márquez",
        edat: "25",
        dni: "23926568J",
        sexe: "Masculí",
        telefon: "620573809",
        ubicacio: "Cifo La Vileta, 2025",
    };

    const showData = () =>
    {
        let msg = "";

        msg += "Nombre: " + array.nom + "<br>";
        msg += "Cognom: " + array.cognom + "<br>";
        msg += "Edat: " + array.edat + "<br>";
        msg += "DNI: " + array.dni + "<br>";
        msg += "Génere: " + array.sexe + "<br>";
        msg += "Teléfon: " + array.telefon + "<br>";
        msg += "Ubicació: " + array.ubicacio + "<br>";

        return msg;
    };

    ej9.innerHTML = showData();;
};

const arrayPersona = [];

const input10 = (event) =>
{
    const get = () =>
    {
        const persona = 
        {
            nombre: form.nombre.value,
            apellido: form.apellido.value,
            edad: form.edad.value,
            dni: form.dni.value,
            sexo: form.genero.value,
            tel: form.telefono.value,
            location: form.location.value,
        };

        const checkText = (val, option, min, max) =>
        {
            val = val.trim();

            if (val.length < min || val.length > max)
            {
                switch (option)
                {
                    case "nombre":
                        errors[0].innerHTML = `El ${option} ha de tener entre ${min} y ${max} carácteres.`;
                        break;
                    case "apellido":
                        errors[1].innerHTML = `El ${option} ha de tener entre ${min} y ${max} carácteres.`;
                        break;
                    case "ubicacion":
                        errors[6].innerHTML = `La ${option} ha de tener entre ${min} y ${max} carácteres.`;
                        break;
                }
                return 1;
            }
            return 0;
        };

        const checkAge = (age) =>
        {
            age = age.trim();
            if (age < 0 || age > 120 || age === "")
            {
                errors[2].innerHTML = `La edad ha de ser entre 0 y 120 años`;
                return 1;
            }
            return 0;
        };

        const checkDni = (val) =>
        {
            let num, unaLetra;
            let r = val.match(pdni);
            let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

            if (r)
            {
                num = val.substr(0, val.length - 1);
                unaLetra = val.substr(val.length - 1, 1);
                num %= 23;
                letra = letra.substring(num, num + 1);
                if (letra !== unaLetra)
                {
                    errors[3].innerHTML = `Letra del DNI incorrecta`;
                    return 1;
                }
                return 0;
            }
            errors[3].innerHTML = `Formato del DNI incorrecto (8 números + 1 letra)`;
            return 1;
        };

        const checkSex = (sex) =>
        {
            if (sex == 0)
            {
                errors[4].innerHTML = `Tienes que escoger una opción válida`;
                return 1;
            }
            return 0;
        };

        const checkTel = (tel) =>
        {
            if (isNaN(tel) || tel.length < 9 || tel.length > 11)
            {
                errors[5].innerHTML = `Introduce un número de teléfono válido entre 9 y 11 números`;
                return 1;
            }
            return 0;
        };

        let error = 0;
        error += checkText(persona.nombre, "nombre", 2, 30);
        error += checkText(persona.apellido, "apellido", 2, 50);
        error += checkAge(persona.edad);
        error += checkDni(persona.dni.toUpperCase());
        error += checkSex(persona.sexo);
        error += checkTel(persona.tel);
        error += checkText(persona.location, "ubicacion", 5, 100);

        if (!error)
            arrayPersona.push(persona);
    };

    const show = () =>
    {
        let ventana = window.open("", "Mostrar datos", "width=600,height=400");

        ventana.document.body.innerHTML = "";

        arrayPersona.forEach(p => 
        {
            ventana.document.write(`Nombre: ${p.nombre}<br>`);
            ventana.document.write(`Apellido: ${p.apellido}<br>`);
            ventana.document.write(`Edad: ${p.edad}<br>`);
            ventana.document.write(`DNI: ${p.dni}<br>`);
            ventana.document.write(`Genero: ${p.sexo}<br>`);
            ventana.document.write(`Telefono: ${p.tel}<br>`);
            ventana.document.write(`Ubicación: ${p.location}<br><br><br>`);
        });
    };

    if (event.target.id === "guardar")
        get();
    else if (event.target.id === "mostrar2")
        show();
    else if (event.target.id === "eliminar")
        arrayPersona.pop();
};

const arrayMenu = new Array(5);

const input11 = (event) =>
{
    const save = () =>
    {
        let error = 0;
        let idx = form2.dia.value;

        const menu =
        {
            dia: "",
            primero: form2.primero.value.trim(),
            segundo: form2.segundo.value.trim(),
            postre: form2.postre.value.trim(),
        };

        const estaVacio = (val, i, msg) =>
        {
            if (val === "")
            {
                errors2[i].innerHTML = msg;
                return 1;
            }
            return 0;
        };

        if (idx === "X")
        {
            error = 1;
            errors2[0].innerHTML = "Escoge un dia";
        }

        error += estaVacio(menu.primero, 1, "Escribe un primer plato");
        error += estaVacio(menu.segundo, 2, "Escribe un segundo plato");
        error += estaVacio(menu.postre, 3, "Escribe un postre");

        if (!error)
        {
            idx = Number(idx);
            switch (idx)
            {
                case 0:
                    menu.dia = "Lunes";
                    break;
                case 1:
                    menu.dia = "Martes";
                    break;
                case 2:
                    menu.dia = "Miercoles";
                    break;
                case 3:
                    menu.dia = "Jueves";
                    break;
                case 4:
                    menu.dia = "Viernes";
                    break;
                default:
                    menu.dia = "ERROR?!";
            }
            arrayMenu[idx] = menu;
        }
    };

    const show = () =>
    {
        const table = document.createElement("table");
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";
        table.style.textAlign = "center";

        ej11.innerHTML = "";
        let n = 0;
        const colores = ["#FFB347", "#FF6961", "#77DD77", "#84B6F4", "#FFD700"];

        for (let row = 0; row < arrayMenu.length; row++)
        {
            if (arrayMenu[row] === undefined)
                continue ;
            n++;
            const tr = document.createElement("tr");
            tr.style.backgroundColor = colores[row];
            tr.style.border = "3px solid black";

            const day = document.createElement("td");
            day.textContent = arrayMenu[row].dia;
            day.style.border = "2px solid black";
            day.style.height = "50px";
            
            const first = document.createElement("td");
            first.textContent = arrayMenu[row].primero;
            first.style.border = "2px solid black";
            
            const second = document.createElement("td");
            second.textContent = arrayMenu[row].segundo;
            second.style.border = "2px solid black";
            
            const last = document.createElement("td");
            last.textContent = arrayMenu[row].postre;
            last.style.border = "2px solid black";

            tr.appendChild(day);
            tr.appendChild(first);
            tr.appendChild(second);
            tr.appendChild(last);
            table.appendChild(tr);
        }
        if (n)
            ej11.appendChild(table);
    };

    if (event.target.id === "guardar2")
        save();
    else if (event.target.id === "mostrar3")
        show();
    else if (event.target.id === "borrar2")
        eraseForm2();
}; 

i1.addEventListener("keyup", input1);
i2.addEventListener("keyup", input2);
precio.addEventListener("keyup", input3);
iva.addEventListener("keyup", input3);
n1.addEventListener("keyup", input4);
n2.addEventListener("keyup", input4);
sel.addEventListener("change", input4);
i5.addEventListener("keyup", input5);
rows.addEventListener("keyup", input6);
cols.addEventListener("keyup", input6);
i7.addEventListener("click", input7);
i8.addEventListener("keyup", input8);
i9.addEventListener("click", input9);
guardar.addEventListener("click", input10);
mostrar.addEventListener("click", input10);
eliminar.addEventListener("click", input10);
guardar2.addEventListener("click", input11);
mostrar2.addEventListener("click", input11);

b1.addEventListener("click", () => 
{
    erase(i1, null);
    def();
});
b2.addEventListener("click", () => erase(i2, ej2));
b3.addEventListener("click", () => 
{
    erase(precio, ej3); 
    erase(iva, null); 
});
b4.addEventListener("click", () => 
{
    erase(n1, null);
    erase(n2, ej4);
    sel.value = "";
});
b5.addEventListener("click", () => erase(i5, ej5));
b6.addEventListener("click", () => {erase(rows, ej6); erase(cols, null);});
b7.addEventListener("click", () => erase(null, ej7));
b8.addEventListener("click", () => erase(i8, ej8));
b9.addEventListener("click", () => erase(null, ej9));
b10.addEventListener("click", eraseForm);
b11.addEventListener("click", eraseForm2); 
b12.addEventListener("click", () => erase(null, ej11));
b13.addEventListener("click", () =>
{
    for (let i = 0; i < arrayMenu.length; i++)
        arrayMenu[i] = undefined;
    erase(null, ej11);
});