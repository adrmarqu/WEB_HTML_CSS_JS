# GIT i GITHUB - TUTORIAL COMPLET PER A MAC I WINDOWS

## 📑 Taula de continguts

1. [Introducció](#introducció)
2. [Instal·lació](#instal·lació)
   - [Windows](#windows)
   - [macOS](#macos)
3. [Configuració inicial](#configuració-inicial)
4. [Estructura de Git](#estructura-de-git)
5. [Primeres passes: Repositori local](#primeres-passes-repositori-local)
6. [Treball amb repositoris remots (GitHub)](#treball-amb-repositoris-remots)
7. [Git des de la terminal integrada de VSCode](#git-des-de-la-terminal-integrada-de-vscode)
8. [Git des de la interfície gràfica de VSCode](#git-des-de-la-interfície-gràfica-de-vscode)
9. [Branques i fusió](#branques-i-fusió)
10. [Repositoris compartits i col·laboració](#repositoris-compartits-i-col·laboració)
11. [Casos pràctics](#casos-pràctics)
12. [Solució de problemes](#solució-de-problemes)

---

## Introducció

**Git** és un sistema de control de versions distribuït i descentralitzat que permet a desenvolupadors treballar sobre el mateix codi de forma simultània i organitzada.

**GitHub** és una plataforma web que allotja repositoris Git remotos, permitint col·laboració en línia.

### Diferència entre Git i GitHub

```
┌──────────────────────┐              ┌──────────────────────┐
│  GIT                 │              │  GITHUB              │
├──────────────────────┤              ├──────────────────────┤
│ Eina local           │              │ Plataforma web       │
│ Control de versions  │              │ Allotjament de repos │
│ Funciona sense net   │              │ Col·laboració        │
│ Línea de comandes    │──────────────│ Interfície gràfica   │
│ Gratis               │              │ Repositoris privats  │
└──────────────────────┘              └──────────────────────┘
```

### Avantatges de fer servir Git

- ✅ Control complet de l'historial de canvis
- ✅ Treball simultani sense conflictes
- ✅ Recuperació de versions anteriors
- ✅ Col·laboració en equip
- ✅ Integració amb plataformes web (GitHub, GitLab, etc.)
- ✅ Estàndard de la indústria

---

## Instal·lació

### Windows

#### Opció 1: Descarrega i instal·lació estàndard

1. **Descarrega Git per a Windows**:
   - Accedeix a https://git-scm.com/downloads
   - Clica a "Windows"
   - Descarrega el fitxer `Git-X.XX.X-64-bit.exe`

2. **Executa l'instal·lador**:
   - Doble clic al fitxer baixat
   - Segueix els passos de la instal·lació
   - **Opcions recomanades**:
     - Use Git from the command line and also from 3rd-party software
     - Checkout Windows-style, commit Unix-style line endings
     - Use Windows' default console window

3. **Verifica la instal·lació**:
   - Obri la terminal (`PowerShell` o `Command Prompt`)
   - Executar:
     ```bash
     git --version
     ```
   - Ha de mostrar: `git version 2.x.x.windows.x`

#### Opció 2: Instal·lació amb Chocolatey (recomanat per desenvolupadors)

```powershell
# Obrir PowerShell com a Administrator
choco install git
```

#### Opció 3: Instal·lació amb Windows Package Manager

```powershell
winget install Git.Git
```

#### Configurar Git en VSCode (Windows)

Si VSCode no reconeix Git automàticament:

1. Obri VSCode
2. Prem `Ctrl+Shift+P` per obrir la paleta de comandes
3. Escriu: `Preferences: Open Settings (JSON)`
4. Afegeix la següent línia:
   ```json
   "git.path": "C:\\Program Files\\Git\\bin\\git.exe"
   ```
5. Guarda i reinicia VSCode

---

### macOS

#### Opció 1: Homebrew (recomanat)

```bash
# Instal·la Homebrew si no el tens
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instal·la Git
brew install git

# Verifica la instal·lació
git --version
```

#### Opció 2: Xcode Command Line Tools

```bash
# Instal·la les eines de línia de comandes d'Xcode
xcode-select --install

# Verifica la instal·lació
git --version
```

#### Opció 3: Descarrega i instal·lació estàndard

1. Accedeix a https://git-scm.com/downloads
2. Clica a "macOS"
3. Descarrega el fitxer per a la teva versió de macOS
4. Executa l'instal·lador

#### Configurar Git en VSCode (macOS)

Si tens múltiples versions de Git instal·lades (ex: Homebrew vs. Xcode):

1. Obri VSCode
2. Prem `Cmd+Shift+P` per obrir la paleta de comandes
3. Escriu: `Preferences: Open Settings (JSON)`
4. Afegeix una de les següents línies segons on tenguis Git:
   ```json
   // Per a Homebrew (Intel)
   "git.path": "/usr/local/bin/git"
   
   // Per a Homebrew (Apple Silicon - M1/M2/M3)
   "git.path": "/opt/homebrew/bin/git"
   
   // Per a Xcode Command Line Tools
   "git.path": "/usr/bin/git"
   ```
5. Guarda i reinicia VSCode

---

## Configuració inicial

### Configuració global (primera vegada)

La configuració global s'aplica a tots els projectes del teu ordinador.

#### Desde la terminal integrada de VSCode

1. **Obri VSCode**
2. **Accedeix al terminal integrat**: `Ctrl+` (o `Cmd+` per a Mac)
3. **Executa els comandos de configuració**:

```bash
# Establir el nom de l'usuari
git config --global user.name "El teu nom"

# Establir el correu
git config --global user.email "email@exemple.com"

# Establir VSCode com a editor predeterminat
git config --global core.editor "code --wait"

# Establir 'main' com a branca predeterminada
git config --global init.defaultBranch main

# Habilitar els colors en la terminal
git config --global color.ui true

# Configurar salts de línia
# Per a Windows
git config --global core.autocrlf true

# Per a macOS/Linux
git config --global core.autocrlf input

# Verificar la configuració
git config --list
```

### Configuració per projecte (opcional)

Si vols una configuració diferent per a un projecte específic:

```bash
# Es dins la carpeta del projecte
cd carpeta-projecte

# Configurar sense el flag --global
git config user.name "Nom per a aquest projecte"
git config user.email "email@exemple.com"

# Verificar configuració local
git config --list --local
```

### Interfície gràfica de VSCode per a configuració

1. Prem `Cmd/Ctrl+,` per obrir Configuració
2. Busca "Git"
3. Configura les opcions que vulguis:
   - **Git: Auto Fetch**: Carregar canvis automàticament
   - **Git: Confirm Sync**: Demanar confirmació abans de sincronitzar
   - **Git: Ignore Limit Warning**: Ignorar avís de mida del repositori
   - **Git: Path**: Ruta personalitzada a l'executable de Git

---

## Estructura de Git

### Els 4 estats de Git

```
┌──────────────────────────────────────────────────────────────────┐
│                      FLUX DE GIT                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. WORKING DIRECTORY          2. STAGING AREA                   │
│  (Carpeta local)               (Arxius a publicar)               │
│                                                                   │
│     Arxius editados      ──git add──>    Arxius preparats       │
│                                                                   │
│                          3. LOCAL REPO (HEAD)                    │
│                          (Historial local)                       │
│                                                                   │
│                ──git commit──>    Canvis registrats              │
│                                                                   │
│                          4. REMOTE REPO                          │
│                          (GitHub, GitLab, etc.)                  │
│                                                                   │
│                ──git push──>      Sincronitzat amb servidor      │
│                                                                   │
│                ──git pull──>      Actualitzat des del servidor   │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

#### Explicació dels estats

| Estat | Ubicació | Descripció |
|-------|----------|-----------|
| **Modified** | Working Directory | Arxius que has editat però no has preparat |
| **Staged** | Staging Area | Arxius llestos per a ser commitejats |
| **Committed** | Local Repository | Canvis guardats en l'historial local |
| **Remote** | Remote Repository | Canvis sincronitzats amb el servidor |

---

## Primeres passes: Repositori local

### Escenari 1: Crear un projecte nova des de zero

#### Amb terminal

```bash
# 1. Crear la carpeta del projecte
mkdir meu_projecte
cd meu_projecte

# 2. Crear fitxers inicials (opcional)
touch README.md
touch .gitignore
touch index.html
touch style.css

# 3. Inicialitzar Git
git init

# 4. Afegir els fitxers al staging area
git add .

# 5. Fer el primer commit
git commit -m "Commit inicial"

# 6. Obrir amb VSCode
code .
```

#### Amb la interfície gràfica de VSCode

1. **Crear la carpeta**:
   - Obri VSCode
   - `File → Open Folder`
   - Clica "Nueva carpeta" i nomena-la `meu_projecte`
   - Selecciona-la i clica "Open"

2. **Inicialitzar Git**:
   - Obri el terminal integrat: `Ctrl+` o `Cmd+`
   - Executa: `git init`

3. **Crear fitxers inicials**:
   - A l'explorer de l'esquerra, clica l'icon de "Nou fitxer"
   - Crea `README.md`, `.gitignore`, `index.html`, `style.css`

4. **Fer el primer commit**:
   - Clica l'icon de "Source Control" (branques, a l'esquerra)
   - Veuràs els fitxers sense staged (U = Untracked)
   - Clica l'icon `+` per a afegir tots els fitxers
   - Escriu el missatge: "Commit inicial"
   - Prem `Ctrl/Cmd+Enter` o clica el checkmark per a fer commit

---

### Escenari 2: Clonar un repositori existent

#### Amb terminal

```bash
# Clonar un repositori
git clone https://github.com/usuario/repositori.git

# Entrar a la carpeta clonada
cd repositori

# Obrir amb VSCode
code .
```

#### Amb la interfície gràfica de VSCode

1. Obri la paleta de comandes: `Ctrl+Shift+P` (Windows/Linux) o `Cmd+Shift+P` (Mac)
2. Escriu: `Git: Clone`
3. Enganxa l'URL del repositori
4. Selecciona una carpeta de destí
5. VSCode clona automàticament el repositori

---

## Treball amb repositoris remots (GitHub)

### Crear un repositori remote en GitHub

1. **Accedir a GitHub**:
   - Vai a https://github.com/login
   - Inicia sessió o crea un compte

2. **Crear repositori nou**:
   - Clica el `+` a la cantonada superior dreta
   - Selecciona "New repository"
   - Completa el formulari:
     - **Repository name**: `meu-projecte`
     - **Description**: Descripció opcional
     - **Public/Private**: Selecciona segons tingueu
     - **Initialize with README**: No (ja tens un local)
     - Clica "Create repository"

3. **Obtenir l'URL del repositori**:
   - A la pàgina del repositori, clica el botó verde `<> Code`
   - Copia l'URL HTTPS (o SSH si tens claus configurades)

### Vincular repositori local amb remote

#### Amb terminal

```bash
# Entrar a la carpeta del projecte
cd meu_projecte

# Afegir l'origen remote
git remote add origin https://github.com/usuario/meu-projecte.git

# Rebatiar la branca a 'main' (si caldrà)
git branch -M main

# Fer el primer push
git push -u origin main

# Verificar els remots configurats
git remote -v
```

#### Amb la interfície gràfica de VSCode

1. **Obrir la paleta de comandes**: `Ctrl+Shift+P` o `Cmd+Shift+P`
2. Escriu: `Git: Add Remote`
3. Dona un nom (per defecte "origin")
4. Enganxa l'URL del repositori remote
5. Clica el botó "Publish Branch" a la barra inferior o:
   - Obri "Source Control"
   - Clica els tres punts (`...`)
   - Selecciona "Push"

---

## Git des de la terminal integrada de VSCode

### Comandes essencials

#### Ver l'estat del repositori

```bash
# Veure l'estat actual
git status

# Veure l'estat en format curt
git status -s

# Output esperada:
#  M arxiu_modificat.txt
#  A arxiu_nou.txt
#  D arxiu_eliminat.txt
#  ?? arxiu_no_trigat.txt
```

#### Afegir canvis al staging area

```bash
# Afegir un fitxer específic
git add arxiu.txt

# Afegir múltiples fitxers
git add arxiu1.txt arxiu2.txt

# Afegir tots els canvis
git add .

# Afegir de forma interactiva (seleccionar canvis)
git add -p
```

#### Fer commits

```bash
# Commit simple
git commit -m "Descripció del canvi"

# Commit amb descripció més llarga
git commit -m "Títol del commit" -m "Descripció detallada del que has canviat i per què"

# Afegir canvis a l'últim commit sense canviar el missatge
git commit --amend --no-edit

# Afegir canvis a l'últim commit editant el missatge
git commit --amend -m "Missatge nou"
```

#### Sincronitzar amb remote

```bash
# Enviar canvis al repositori remote
git push

# Enviar branca específica
git push origin nom_branca

# Descarregar canvis del remote
git pull

# Descarregar sense fusionar automàticament
git fetch
```

#### Veure l'historial

```bash
# Veure els commits en format llarg
git log

# Veure els commits en una línia
git log --oneline

# Veure els últims 5 commits
git log -5

# Veure els commits amb gràfica de branques
git log --oneline --graph --all

# Veure els commits d'un arxiu específic
git log -- arxiu.txt

# Veure els commits amb les seves diferències
git log -p
```

#### Veure diferències

```bash
# Diferencies entre working directory i staging area
git diff

# Diferencies entre staging area i l'últim commit
git diff --cached

# Diferencies entre dues branques
git diff branca1 branca2

# Diferencies entre dos commits
git diff commit1 commit2
```

#### Desfer canvis

```bash
# Desfer canvis en un arxiu (revertir al últim commit)
git checkout -- arxiu.txt

# Treure un arxiu del staging area
git reset arxiu.txt

# Desfer l'últim commit (mantenir els canvis)
git reset --soft HEAD~1

# Desfer l'últim commit (descartar staging)
git reset --mixed HEAD~1

# Desfer l'últim commit (descartar tot)
git reset --hard HEAD~1

# Crear un commit que desfà un commit anterior
git revert commit_id
```

---

## Git des de la interfície gràfica de VSCode

### Activar la vista de Source Control

1. **Clica l'icon de "Source Control"** a la barra lateral esquerra (paràc a tres branques interconnectades)
2. O usa la drecera: `Ctrl+Shift+G` (Windows/Linux) o `Cmd+Shift+G` (Mac)

### Interfície gràfica de Source Control

```
┌─────────────────────────────────────────────────────┐
│ SOURCE CONTROL: Git                                  │
├─────────────────────────────────────────────────────┤
│                                                      │
│  [Desplegable: main]  [Sincronitzar] [Més opcions]  │
│                                                      │
│  CHANGES                                             │
│  ├─ M index.html          [+]                       │
│  ├─ A style.css           [+]                       │
│  └─ D script.js           [+]                       │
│                                                      │
│  ┌─────────────────────────────────────────────────┐
│  │ Commit inicial                          [✓]     │
│  │ (escriu aquí el missatge)               [⤓]     │
│  └─────────────────────────────────────────────────┘
│                                                      │
│  BRANCHES (si cliques al desplegable)               │
│  ├─ main                                            │
│  ├─ feature/login                                   │
│  └─ bugfix/navbar                                   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Accions bàsiques amb GUI

#### Staged canvis

```
1. A la secció "CHANGES", veuràs els arxius modificats
2. Clica l'icon "+" al costat de cada arxiu per a fer stage
3. O clica el "+" a la capçalera "CHANGES" per a stagear-los tots
```

#### Unstage canvis

```
1. Els arxius ja staged apareixeran a la secció anterior
2. Clica el "-" per a treure'ls del staging
3. O clica el "-" a la capçalera "STAGED CHANGES"
```

#### Fer commit

```
1. Escriu el missatge de commit al quadre de text "Message"
2. Prem Ctrl+Enter (Windows/Linux) o Cmd+Enter (Mac)
3. O clica el checkmark
```

#### Canviar de branca

```
1. Clica el nom de la branca a la barra de status (inferior)
2. O clica el desplegable a la vista Source Control
3. Selecciona la branca a la qual vols canviar
4. Si és una branca remote que no tens local, es crearà automàticament
```

#### Crear nova branca

```
1. A la vista Source Control, clica els tres punts (...) 
2. Selecciona "Branch" → "Create Branch"
3. Dona un nom a la nova branca (ex: "feature/nova-funcionalitat")
4. Selecciona la branca de base (normalment "main")
```

#### Syncronitzar (Push/Pull)

```
1. Usa el botó de sincronització a la barra de status (baix a la dreta)
   Mostra: ↓ X ↑ Y  (X descàrregues, Y pujades pendents)
2. O clica els tres punts (...) i selecciona "Push" o "Pull"
```

#### Veure historial

```
1. Obri "Source Control"
2. Clica els tres punts (...)
3. Selecciona "Show in Source Control Graph" o "View Git Graph"
4. Veuràs una representació visual de l'historial i les branques
```

#### Veure diferències

```
1. A la secció "CHANGES", clica en un arxiu
2. VSCode obrirà una vista de diferències (diff)
3. A l'esquerra veuràs l'arxiu antic, a la dreta el nou
4. Els canvis estan ressaltats en colors:
   - Verd: afegit
   - Vermell: eliminat
   - Groc: modificat
```

---

## Branques i fusió

### Branques

#### Crear branques

```bash
# TERMINAL
git branch nom-branca

# Crear i canviar a la nova branca en un sol comando
git checkout -b nom-branca

# Crear una branca basada en una branca remota
git checkout --track origin/nom-branca
```

**GUI de VSCode**:
1. Clica a "Source Control"
2. Clica els tres punts (...)
3. "Branch" → "Create Branch"
4. Dona nom i selecciona la branca base

#### Canviar de branca

```bash
# TERMINAL
git checkout nom-branca

# Versió més nova (Git 2.23+)
git switch nom-branca
```

**GUI de VSCode**:
1. Clica el nom de la branca a la barra inferior
2. Selecciona la branca de la llista

#### Llistar branques

```bash
# TERMINAL - branques locals
git branch

# Totes les branques (locals + remotes)
git branch -a

# Branques remotes
git branch -r

# Format més informatiu
git branch -v
```

#### Renombrar branca

```bash
# TERMINAL
# Renombrar la branca actual
git branch -m nom-nou

# Renombrar altra branca
git branch -m nom-vell nom-nou
```

#### Eliminar branca

```bash
# TERMINAL
# Eliminar branca local (segur)
git branch -d nom-branca

# Eliminar branca local (forçat)
git branch -D nom-branca

# Eliminar branca remota
git push origin --delete nom-branca
```

### Fusió de branques (Merge)

#### Cas 1: Fast-Forward Merge (fusió automàtica)

Succeeix quan la branca secundària no té commits que la branca principal no tingui.

```bash
# TERMINAL
# 1. Canviar a la branca principal
git checkout main

# 2. Fusionar la branca secundària
git merge feature/nova-funcionalitat

# 3. Eliminar la branca secundària (opcional)
git branch -d feature/nova-funcionalitat

# 4. Pujar els canvis
git push
```

**GUI de VSCode**:
1. Clica la branca principal (main) a la barra inferior per canviar-hi
2. Clica els tres punts (...)
3. "Branch" → "Merge Branch"
4. Selecciona la branca a fusionar

#### Cas 2: Merge Commit (fusió amb conflictes)

Succeeix quan hi ha conflictes entre les branques.

```bash
# TERMINAL
# 1. Canviar a main
git checkout main

# 2. Actualitzar main si cal
git pull origin main

# 3. Fusionar
git merge feature/nova-funcionalitat

# Si hi ha conflictes, Git pararà i els mostrarà
# Els conflictes es mostren als arxius com:
# <<<<<<< HEAD
# Canvis de main
# =======
# Canvis de feature/nova-funcionalitat
# >>>>>>> feature/nova-funcionalitat

# 4. Resoldre conflictes manualment:
#    - Edita els arxius i tria quins canvis mantenir
#    - Elimina les línies de conflicte (<<<<, ====, >>>>)

# 5. Stagear els arxius resolts
git add .

# 6. Completar el merge
git commit -m "Merge: Fusió de feature/nova-funcionalitat a main"

# 7. Pujar els canvis
git push
```

**GUI de VSCode per a resoldre conflictes**:
1. Els arxius amb conflictes apareixen a "CHANGES"
2. Clica un arxiu per veure la vista de diferències
3. VSCode mostra botons per "Accept Current Change", "Accept Incoming Change", "Accept Both Changes"
4. Clica el botó adequat o edita manualment
5. Stagea els arxius resolts (clica el "+")
6. Escriu el missatge de merge commit

---

## Repositoris compartits i col·laboració

### Escenari 1: Col·laboració en equip - Repositori compartit

#### Afegir col·laboradors a GitHub

1. Vai a la pàgina del repositori a GitHub
2. "Settings" → "Collaborators"
3. Clica "Add people"
4. Busca el nom d'usuari de GitHub i clica "Add collaborator"

#### Treball col·laboratiu (sense forks)

```bash
# TERMINAL - Cada col·laborador

# 1. Clonar el repositori
git clone https://github.com/usuario/repositori-compartit.git
cd repositori-compartit

# 2. Crear una branca per al teu treball
git checkout -b feature/la-teva-funcionalitat

# 3. Fer els canvis i commits
echo "Canvi important" > arxiu.txt
git add .
git commit -m "Afegida nova funcionalitat"

# 4. Pujar la branca
git push -u origin feature/la-teva-funcionalitat

# 5. A GitHub, crea un Pull Request (PR)
# A la web de GitHub:
#    - Vai al repositori
#    - Verà's una notificació "Compare & pull request"
#    - Clica i crea el PR
#    - Escriu descripció del canvi
#    - Demana review als col·laboradors
#    - Un cop aprovat, fusiona

# 6. Actualitzar local i eliminar branca
git checkout main
git pull origin main
git branch -d feature/la-teva-funcionalitat
```

### Escenari 2: Col·laboració en repositoris de tercers (Fork + Pull Request)

#### Fer Fork

1. Vai al repositori original a GitHub
2. Clica el botó "Fork" a la cantonada superior dreta
3. Selecciona on vols fer el fork (el teu compte)
4. Es crearà una còpia del repositori al teu compte

#### Clonar i configurar

```bash
# TERMINAL

# 1. Clonar la teva còpia (fork)
git clone https://github.com/el-teu-usuari/repositori.git
cd repositori

# 2. Afegir l'original com a 'upstream'
git remote add upstream https://github.com/usuario-original/repositori.git

# 3. Verificar que tens dos remots
git remote -v
# Hauria de mostrar:
# origin     https://github.com/el-teu-usuari/repositori.git
# upstream   https://github.com/usuario-original/repositori.git

# 4. Actualitzar amb els últims canvis del repositori original
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

#### Crear Pull Request

```bash
# TERMINAL

# 1. Crear branca per al teu canvi
git checkout -b bugfix/arreglar-error

# 2. Fer canvis i commits
git add .
git commit -m "Arreglat error en el validador"

# 3. Pujar a la teva còpia (fork)
git push origin bugfix/arreglar-error

# 4. A la web de GitHub:
#    - Vai a la teva còpia del repositori
#    - Veuràs "Compare & pull request"
#    - Clica i selecciona:
#      - Base repository: repositori-original
#      - Base branch: main
#      - Head repository: la-teva-copia
#      - Compare branch: bugfix/arreglar-error
#    - Escriu descripció del canvi
#    - Clica "Create pull request"
#    - Espera al review i fusió
```

#### Sincronitzar fork amb original

```bash
# TERMINAL
# Si el repositori original ha tingut canvis mentre tu treballaves

# 1. Descarregar els canvis del repositori original
git fetch upstream

# 2. Estar en main i fusionar
git checkout main
git merge upstream/main

# 3. Pujar a la teva còpia
git push origin main

# 4. Pujar la branca de feature actualitzada
git checkout feature/branca
git merge main
git push origin feature/branca
```

---

## Casos pràctics

### Cas pràctic 1: Projecte web personal (local)

**Escenari**: Vols crear un lloc web personal i mantenir-lo amb Git.

```bash
# TERMINAL

# 1. Crear carpeta del projecte
mkdir web-personal
cd web-personal

# 2. Inicialitzar Git
git init

# 3. Crear estructura inicial
mkdir css js images
touch index.html style.css script.js README.md .gitignore

# 4. Afegir contingut a .gitignore (arxius a ignorar)
cat > .gitignore << EOF
node_modules/
.DS_Store
*.log
.env
EOF

# 5. Fer el primer commit
git add .
git commit -m "Estructura inicial del projecte web"

# 6. Veure l'historial
git log --oneline

# 7. Fer alguns canvis als arxius
echo "<h1>Hola!</h1>" > index.html
echo "body { background: blue; }" > style.css

# 8. Veure l'estat
git status

# 9. Stagear i commitear els canvis
git add .
git commit -m "Contingut inicial del web"

# 10. Continuar treballant i commitejant regularment
git log --oneline --graph
```

**Amb GUI de VSCode**:
1. Obri VSCode en la carpeta `web-personal`
2. Prem `Ctrl+Shift+G` per obrir Source Control
3. Veuràs els fitxers sense staged (U = Untracked)
4. Clica el "+" per a stagear-los tots
5. Escriu el missatge "Estructura inicial del projecte web"
6. Prem `Ctrl+Enter` per fer commit
7. Edita els arxius (index.html, style.css)
8. Clica de nou el "+" per a stagear els canvis
9. Escriu el missatge "Contingut inicial del web"
10. Prem `Ctrl+Enter`

---

### Cas pràctic 2: Projecte web amb repositori remot (personal)

**Escenari**: Vols un lloc web al teu compte de GitHub amb control de versions.

```bash
# TERMINAL

# 1. Crear carpeta local
mkdir web-portfolio
cd web-portfolio

# 2. Inicialitzar Git
git init

# 3. Crear arxius inicials
touch index.html style.css README.md .gitignore

# 4. Afegir contingut bàsic
cat > index.html << EOF
<!DOCTYPE html>
<html>
<head>
    <title>Web Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Benvingut al meu portfolio</h1>
</body>
</html>
EOF

cat > style.css << EOF
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}
h1 {
    color: #333;
}
EOF

cat > README.md << EOF
# Web Portfolio

Aquest és el meu portfolio personal.

## Característiques
- Responsive design
- Historial de projectes
- Formulari de contacte
EOF

# 5. Fer el primer commit
git add .
git commit -m "Commit inicial: estructura del portfolio"

# 6. CREAR UN REPOSITORI A GITHUB:
# - Vai a https://github.com/new
# - Nombre: "web-portfolio"
# - Descripció: "Web portfolio personal"
# - No inicialitzar amb README (ja tens un)
# - Clica "Create repository"

# 7. Afegir remot
git remote add origin https://github.com/el-teu-usuari/web-portfolio.git

# 8. Rebatiar a main i pujar
git branch -M main
git push -u origin main

# 9. Continuar treballant
echo "...més contingut..." >> index.html
git add .
git commit -m "Actualitzat: afegit contingut al portfolio"
git push

# 10. Veure l'historial remot
git log --oneline
git remote -v
```

**Amb GUI de VSCode**:
1. Obri VSCode en la carpeta `web-portfolio`
2. Crea els arxius amb l'editor
3. Obri Source Control (`Ctrl+Shift+G`)
4. Stagea tots els arxius (clica "+")
5. Escriu "Commit inicial: estructura del portfolio"
6. Prem `Ctrl+Enter`
7. Clica el botó "Publish to GitHub" (o els tres punts → "Publish Branch")
8. VSCode et demanarà autenticació a GitHub
9. Selecciona "Public" o "Private"
10. Clica "Publish"
11. Ara ja pots continuar treballant i els canvis es pugen amb el botó de sincronització

---

### Cas pràctic 3: Projecte en equip (repositori compartit amb branques)

**Escenari**: Estàs treballant amb altres desenvolupadors en un projecte.

```bash
# TERMINAL - CONFIGURACIÓ INICIAL (l'administrador)

# 1. Crear carpeta del projecte
mkdir app-equipo
cd app-equipo

# 2. Inicialitzar Git
git init

# 3. Crear estructura del projecte
mkdir src public config
touch src/main.js public/index.html config/settings.json README.md .gitignore

# 4. Fer commit inicial
git add .
git commit -m "Estructura inicial del projecte en equip"

# 5. Crear repositori a GitHub i pujar
git remote add origin https://github.com/admin-usuario/app-equipo.git
git branch -M main
git push -u origin main

# 6. A GitHub, Settings → Collaborators → Afegir col·laboradors
```

```bash
# TERMINAL - COL·LABORADOR 1: Implementar feature de login

# 1. Clonar repositori
git clone https://github.com/admin-usuario/app-equipo.git
cd app-equipo

# 2. Crear branca de feature
git checkout -b feature/login

# 3. Fer els canvis
echo "function login(email, password) { /* ... */ }" > src/auth.js
git add .
git commit -m "Afegida funcionalitat de login"

# 4. Pujar branca
git push -u origin feature/login

# 5. Crear Pull Request a GitHub:
#    - Vai a https://github.com/admin-usuario/app-equipo
#    - Clica "Compare & pull request"
#    - Descriu els canvis
#    - Demana review
#    - Espera aprovació
```

```bash
# TERMINAL - COL·LABORADOR 2: Implementar feature de base de dades

# 1. Clonar repositori
git clone https://github.com/admin-usuario/app-equipo.git
cd app-equipo

# 2. Actualitzar main amb els últims canvis
git pull origin main

# 3. Crear branca de feature
git checkout -b feature/database

# 4. Fer els canvis
mkdir db
touch db/schema.sql
echo "CREATE TABLE users ..." > db/schema.sql
git add .
git commit -m "Afegit esquema de base de dades"

# 5. Pujar branca
git push -u origin feature/database

# 6. Crear Pull Request a GitHub
```

```bash
# TERMINAL - ADMINISTRADOR: Revisar i fusionar PR

# A GitHub:
# 1. Vai a "Pull requests"
# 2. Revisa els canvis (clica en els arxius)
# 3. Deixa comentaris si cal
# 4. Si tot és correcte, clica "Merge pull request"
# 5. Clica "Confirm merge"
# 6. Els canvis es fusionen a main

# Localment:
# 1. Actualitzar main
git checkout main
git pull origin main

# 2. Veure els canvis fusionats
git log --oneline --graph --all

# 3. Eliminar branques locals que ja estan fusionades
git branch -d feature/login
git branch -d feature/database
```

```bash
# TERMINAL - COL·LABORADORS: Actualitzar amb els canvis fusionats

# Cada col·laborador:
git checkout main
git pull origin main

# Veure els canvis dels altres
git log --oneline
```

---

### Cas pràctic 4: Resoldre conflictes de merge

**Escenari**: Dos col·laboradors han editat el mateix arxiu.

```bash
# SITUACIÓ: Col·laborador 1 i 2 han editat 'src/main.js'

# COL·LABORADOR 1 (ha pujat primer)
git checkout -b feature/feature1
echo "// Versió 1" > src/main.js
git add .
git commit -m "Versió 1 de main.js"
git push origin feature/feature1
# Crea PR i es fusiona a main

# COL·LABORADOR 2 (estava treballant simultàniament)
git checkout -b feature/feature2
echo "// Versió 2" > src/main.js
git add .
git commit -m "Versió 2 de main.js"
git push origin feature/feature2
# Crea PR

# SITUACIÓ: Al intentar fusionar feature/feature2, hi ha conflicte!

# COL·LABORADOR 2 pot resoldre el conflicte:
git fetch origin
git checkout feature/feature2
git merge origin/main
# Git detecta el conflicte

# Obrir src/main.js i veure:
# <<<<<<< HEAD
# // Versió 2
# =======
# // Versió 1
# >>>>>>> origin/main

# Editar l'arxiu per a mantenir els dos canvis:
# // Versió 1 i 2 combinades
echo "// Versió 1 i 2 integrades" > src/main.js

# Stagear i completar el merge
git add .
git commit -m "Resolt conflicte de merge amb main"
git push origin feature/feature2

# Ara el PR es pot fusionar sense conflictes
```

**Amb GUI de VSCode**:
1. Quan hi ha un conflicte, VSCode ho detecta automàticament
2. Obri Source Control (`Ctrl+Shift+G`)
3. Els arxius amb conflicte apareixen amb una "C"
4. Clica en l'arxiu per veure la vista de diferències
5. VSCode mostra botons:
   - "Accept Current Change" (mantenir els teus canvis)
   - "Accept Incoming Change" (acceptar els canvis remots)
   - "Accept Both Changes" (mantenir tots dos)
6. Clica el botó adequat o edita manualment
7. Stagea l'arxiu (clica "+")
8. Escriu un missatge de merge commit
9. Prem `Ctrl+Enter`

---

## Solució de problemes

### Problema 1: Git no està instal·lat o no es detecta

**Símptoma**: `git: command not found` o `'git' is not recognized`

**Solució**:

**Windows**:
1. Verifica que Git està instal·lat: `git --version`
2. Si no: descarrega des de https://git-scm.com/downloads
3. Si VSCode no el detecta: configura manuallement
   - `Ctrl+,` per obrir Settings
   - Busca "git.path"
   - Estableix el path: `C:\Program Files\Git\bin\git.exe`

**macOS**:
1. Verifica que Git està instal·lat: `git --version`
2. Si no: `brew install git`
3. Si VSCode no el detecta:
   - `Cmd+,` per obrir Settings
   - Busca "git.path"
   - Estableix el path: `/opt/homebrew/bin/git` (M1/M2) o `/usr/local/bin/git` (Intel)

---

### Problema 2: "fatal: not a git repository"

**Símptoma**: `fatal: not a git repository (or any of the parent directories): .git`

**Solució**:
```bash
# Verifica que estàs en la carpeta correcta
pwd

# Si no és un repositori Git, inicialitza'l
git init

# O clona un repositori existent
git clone https://github.com/usuario/repositori.git
```

---

### Problema 3: Conflicte de merge

**Símptoma**: Els arxius mostren `<<<<<<<`, `=======`, `>>>>>>>`

**Solució**:
```bash
# 1. Edita els arxius afectats i resol els conflictes manualment
# 2. Elimina les línies de conflicte
# 3. Stagea els arxius
git add .

# 4. Completa el merge
git commit -m "Resolt conflicte de merge"

# Si vols cancel·lar el merge:
git merge --abort
```

---

### Problema 4: Has commitejat quelcom que no volia

**Símptoma**: Has fet `git commit` amb canvis incorrectes

**Solució**:
```bash
# Opció 1: Desfer l'últim commit (mantenir els canvis)
git reset --soft HEAD~1

# Opció 2: Desfer l'últim commit (descartar els canvis)
git reset --hard HEAD~1

# Opció 3: Crear un commit que desfà el anterior
git revert HEAD
```

---

### Problema 5: Has eliminat una branca per accident

**Símptoma**: Has eliminat una branca amb `git branch -D`

**Solució**:
```bash
# 1. Veure totes les accions recents (reflog)
git reflog

# 2. Trobar el commit de la branca eliminada
# 3. Crear una nova branca des d'aquell commit
git checkout -b nom-branca-recuperada <commit-id>
```

---

### Problema 6: VSCode no mostra els canvis en Source Control

**Símptoma**: Has editat arxius però no apareixen a la vista de Source Control

**Solució**:
```bash
# 1. Verifica que la carpeta és un repositori Git
git status

# 2. Recàrrega VSCode
Ctrl+Shift+P → "Developer: Reload Window"

# 3. Si segueix sense funcionar, verifica els permisos
chmod 755 .git
```

---

### Problema 7: "Permission denied" en fer push

**Símptoma**: `fatal: Permission denied` quan fas `git push`

**Solució Windows**:
```bash
# Configura les credencials de Git
git config --global credential.helper manager-core

# O usa l'autenticació SSH (recomanat)
# Segueix el tutorial de GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

**Solució macOS**:
```bash
# Configura les credencials de Git
git config --global credential.helper osxkeychain

# O usa l'autenticació SSH
```

---

### Problema 8: Vull canviar el URL del repositori remote

**Símptoma**: Has comès un error en el URL del remote o vols canviar a SSH

**Solució**:
```bash
# 1. Veure l'actual remote
git remote -v

# 2. Canviar el URL
git remote set-url origin https://github.com/nuevo-usuario/nuevo-repo.git

# 3. O desactivar i crear-ne un de nou
git remote remove origin
git remote add origin https://github.com/nuevo-usuario/nuevo-repo.git

# 4. Verificar
git remote -v
```

---

### Problema 9: "please make sure all committed files are synced"

**Símptoma**: VSCode no et deixa hacer push

**Solució**:
```bash
# 1. Veure l'estat
git status

# 2. Si hi ha canvis sense stagear, stagea'ls
git add .

# 3. Si hi ha canvis stagejats sense commit, fes commit
git commit -m "Missatge"

# 4. Ara ja pots fer push
git push
```

---

## 📚 Recursos addicionals

- [Documentació oficial de Git](https://git-scm.com/doc)
- [Guia oficial de GitHub](https://docs.github.com/)
- [Interactive Git Learning](https://learngitbranching.js.org/)
- [Oh My Git!](https://ohmygit.org/)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

---

## 🎓 Conclusió

Has après:
- ✅ Instal·lar i configurar Git a Windows i macOS
- ✅ Treballar amb repositoris locals
- ✅ Usar terminal integrada de VSCode
- ✅ Usar la interfície gràfica de VSCode
- ✅ Sincronitzar amb GitHub
- ✅ Crear i fusionar branques
- ✅ Col·laborar en equip
- ✅ Resoldre conflictes
- ✅ Recuperar-se d'errors

Ara estàs preparat per a usar Git i GitHub en els teus projectes personals i compartits!

**Bona sort amb els teus projectes!** 🚀

---

*Tutorial creat: Gener 2026*
*Versió: 1.0*
*Idioma: Català*
