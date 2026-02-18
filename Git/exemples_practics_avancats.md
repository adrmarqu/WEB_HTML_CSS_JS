# 🎓 Git i GitHub - EXEMPLES PRÀCTICS AVANÇATS

## Introducció

Aquest document conté exemples pràctics reals que pots seguir pas a pas per a dominar Git i GitHub.

---

## 📑 Taula de continguts

1. [Projecte 1: Web personal (Local)](#projecte-1-web-personal)
2. [Projecte 2: Bloc de notes (Remote personal)](#projecte-2-bloc-de-notes)
3. [Projecte 3: Colaboració en equip](#projecte-3-colaboració-en-equip)
4. [Projecte 4: Fork i Pull Request](#projecte-4-fork-i-pull-request)
5. [Projecte 5: Gestió de branques](#projecte-5-gestió-de-branques)

---

## 🎨 PROJECTE 1: Web personal (Local)

### Escenari

Vols crear un web personal amb la teva biografia, projectes i contacte. No ho vols publicar a internet encara, només mantenir-ho en Git localment.

### Pas a pas

#### 1. Setup inicial

```bash
# Crear carpeta
mkdir portfolio-personal
cd portfolio-personal

# Inicialitzar Git
git init

# Crear estructura
mkdir css js assets
touch index.html style.css script.js README.md .gitignore
```

#### 2. Crear .gitignore

```bash
cat > .gitignore << EOF
# Sistema
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/

# Dependències
node_modules/
package-lock.json

# Arxius temporals
*.tmp
*.bak
*.log

# Secrets
.env
.env.local
EOF
```

#### 3. Crear README.md

```bash
cat > README.md << EOF
# Portfolio Personal

Lloc web personal que mostra:
- Sobre mi
- Projectes
- Skills
- Contacte

## Estructura
- index.html: Pàgina principal
- css/: Estilos
- js/: Lògica JavaScript

## Com correr localment
1. Obrir index.html en el navegador
2. O usar: python -m http.server 8000
EOF
```

#### 4. Crear index.html

```bash
cat > index.html << EOF
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - El meu web</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Benvingut al meu portfolio</h1>
        <p>Desenvolupador web passionate</p>
    </header>
    
    <section>
        <h2>Sobre mi</h2>
        <p>Sóc un desenvolupador web amb experiència en HTML, CSS, JavaScript i Git.</p>
    </section>
    
    <section>
        <h2>Projectes</h2>
        <ul>
            <li>Web personal</li>
            <li>Aplicació de tasques</li>
            <li>Generador de passwords</li>
        </ul>
    </section>
    
    <footer>
        <p>&copy; 2025. Tots els drets reservats.</p>
    </footer>
    
    <script src="js/script.js"></script>
</body>
</html>
EOF
```

#### 5. Primer commit

```bash
git add .
git commit -m "Estructura inicial del portfolio"
```

#### 6. Veure el resultat

```bash
git log --oneline
# Output:
# a1b2c3d Estructura inicial del portfolio
```

### Desenvolupament continu

```bash
# Editar index.html i style.css per a afegir contingut

# Veure els canvis
git status
git diff

# Stagear els canvis
git add .

# Fer commit
git commit -m "Afegit secció 'Sobre mi' i estilos"

# Continuar per a cada nova secció
git commit -m "Afegida secció de projectes"
git commit -m "Afegit formulari de contacte"

# Veure l'historial complet
git log --oneline --all
```

### Bonus: Veure la web localment

```bash
# Opció 1: Obrir directament
open index.html  # macOS
start index.html # Windows

# Opció 2: Servidor local
python -m http.server 8000
# Accedir a http://localhost:8000
```

---

## 📝 PROJECTE 2: Bloc de notes (Remote personal)

### Escenari

Vols un bloc de notes personal que sincronitzi amb GitHub per a accedir des de qualsevol ordenador.

### Pas a pas

#### 1. Setup local

```bash
mkdir notes-app
cd notes-app
git init

# Crear estructura
mkdir public css js
touch index.html README.md .gitignore
```

#### 2. Crear fitxers

```bash
# .gitignore
cat > .gitignore << EOF
.DS_Store
node_modules/
.env
*.log
EOF

# README.md
cat > README.md << EOF
# Notes App

Aplicació web per a prendre notes i sincronitzar amb GitHub.

## Features
- Crear notes
- Editar notes
- Eliminar notes
- Guardar en local storage
- Sincronitzar amb GitHub

## Setup
1. Clone el repositori
2. Obrir index.html
3. Crear notes

## Dependències
Cap, és vanilla JavaScript!
EOF

# index.html
cat > index.html << EOF
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Notes App</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Les meves notes</h1>
        
        <div class="form">
            <input type="text" id="noteInput" placeholder="Escriu una nota...">
            <button id="addBtn">Afegir</button>
        </div>
        
        <ul id="notesList"></ul>
    </div>
    
    <script src="js/app.js"></script>
</body>
</html>
EOF
```

#### 3. Primer commit i push

```bash
git add .
git commit -m "Estructura inicial: Notes App"

# Crear repositori a GitHub
# https://github.com/new
# Nomena: "notes-app"

# Connectar amb remote
git remote add origin https://github.com/usuario/notes-app.git
git branch -M main
git push -u origin main
```

#### 4. Desenvolupament i commits regularment

```bash
# Afegir funcionalitat de afegir notes
echo "// Lògica de notes..." > js/app.js
git add .
git commit -m "Feature: Funcionalitat d'afegir notes"

# Afegir estilos
echo "/* Estilos */" > css/style.css
git add .
git commit -m "Style: Disseny CSS per a la app"

# Afegir funcionalitat d'eliminar
echo "// Funcionalitat d'eliminar..." >> js/app.js
git add .
git commit -m "Feature: Eliminar notes"

# Pujar tots els canvis
git push
```

#### 5. Veure en GitHub

```
1. Vai a https://github.com/usuario/notes-app
2. Veuràs els arxius i l'historial de commits
3. Pots veure cada canvi en "Commits"
```

---

## 👥 PROJECTE 3: Colaboració en equip

### Escenari

Estàs treballant amb 2 col·laboradors en un projecte web. Heu de trabajar en paral·lel sense conflictes.

### Rol: Administrador

```bash
# 1. Crear estructura inicial
mkdir app-web
cd app-web
git init

mkdir src views styles
touch index.html README.md .gitignore

# 2. Crear .gitignore
cat > .gitignore << EOF
node_modules/
.env
.DS_Store
*.log
EOF

# 3. Primer commit
git add .
git commit -m "Setup inicial del projecte"

# 4. Crear repositori a GitHub i pujar
git remote add origin https://github.com/admin/app-web.git
git branch -M main
git push -u origin main

# 5. A GitHub: Afegir col·laboradors
# Settings → Collaborators → Add people
```

### Rol: Col·laborador 1 (Desenvolupador Frontend)

```bash
# 1. Clonar repositori
git clone https://github.com/admin/app-web.git
cd app-web

# 2. Crear branca per a la tasca
git checkout -b feature/interficie-usuari

# 3. Crear components
mkdir -p src/components
cat > src/components/header.html << EOF
<header>
    <h1>App Web</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</header>
EOF

# 4. Commits progressius
git add .
git commit -m "Component: Header principal"

cat > src/components/footer.html << EOF
<footer>
    <p>&copy; 2024 App Web. Tots els drets reservats.</p>
</footer>
EOF

git add .
git commit -m "Component: Footer"

# 5. Pujar la branca
git push -u origin feature/interficie-usuari

# 6. A GitHub: Crear Pull Request
# 1. Vai a https://github.com/admin/app-web
# 2. Veuràs "Compare & pull request"
# 3. Clica i descriu els canvis
# 4. Demana review
# 5. Espera que l'administrador fusioni
```

### Rol: Col·laborador 2 (Desenvolupador Backend)

```bash
# 1. Clonar repositori
git clone https://github.com/admin/app-web.git
cd app-web

# 2. Crear branca per a la tasca
git checkout -b feature/api-rest

# 3. Crear arxius
mkdir -p api
cat > api/routes.js << EOF
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json([]);
});

module.exports = router;
EOF

# 4. Commits
git add .
git commit -m "API: Routes configurades"

cat > api/server.js << EOF
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor escoltant en port 3000');
});
EOF

git add .
git commit -m "API: Servidor Express configurat"

# 5. Pujar
git push -u origin feature/api-rest

# 6. Crear Pull Request a GitHub
```

### Rol: Administrador (Revisar i Fusionar)

```bash
# A GitHub:
# 1. Vai a Pull Requests
# 2. Revisa els canvis de cada col·laborador
# 3. Deixa comentaris si cal
# 4. Si tot és correcte, clica "Merge pull request"
# 5. Els canvis se fusionen a main

# Localment:
git checkout main
git pull origin main

# Veure els canvis fusionats
git log --oneline --graph --all
```

---

## 🍴 PROJECTE 4: Fork i Pull Request

### Escenari

Vols contribuir a un projecte open-source existent.

### Pas a pas

#### 1. Fork el repositori

```
1. Vai a https://github.com/usuari-original/projecte
2. Clica "Fork" (cantonada superior dreta)
3. Selecciona on vols fer el fork
4. Ja tens una còpia a https://github.com/el-teu-usuari/projecte
```

#### 2. Clonar la teva còpia

```bash
git clone https://github.com/el-teu-usuari/projecte.git
cd projecte

# Afegir l'original com a "upstream"
git remote add upstream https://github.com/usuari-original/projecte.git

# Verificar
git remote -v
# Hauria de mostrar:
# origin     https://github.com/el-teu-usuari/projecte.git
# upstream   https://github.com/usuari-original/projecte.git
```

#### 3. Actualitzar amb els últims canvis de l'original

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

#### 4. Crear branca per a la contribució

```bash
git checkout -b bugfix/arreglar-error-login

# Fer els canvis
# ...

# Commits
git add .
git commit -m "Fix: Arreglar error de validació en login"
git commit -m "Fix: Arreglar timeout en autenticació"

# Pujar a la teva còpia
git push origin bugfix/arreglar-error-login
```

#### 5. Crear Pull Request

```
1. Vai a https://github.com/el-teu-usuari/projecte
2. Veuràs "Compare & pull request"
3. Clica
4. Assegura't que:
   - Base repository: usuari-original/projecte
   - Base branch: main
   - Head repository: el-teu-usuari/projecte
   - Compare branch: bugfix/arreglar-error-login
5. Escriu descripció del canvi
6. Clica "Create pull request"
7. Espera al review i fusió
```

#### 6. Mantenir-se sincronitzat

```bash
# Si mentre esperaves, el repositori original ha canviat:
git fetch upstream
git checkout bugfix/arreglar-error-login
git merge upstream/main

# Si hi ha conflictes, resoldre'ls:
# (editar l'arxiu, stagear, commit)

git push origin bugfix/arreglar-error-login
```

#### 7. Después de la fusió

```bash
# L'administrador fusiona el teu PR
# Limpiar localment:
git checkout main
git pull origin main
git branch -d bugfix/arreglar-error-login
git push origin --delete bugfix/arreglar-error-login
```

---

## 🌳 PROJECTE 5: Gestió de branques

### Escenari

Vols aprendre a gestionar múltiples branques en paral·lel.

### Estructura de branques

```
main (producció)
├── feature/nova-funcionalitat-1
├── feature/nova-funcionalitat-2
├── bugfix/arreglar-bug-1
├── release/v1.0.0
└── develop (branca de desenvolupament)
    ├── feature/nova-funcionalitat-3
    └── bugfix/arreglar-bug-2
```

### Pas a pas

#### 1. Crear estructura inicial

```bash
git init
git add .
git commit -m "Commit inicial"

# Crear branca de desenvolupament
git checkout -b develop
git push -u origin develop

# Tornar a main
git checkout main
```

#### 2. Treballar en feature/nova-funcionalitat-1

```bash
# Des de main
git checkout -b feature/nova-funcionalitat-1

# Fer canvis
echo "// Nova funcionalitat 1" > src/feature1.js
git add .
git commit -m "Feature 1: Funcionalitat nova"

# Pujar
git push -u origin feature/nova-funcionalitat-1

# Crear PR per a fusionar amb develop
# (a GitHub, seleccionar develop com a base branch)
```

#### 3. Treballar en bugfix/arreglar-bug-1

```bash
# Des de main
git checkout main

# Crear branca de bugfix
git checkout -b bugfix/arreglar-bug-1

# Arreglar el bug
echo "// Bug arreglat" > src/bug-fix.js
git add .
git commit -m "Fix: Arreglar bug crítico en main"

# Pujar
git push -u origin bugfix/arreglar-bug-1

# Crear PR per a main
# (per a deployar hotfix urgentment)
```

#### 4. Sincronitzar branques

```bash
# Si main va per davant, sincronitzar develop
git checkout develop
git merge origin/main

# Si alguna branca de feature va per enrere:
git checkout feature/nova-funcionalitat-1
git merge origin/develop
git push
```

#### 5. Preparar release

```bash
# Crear branca de release
git checkout -b release/v1.0.0

# Fer ajustos finals de versió
echo "Version 1.0.0" > VERSION.txt
git add .
git commit -m "Release: Versió 1.0.0"

# Pujar i crear PR
git push -u origin release/v1.0.0

# Una vegada testejat i aprovat:
# Fusionar amb main i develop
```

#### 6. Veure totes les branques

```bash
# Locals
git branch

# Remotes
git branch -r

# Locals i remotes
git branch -a

# Amb més info
git branch -v

# Amb gràfica de branques
git log --oneline --graph --all --decorate
```

#### 7. Eliminar branques

```bash
# Quan ja no necessites una branca

# Local
git branch -d feature/nova-funcionalitat-1

# Remote
git push origin --delete feature/nova-funcionalitat-1

# O força si no està completament fusionada:
git branch -D feature/nova-funcionalitat-1
```

---

## 🎯 Resumen de comandes per projecte

### Projecte 1 (Local)
```bash
git init
git add .
git commit -m "message"
git log --oneline
```

### Projecte 2 (Remote personal)
```bash
git init
git remote add origin URL
git push -u origin main
git push
git pull
```

### Projecte 3 (Equipo)
```bash
git clone URL
git checkout -b feature/name
git push -u origin feature/name
# Crear PR a GitHub
```

### Projecte 4 (Fork)
```bash
git clone https://github.com/TU-USUARIO/projecte.git
git remote add upstream URL-ORIGINAL
git fetch upstream
git merge upstream/main
git checkout -b bugfix/name
git push origin bugfix/name
# Crear PR a GitHub
```

### Projecte 5 (Branques)
```bash
git checkout -b feature/name
git checkout main
git merge feature/name
git branch -d feature/name
git push origin --delete feature/name
```

---

## 📚 Recursos

- [Documentació Git](https://git-scm.com/doc)
- [GitHub Guides](https://docs.github.com/)
- [Interactive Learning](https://learngitbranching.js.org/)

---

**Bona sort amb els teus projectes!** 🚀
