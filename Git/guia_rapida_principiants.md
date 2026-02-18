# 📘 Git i GitHub - GUIA RÀPIDA PER A PRINCIPIANTS

## 🎯 Objectiu

Aquesta guia te mostra els primers passos per a usar Git i GitHub de forma pràctica i senzilla.

---

## 📋 Taula de continguts

1. [Instal·lació ràpida](#instal·lació-ràpida)
2. [Configuració inicial](#configuració-inicial)
3. [Primer projecte: Local](#primer-projecte-local)
4. [Primer projecte: Remote](#primer-projecte-remote)
5. [Comandes essencials](#comandes-essencials)
6. [Preguntes freqüents](#preguntes-freqüents)

---

## 🚀 Instal·lació ràpida

### Windows

```
1. Descarrega: https://git-scm.com/downloads/win
2. Executa l'instal·lador
3. Accepta les opcions per defecte
4. Obri PowerShell o Terminal de VSCode
5. Verifica: git --version
```

### macOS

```
1. Obri Terminal
2. Executa: brew install git
3. Verifica: git --version
```

---

## ⚙️ Configuració inicial

**Una sola vegada!**

```bash
git config --global user.name "El teu nom" //el mateix que ha github
git config --global user.email "email@exemple.com" // el mateix que a github
git config --global init.defaultBranch main
```

---

## 🌟 Primer projecte: Local

### Pas a pas

```bash
# 1. Crear carpeta
mkdir meu-projecte
cd meu-projecte

# 2. Inicialitzar Git
git init

# 3. Crear arxius
touch README.md
echo "# Meu Projecte" > README.md

# 4. Primer commit
git add .
git commit -m "Commit inicial"

# 5. Veure historial
git log --oneline
```

### Amb VSCode (GUI)

```
1. Obri VSCode en la carpeta
2. Ctrl+Shift+G (Source Control)
3. Clica "+" per stagear
4. Escriu "Commit inicial"
5. Prem Ctrl+Enter
```

---

## 🌐 Primer projecte: Remote

### Opció 1: Des de VSCode (Recomenant per a principiants)

**Si ja tens un repositori local i vols connectar-lo a GitHub:**

```
1. Obri VSCode en la carpeta del teu projecte
2. Ctrl+Shift+G (Source Control)
3. Clica "Publicar a GitHub" (o "Publish to GitHub")
4. Si et demana accés, autoritza GitHub a VSCode
5. Tria:
   - Repositori PRIVAT o PÚBLIC
   - Nom del repositori (per defecte el nom de la carpeta)
6. VSCode crearà automàticament el repositori a GitHub i el connectarà
7. Els teus arxius ja estan al remote! ✅
```

**Avantatge:** Tota la gestió la fa VSCode automàticament.

---

### Opció 2: Manual (Des de GitHub.com)

**Si prefereixes crear el repositori a GitHub primer:**

```
1. Login a https://github.com
2. Clica "+" → "New repository"
3. Nomena: "meu-projecte"
4. Tria: PRIVAT o PÚBLIC
5. NO marques "Initialize this repository"
6. Clica "Create repository"
7. Copia l'URL HTTPS que et mostra
```

**Localment (Terminal o VSCode):**

```bash
# Ja estàs en la carpeta local amb commits
git remote add origin https://github.com/usuario/meu-projecte.git
git branch -M main
git push -u origin main

# Llestos! Els teus arxius ja estan a GitHub
```

### Verificar

```
1. Accedeix a https://github.com/usuario/meu-projecte
2. Hauries de veure els teus arxius
```

---

### ⚡ Actualitzar del local al remote (Push)

**Després del primer setup, cada vegada que fas canvis:**

```bash
# Terminal
git add .
git commit -m "Descripció del canvi"
git push
```

**Desde VSCode (més fàcil):**

```
1. Ctrl+Shift+G (Source Control)
2. Escriu el missatge de commit a la casella
3. Clica el botó "✓" per fer commit
4. Clica els tres punts "..." → "Push" 
   (o directament apareix un botó "Sync" si ja està connectat)
5. Els canvis ja estan a GitHub! ✅
```

**Nota:** Si és la primera vegada que fas push a una branca nova, VSCode et demanarà si vols pujar la branca. Diu que sí.

---

## 💬 Comandes essencials

### Daily Workflow

```bash
# 1. Veure els canvis
git status

# 2. Afegir canvis
git add .

# 3. Fer commit
git commit -m "Descripció del canvi"

# 4. Pujar a GitHub
git push

# 5. (Opcional) Descarregar canvis dels altres
git pull
```

### Ver historial

```bash
git log --oneline
git log --oneline --graph --all
```

### Desfer canvis

```bash
# Desfer edicions (sense perdre)
git reset --soft HEAD~1

# Desfer tot
git reset --hard HEAD~1
```

---

## 🤔 Preguntes freqüents

### P: Quina és la diferència entre `git add` i `git commit`?

**A:** 
- `git add`: Prepara els arxius per a guardar
- `git commit`: Guarda els canvis en l'historial

### P: Puc veure el que he canviat?

**A:** Sí, usa `git diff` o obri Source Control a VSCode

### P: Puc treballar en dos canvis simultàniament?

**A:** Sí, usa branques:
```bash
git checkout -b feature/nova-funcionalitat
# Fer canvis
git checkout main
# Ara estàs en main, els canvis es mantenen a la branca
```

### P: Com col·laboro amb altres?

**A:** 
1. Els afegeix com a col·laboradors en GitHub
2. Cada un crea una branca per a la seva tasca
3. Fa commits i fa push
4. Crea un Pull Request
5. L'administrador fusiona

### P: Què pasa si hi ha conflicte?

**A:** Git ho detectarà. Editaràs l'arxiu manualment per a resoldre'l:
```
<<<<<<< HEAD
Els teus canvis
=======
Els canvis de l'altre
>>>>>>> branca-altra
```
Tria quins canvis mantenir, elimina les línies de conflicte i fes commit.

### P: Com vaig a GitHub Desktop?

**A:** Descàrrega des de https://desktop.github.com (interfície gràfica més simple)

### P: Necessito aprendre terminal?

**A:** NO! VSCode té interfície gràfica completa. Però la terminal és més ràpida una vegada apreses les comandes.

---

## 📚 Checklist: Primer projecte complet

- [ ] He instal·lat Git
- [ ] He configurat el meu nom i email
- [ ] He creat una carpeta local
- [ ] He inicialitzat Git amb `git init`
- [ ] He creat alguns arxius
- [ ] He fet el primer commit
- [ ] He creat un repositori a GitHub
- [ ] He connectat el local amb el remote
- [ ] He fet el primer `git push`
- [ ] He verificat que els arxius estan a GitHub

---

## 🎓 Següents passos

Una vegada domines els conceptes bàsics:

1. Aprèn sobre **branques** per a treballs paral·lels
2. Aprèn sobre **Pull Requests** per a col·laboració
3. Aprèn sobre **.gitignore** per a ignorar arxius
4. Explora extensiones de VSCode com **GitLens**

---

## 🔗 Links útils

- Instal·lació: https://git-scm.com/downloads
- GitHub: https://github.com
- Documentació Git: https://git-scm.com/doc
- Interactive Tutorial: https://learngitbranching.js.org/

---

**Bona sort! 🚀**

*Recorda: Commiteaja regularment amb missatges descriptius!*
