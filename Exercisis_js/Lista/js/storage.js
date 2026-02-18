/* Eliminar enunciado */
const header = document.querySelector("#quitar button");
const eraseEnum = () => document.querySelector("#quitar").remove();
header.addEventListener("click", eraseEnum);

/* Ejercicio */
const output = document.querySelector("#out-msg");
const listaContactos = document.querySelector("#contactos");

const form = document.listaContactos;
const guardar = form.guardar;
const recuperar = form.recuperar;
const eliminar = form.eliminar;
const borrarTodo = form.borrarTodo;

let edicion = false;
let editedUser = "";

const cleanMsg = () => output.innerHTML = "";
const cleanForm = () =>
{
    form.nombre.value = "";
    form.telefono.value = "";
    cleanMsg();
};

const setMsg = (msg, error) =>
{
    const subj = error ? "": "Error: ";

    cleanMsg();

    const div = document.createElement("div");
    div.classList.add("d-flex");
    div.classList.add("justify-content-between");
    div.classList.add("align-items-center");
    div.classList.add("rounded");
    div.classList.add("bg-opacity-50");
    div.classList.add("py-2");
    div.classList.add("px-2");
    div.style.width = "92%";
    div.classList.add("m-auto");
    if (!error)
        div.classList.add("bg-success");
    else
        div.classList.add("bg-danger");

    const p = document.createElement("p");
    p.textContent = msg;
    p.classList.add("mx-4");
    p.classList.add("my-2");

    const but = document.createElement("button");
    but.textContent = "X";
    but.classList.add("btn");
    but.classList.add("border-0");
    p.classList.add("mx-4");
    p.classList.add("my-2");
    but.style.width = "30px";
    but.style.height = "30px";
    but.addEventListener("click", cleanMsg);

    div.appendChild(p);
    div.appendChild(but);
    output.appendChild(div);
};

const createContactList = () =>
{
    const lista = document.createElement("ul");
    lista.classList.add("list-unstyled");
    lista.classList.add("p-2");

    listaContactos.appendChild(lista);
};

const updateContacts = () =>
{
    const sortKeys = (keys) =>
    {
        for (let i = 0; i < keys.length - 1; i++)
        {
            let a = keys[i].toLowerCase();
            let b = keys[i + 1].toLowerCase();

            a = a.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            b = b.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (a > b)
            {
                [keys[i], keys[i + 1]] = [keys[i + 1], keys[i]];
                i = 0;
            }
        }
    };

    const lista = listaContactos.children[0];
    lista.innerHTML = "";

    if (localStorage.length === 0)
    {
        const msg = document.createElement("p");
        msg.textContent = "Sin contactos en la agenda";

        lista.appendChild(msg);
        return ;
    }

    const keys = Object.keys(localStorage);
    sortKeys(keys);
    
    keys.forEach(key =>
    {
        const bloque = document.createElement("li");
        bloque.classList.add("d-flex");
        bloque.classList.add("justify-content-between");
        bloque.classList.add("align-items-center");
        bloque.classList.add("border");
        bloque.classList.add("rounded");
        bloque.classList.add("p-2");
        bloque.classList.add("pt-4");

        const n = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = key;
        
        const t = document.createElement("p");
        t.textContent = localStorage.getItem(key);
        t.classList.add("bg-info");
        t.classList.add("text-white");
        t.classList.add("px-2");
        t.classList.add("py-2");
        t.classList.add("rounded");

        n.appendChild(strong);
        bloque.appendChild(n);
        bloque.appendChild(t);
        lista.appendChild(bloque);
    });
};

const saveFunction = () =>
{
    const contact =
    { 
        name: form.nombre.value.trim(),
        tel: form.telefono.value.trim(),
    };

    const checkEmpt = (name, tel) => 
    {
        if (name === "" && tel !== "")
            return setMsg("El nombre está vacio", 1), false;
        else if (name !== "" && tel === "")
            return setMsg("El telefono esta vacio", 1), false;
        else if (name === "" && tel === "")
            return setMsg("El nombre y el telefono estan vacios", 1), false;
        return true;
    };

    const checkTel = (tel) =>
    {
        const check = /^\d+$/;

        if (tel.length != 9)
            return setMsg("El telefono no tiene 9 digitos", 1), false;
        if (!check.test(tel))
            return setMsg("El telefono solo puede tener digitos", 1), false;
        return true;
    };

    const checkName = (name) =>
    {
        if (localStorage.getItem(name) !== null)
        {
            setMsg(`El usuario [${name}] ya existe.`, 1);
            return false;
        }
        return true;
    };

    if (!checkEmpt(contact.name, contact.tel))
        return ;

    if (!checkTel(contact.tel))
        return ;

    if (edicion)
    {
        localStorage.removeItem(editedUser);
        setMsg(`El usuario [${contact.name}] ha sido actualizado`, 0);
        edicion = false;
    }
    else
    {
        if (!checkName(contact.name))
            return ;
        setMsg(`El usuario [${contact.name}] ha sido creado`, 0);
    }

    localStorage.setItem(contact.name, contact.tel);
    updateContacts();
};

const recuperateFunction = () =>
{
    const user = form.nombre.value.trim();
    const valor = localStorage.getItem(user);
    if (valor === null)
    {
        setMsg(`El usuario ${user} no existe`, 1);
        return ;
    }
    form.telefono.value = valor;

    setMsg("Ahora estas en modo edición!", 0);
    edicion = true;
    editedUser = user;
};

const deleteFunction = () =>
{
    if (edicion)
    {
        cleanForm();
        setMsg("Formulario limpiado, salido del modo edición", 0);
        edicion = false;
    }
    else
    {
        const user = form.nombre.value.trim();
        const valor = localStorage.getItem(user);
        if (valor === null)
        {
            setMsg(`El usuario ${user} no existe`, 1);
            return ;
        }
        setMsg(`Usuario ${user} eliminado`, 0);
        localStorage.removeItem(user);
    }
    updateContacts();
};

const deleteAllFunction = () =>
{
    if (!window.confirm("Estas seguro de que quieres borrarlo todo?"))
        return ;

    for (let i = localStorage.length - 1; i >= 0; i--)
    {
        const key = localStorage.key(i);
        localStorage.removeItem(key);
    }
    cleanForm();
    setMsg("Todos los contactos eliminados :(", 0);
    updateContacts();
};

createContactList();
updateContacts();

guardar.addEventListener("click", saveFunction);
recuperar.addEventListener("click", recuperateFunction);
eliminar.addEventListener("click", deleteFunction);
borrarTodo.addEventListener("click", deleteAllFunction);