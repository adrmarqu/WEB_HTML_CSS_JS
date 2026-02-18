
# Accesibilidad en la Web

**Diseñar para todas las personas**

---

## Conceptos básicos de accesibilidad en HTML

Es importante que diseñemos nuestro HTML teniendo en cuenta la accesibilidad.

Tener HTML accesible significa que las personas con discapacidad pueden utilizar la Web. Hay usuarios totalmente ciegos o con discapacidad visual, personas con problemas de pérdida auditiva y una multitud de otras discapacidades diferentes.

Desafortunadamente, a este tema no se le da la importancia que necesita y no parece tan interesante como otros.

¿Qué pasa si una persona no puede *ver* su página, pero todavía quiere consumir su contenido?
No pueden usar el mouse, usan un **lector de pantalla**.

Puedes probar uno aquí:
[Text to Speech Reader](https://addons.mozilla.org/en-US/firefox/addon/simple-tts-texttospeech-reader/)

La accesibilidad también debe permitir que las herramientas seleccionen elementos fácilmente o naveguen por las páginas.

La accesibilidad web garantiza que **todas las personas** puedan usar la Web, independientemente de sus capacidades físicas, sensoriales o cognitivas.

Esto incluye:

* Personas con discapacidad visual, auditiva, motora o cognitiva
* Personas mayores
* Usuarios en contextos limitados (móvil, mala conexión, luz solar)

> ⚠️ **Accesibilidad no es solo discapacidad:** mejora la experiencia para todo el mundo.

Los lectores de pantalla, la navegación por teclado y los dispositivos de apoyo dependen directamente de un HTML bien estructurado.

Actualmente:

* Los sitios web públicos **deben ser accesibles**
* Empresas que facturan más de **1.000.000 €** deben cumplir accesibilidad

> Nota: también es imprescindible cuidar CSS (colores, contraste, tipografías)
> [Cómo hacer SVG accesibles](https://css-tricks.com/accessible-svgs/)

---

## Utiliza correctamente HTML y sus atributos

Desarrollar HTML5 válido con doctype correcto es una de las principales ayudas para personas con discapacidad y buscadores.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabla básica de conceptos</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/javascript.js"></script>
</head>
<body>
</body>
</html>
```

✔ Usa `lang`
✔ Usa `meta viewport`
✔ Usa títulos descriptivos
✔ Organiza recursos por carpetas

---

## Utiliza HTML semántico

HTML semántico mejora la navegación y comprensión para lectores de pantalla y buscadores.

Elementos clave:

`<header> <nav> <main> <article> <section> <aside> <footer>`

```html
<header>
  <h1>Título principal</h1>
  <img src="/images/logo.png" alt="SpaceBear Inc.">
</header>

<nav aria-label="Navegación principal"></nav>

<main>
  <article>
    <h2>Artículo</h2>
    <p>Contenido principal</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 SpaceBears Inc.</p>
</footer>
```

❌ Evita `<div>` y `<span>` cuando exista una etiqueta semántica adecuada.

> [Estructuras semánticas según WCAG](https://www.w3.org/WAI/tutorials/page-structure/)

---

## Encabezados correctos

Debe existir **un solo `<h1>` por documento**.

```html
<h1>...</h1>
  <h2>...</h2>
    <h3>...</h3>
  <h2>...</h2>
```

Usa:

* `<strong>` en lugar de `<b>`
* `<em>` en lugar de `<i>`

---

## Tablas accesibles

Las tablas deben incluir `<caption>`, `<thead>`, `<tbody>` y `<th scope>`.

```html
<table>
  <caption>Tabla de calificaciones</caption>
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Asignatura</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Juan Pérez</th>
      <td>Lengua</td>
      <td>8.5</td>
    </tr>
  </tbody>
</table>
```

> [Tablas accesibles WCAG](https://www.w3.org/WAI/tutorials/tables/)

---

## Imágenes accesibles

```html
<img src="perro.jpg" alt="Perro jugando en el parque">
```

Imágenes decorativas:

```html
<img src="decoracion.svg" alt="" aria-hidden="true">
```

✔ Usa `alt` siempre
✔ Usa `alt=""` para imágenes decorativas
✔ `title` es usabilidad, no accesibilidad

---

## Formularios accesibles

```html
<form>
  <label for="email">Correo electrónico</label>
  <input type="email" id="email" required>
  <button type="submit">Enviar</button>
</form>
```

❌ Nunca uses `placeholder` como sustituto de `label`.

---

## Navegación por teclado

Todo elemento interactivo debe ser accesible con teclado.

* Tab → avanzar
* Shift + Tab → retroceder
* Enter / Space → activar

```html
<div tabindex="0">Elemento accesible</div>
```

> ⚠️ No abuses de `tabindex`.

---

## Uso responsable de ARIA

ARIA **solo cuando HTML no sea suficiente**.

```html
<button aria-label="Cerrar ventana">✖</button>
```

> ❌ No ARIA si HTML ya hace el trabajo.

### Atributos ARIA comunes

* `aria-label`
* `aria-labelledby`
* `aria-describedby`
* `aria-hidden`

---

## Contenido multimedia accesible

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitulos.vtt" srclang="es">
</video>
```

✔ Subtítulos
✔ Transcripciones

---

## Recursos recomendados

* [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
* [WebAIM](https://webaim.org/)
* [MDN Accesibilidad](https://developer.mozilla.org/es/docs/Web/Accessibility)

---

## Extensiones para evaluar accesibilidad

### WAVE

* Detecta errores WCAG
* Marca problemas visualmente
  🔗 [https://wave.webaim.org/extension/](https://wave.webaim.org/extension/)

### Lighthouse

* Puntuación 0–100
* Integrado en Chrome DevTools

### axe DevTools

* Alta precisión profesional
  🔗 [https://www.deque.com/axe/devtools/](https://www.deque.com/axe/devtools/)

### Accessibility Insights

* Auditoría guiada paso a paso
  🔗 [https://accessibilityinsights.io/](https://accessibilityinsights.io/)

### HeadingsMap

* Visualiza jerarquía de encabezados
  🔗 Chrome Web Store

> ⚠️ Ninguna herramienta sustituye pruebas manuales con teclado y lectores de pantalla.

---

© 2026 — Accesibilidad Web · Òscar Eroles


