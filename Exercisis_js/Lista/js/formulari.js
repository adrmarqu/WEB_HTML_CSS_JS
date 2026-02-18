const form = document.ejFormulario;

const user = form.usuario;
const tel = form.telefono;
const born = form.nacimiento;
const email = form.correo;
const dni = form.dni;
const cond = form.condiciones;
const area = form.info;

const send = form.enviar;
const clean = form.borrar;
const save = form.guardar;
const recuperate = form.recuperar;

const msgU = document.querySelector("#msg-user");
const msgT = document.querySelector("#msg-tel");
const msgB = document.querySelector("#msg-born");
const msgE = document.querySelector("#msg-email");
const msgD = document.querySelector("#msg-dni");
const msgC = document.querySelector("#msg-cond");
const msgA = document.querySelector("#msg-area");
const small = document.querySelectorAll("small");
const ele = [user, tel, born, email, dni];

const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;

const checkUser = () =>
{
    const usuario = user.value;

    /* No puede comenzar con numero */
    if (usuario[0] >= "0" && usuario[0] <= "9")
        return 1;

    if (usuario.length < 3 || usuario.length > 20)
        return 2;

    return 0;
};

const checkTel = () =>
{
    let phone = tel.value.trim();
    if (phone.length < 9 || phone.length > 11)
        return 1;

    for (let i = 0; i < phone.length; i++)
        if (phone[i] < "0" || phone[i] > "9")
            return 2;
    return 0;
};

const checkAge = () =>
{
    let fecha = born.value.split(",");
    if (fecha.length != 3)
        return 1;

    const mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    /* Comprobar mes */

    if (fecha[1] < 1 || fecha[1] > 12)
        return 2;

    /* Comprobar dia */
    if (fecha[0] < 1 || fecha[0] > mes[fecha[1] - 1])
        return 3;

    let nacimiento = new Date(fecha[2], fecha[1] - 1, fecha[0]);
    let actual = new Date();

    let miEdad = Math.floor((actual - nacimiento) / (1000 * 60 * 60 * 24) / 365);
    if (miEdad >= 18 && miEdad <= 100)
        return 0;
    return 4;
};

const checkEmail = () =>
{
    let last = email.value.substring(email.value.indexOf("@"));

    /* Buscar el ultimo punto */
    idx = last.lastIndexOf(".");
    if (idx <= 0)
        return 1;

    /* Que haya 2 carácteres después del punto */
    last = last.substring(idx + 1);
    if (last.length < 2)
        return 2;
    return 0;
};

const checkDni = () =>
{
    let id = dni.value.toUpperCase();
    let r = id.match(pdni);
    let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (r)
    {
        num = id.substr(0, id.length - 1);
        num = num.replace("X", 0);
        num = num.replace("Y", 1);
        num = num.replace("Z", 2);
        let unaLetra = id.substr(id.length - 1, 1);
        num = num % 23;
        letra = letra.substring(num, num + 1);

        if (letra !== unaLetra) return 1;
        return 0;
    }
    else
        return 2;
};

const checkCond = () =>
{
    return Number(!cond.checked);
};

const checkArea = () =>
{
    return Number(area.value.length < 10);
}

const checkForm = (e) =>
{    
    e.preventDefault();

    listeners.forEach(input => pasaValor( { target: input }));

    let error = checkUser() + checkTel() + checkAge() + checkEmail() + checkDni() + checkArea();

    if (checkCond())
    {
        error = 1;
        msgC.innerHTML = "Necesitas aceptar para avanzar.";
    }
    else
        msgC.innerHTML = "";


    return error ? false : (form.submit(), true);
};

const cleanForm = () =>
{
    small.forEach(s =>
    {
        s.innerHTML = "";
    });

    ele.forEach(e =>
    {
        e.style.border = "2px solid black";
    });

    area.style.border = "3px dashed black";
};

const saveForm = () =>
{
    const array = [user, tel, born, email, dni, area];

    array.forEach(input =>
    {
        document.cookie = `${input.name}=${encodeURIComponent(input.value)}`;
    });
    document.cookie = `${cond.name}=${cond.checked}`;
};

const recuperateForm = () =>
{
    cleanForm();
    const getCookies = () =>
    {
        const data = document.cookie;
        const partes = data.split("; ");

        const cookies = new Map();

        partes.forEach((p) =>
        {
            const [name, value] = p.split("=");
            cookies.set(name, decodeURIComponent(value));
        });

        return cookies;
    }

    const array = [user, tel, born, email, dni, area];
    const cookies = getCookies();

    array.forEach((input) =>
    {
        input.value = cookies.get(input.name) || "";
    });

    cond.checked = cookies.get(cond.name) === "true";
};

const pasaValor = (e) =>
{
    let action = 0;
    let msg = "";

    switch (e.target.name)
    {
        case "usuario":
            action = checkUser();
            user.style.border = "2px solid black";
            if (action == 1)
            {
                msg = "El nombre del usuario no puede empezar con un número!";
                user.style.border = "2px solid red";

            }
            else if (action == 2)
            {
                msg = "El nombre de usuario ha de tener una longitud de 3 a 20 carácteres!";
                user.style.border = "2px solid red";
            }
            msgU.style.color = "red";
            msgU.innerHTML = msg;
            break ;
        case "telefono":
            action = checkTel();
            tel.style.border = "2px solid black";
            if (action == 1)
            {
                msg = "El numero ha de tener entre 9 y 11 carácteres";
                tel.style.border = "2px solid red";
            }
            else if (action == 2)
            {
                msg = "El telefono ha de ser un número";
                tel.style.border = "2px solid red";
            }
            msgT.style.color = "red";
            msgT.innerHTML = msg;
            break ;
        case "nacimiento":
            action = checkAge();
            born.style.border = "2px solid black";

            if (action == 1)
            {
                msg = "El formato es: dia, mes, año";
                born.style.border = "2px solid red";
            }
            else if (action == 2)
            {
                msg = "Los meses han de ser del 1 al 12";
                born.style.border = "2px solid red";
            }
            if (action == 3)
            {
                msg = "Día incorrecto";
                born.style.border = "2px solid red";
            }
            else if (action == 4)
            {
                msg = "Tienes de tener más de 18 años, y menos de 100";
                born.style.border = "2px solid red";
            }
            msgB.style.color = "red";
            msgB.innerHTML = msg;
            break ;
        case "correo":
            action = checkEmail();
            email.style.border = "2px solid black";
            if (action == 1)
            {
                msg = "Formato del correo: text@text.text";
                email.style.border = "2px solid red";
            }
            else if (action == 2)
            {
                msg = "Después del último punto necesitas al menos 2 carácteres";
                email.style.border = "2px solid red";
            }
            msgE.style.color = "red";
            msgE.innerHTML = msg;
            break ;
        case "dni":
            action = checkDni();
            dni.style.border = "2px solid black";
            if (action == 1)
            {
                msg = "Letra incorrecta";
                dni.style.border = "2px solid red";
            }
            else if (action == 2)
            {
                msg = "Formato del DNI: DNI[8números+1letra], NIE[X/Y/Z+7números+1letra]";
                dni.style.border = "2px solid red";
            }
            msgD.style.color = "red";
            msgD.innerHTML = msg;
            break ;
        case "info":
            action = checkArea();
            area.style.border = "3px dashed black";
            if (action == 1)
            {
                msg = "Necesitas al menos 10 carácteres";
                area.style.border = "3px dashed red";
            }
            msgA.style.color = "red";
            msgA.innerHTML = msg;
            break ;
    }
};

form.addEventListener("submit", checkForm);
clean.addEventListener("click", cleanForm);
save.addEventListener("click", saveForm);
recuperate.addEventListener("click", recuperateForm);

const listeners = [user, tel, born, email, dni, cond, area];

for (const listener of listeners) listener.
    addEventListener("keyup", pasaValor);