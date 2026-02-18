# ⭐ MILLORS PRÀCTIQUES DE GIT I GITHUB

## 📋 Taula de continguts

1. [Comandes diàries](#comandes-diàries)
2. [Missatges de commit](#missatges-de-commit)
3. [Estructura de branques](#estructura-de-branques)
4. [Col·laboració en equip](#col·laboració-en-equip)
5. [Seguretat i integritat](#seguretat-i-integritat)
6. [Manteniment de repositori](#manteniment-de-repositori)
7. [Checklist de bones pràctiques](#checklist-de-bones-pràctiques)

---

## 🏃 Comandes diàries

### Comença el dia de treball

```bash
# 1. Actualitzar main amb els últims canvis
git checkout main
git pull origin main

# 2. Crear branca per a la tasca del dia
git checkout -b feature/nova-tasca

# 3. Veure en quina branca estàs
git branch
# Output: * feature/nova-tasca
#           main
```

### Durant la tasca

```bash
# Cada 30-60 minuts, fer un commit
git status
git diff           # Revisar els canvis
git add .
git commit -m "Feature: Descripció clara del canvi"

# Pujar la branca regularment (even si no està acabada)
git push origin feature/nova-tasca
```

### Al final del dia

```bash
# Pujar els últims canvis
git push

# Veure l'historial del dia
git log --oneline -10

# Comprovar que tot està pujat
git status
# Ha de mostrar: nothing to commit, working tree clean
```

### Acabar la tasca

```bash
# 1. Assegurar-se que el codi funciona
# (testing, verificació manual, etc.)

# 2. Crear Pull Request a GitHub (web)
# - Descripció del canvi
# - Demana review
# - Espera aprovació

# 3. Fusionar (una vegada aprovat)
# Fes merge a GitHub (web) o localment:
git checkout main
git pull origin main
git merge feature/nova-tasca
git push

# 4. Eliminar branca
git branch -d feature/nova-tasca
git push origin --delete feature/nova-tasca
```

---

## 📝 Missatges de commit

### Format recomanat

```
<tipo>: <asunto>

<descripción>

Closes #<número-issue>
```

### Tipus de commits

```
feat:     Nova funcionalitat
fix:      Arreglament de bug
docs:     Canvis de documentació
style:    Canvis de format (tabulacions, etc)
refactor: Refactorització de codi
perf:     Millora de rendiment
test:     Afegir o actualitzar tests
chore:    Altres tasques (build, dependències)
```

### Exemples bons

```bash
# Bon - Descriu QUÈ i PER QUÈ
git commit -m "feat: Afegida autenticació amb Google

- Integrada OAuth2 de Google
- Afegides tests unitaris
- Actualitzada documentació
Closes #123"

# Bon - Curt i descriptiu
git commit -m "fix: Arreglat error de validació en email"

# Bon - Amable i clar
git commit -m "docs: Actualitzat README amb instruccions d'instal·lació"
```

### Exemples dolents

```bash
# Dolent - Massa curt
git commit -m "fix"

# Dolent - No descriptiu
git commit -m "stuff"

# Dolent - Escrit malament
git commit -m "arreglat cosa importante"

# Dolent - Massa genèric
git commit -m "update"
```

### Comandes útils per a commits

```bash
# Commit amb descripció llarga
git commit -m "feat: Nova funcionalitat" -m "
Explicació detallada de la funcionalitat.

- Punt 1
- Punt 2
- Punt 3
"

# Afegir canvis a l'últim commit
git commit --amend --no-edit

# Editar el missatge de l'últim commit
git commit --amend -m "Nou missatge"

# Commit sense fer staging
git commit -am "Missatge"

# Crear commit buit (per a deploy, etc)
git commit --allow-empty -m "Deploy: Versió 1.0"
```

---

## 🌳 Estructura de branques

### Model Git Flow (recomanat per a projectes grans)

```
main (producció, sempre estable)
 └─ release/1.0
     └─ develop (desenvolupament)
         ├─ feature/login
         ├─ feature/dashboard
         ├─ feature/api
         ├─ bugfix/password-reset
         └─ hotfix/critical-bug
```

### Noms de branques

**Format**: `<tipo>/<descripcion>`

```bash
# Feature (nova funcionalitat)
git checkout -b feature/login-oauth

# Bugfix (arreglament de bug)
git checkout -b bugfix/password-validation

# Hotfix (arreglament urgent de producció)
git checkout -b hotfix/critical-security-issue

# Release (preparació de versió)
git checkout -b release/1.0.0

# Documentation
git checkout -b docs/api-reference

# Refactoring
git checkout -b refactor/cleanup-code
```

### Règles de branques

```bash
# 1. Sempre crear branca des de main (o develop)
git checkout main
git pull origin main
git checkout -b feature/nova

# 2. Mantenir branca actualitzada amb main
git fetch origin
git merge origin/main

# 3. No treballs mai directament en main
# Sempre crea branca

# 4. Una branca per tasca
# No barrejar multiple tasques en una branca

# 5. Eliminar branca quan estigui acabada
git branch -d feature/nova
```

---

## 👥 Col·laboració en equip

### Flux de Pull Request

```
1. Crear branca nova
   git checkout -b feature/nova

2. Fer canvis i commits
   git add .
   git commit -m "..."

3. Pujar branca
   git push -u origin feature/nova

4. Crear Pull Request en GitHub
   - Descripció detallada
   - Screenshots si pertinent
   - Referència a issues (#123)

5. Esperar review
   - Deixar que els altres comentin
   - Responder preguntes
   - Fer els canvis demanats

6. Fusionar quan estigui aprovat
   - Fusionar en GitHub (recomanat)
   - Assegurar-se que els tests passen

7. Eliminar branca
   - Eliminar remota i local
```

### Revisar código d'altres

```bash
# Descarregar la branca de algú altres
git fetch origin
git checkout feature/nova-funcionalitat

# Veure els canvis
git log main..feature/nova-funcionalitat
git diff main..feature/nova-funcionalitat

# Provar localment si funciona

# Deixar comentaris a GitHub

# Approve el PR
```

### Resoldre conflictes en equip

```bash
# Si rebut: "Branch has conflicts that must be resolved"

# 1. Descarregar els últims canvis de main
git fetch origin
git merge origin/main

# 2. Resoldre conflictes
# - Editar les línies en conflicte
# - Eliminar línies de conflicte
# - Provar que funciona

# 3. Stagear i commit
git add .
git commit -m "fix: Resolt conflicte de merge"

# 4. Pujar
git push

# 5. GitHub detectarà que el conflicte és resolt
```

### Etiqueta de revisor

```
En els comentaris de PR, usar:
- LGTM (Looks Good To Me)
- ACK (Acknowledge)
- Suggestion: [detalls]
- Question: [pregunta]
- Blocker: [problema crític]
- Nice to have: [millora opcional]
```

---

## 🔐 Seguretat i integritat

### No committejar secrets

**Fitxers a IGNORAR sempre** (afegir a `.gitignore`):

```bash
# Variables d'entorn
.env
.env.local
.env.*.local

# API Keys
*.key
*.pem
config/secrets.json

# Database
*.db
*.sqlite
*.sql

# Credentials
.ssh/
.aws/
.credentials

# Editor settings (opcional)
.vscode/settings.json
.idea/

# OS
.DS_Store
Thumbs.db

# Dependencies
node_modules/
venv/
__pycache__/

# Build
dist/
build/
*.log
```

### Veure si has commitat secrets accidentalment

```bash
# Buscar paraules clau
git log -p | grep -i "password\|secret\|key\|token"

# Si has commitat quelque cosa sensible:
# 1. Cambiar la contrasenya/token immediatament
# 2. Contactar amb l'administrador
# 3. Alguns serveis detecten secrets públics automàticament
```

### Signar commits (avançat)

```bash
# Configurar GPG
git config --global user.signingkey <key-id>

# Signar commits
git commit -S -m "Commit signat"

# Signar tags
git tag -s v1.0.0 -m "Versió signada"

# Verificar signatura
git verify-commit <commit-id>
```

---

## 🧹 Manteniment de repositori

### Neteja regular

```bash
# Eliminar branques locals que estan fusionades
git branch --merged | grep -v "main\|develop" | xargs git branch -d

# Actualitzar la llista de branques remotes
git fetch --prune

# Sincronitzar locals amb remotes
git fetch origin

# Ver branques remotes que ja no existeixen
git branch -r --list 'origin/*'
```

### Comprimir el repositori

```bash
# Git fa garbage collection automàticament, però pots forçar:
git gc

# Per a repositoris grans
git gc --aggressive
```

### Crear backups

```bash
# Backup complet del repositori
cp -r repositori/ repositori.backup

# O usar comandos de git
git bundle create backup.bundle --all
git clone backup.bundle repositori-recuperat
```

### Historial limpio

```bash
# Veure l'historial complet (inclús canvis eliminats)
git reflog

# Si elimines accidentalment quelque cosa
git reset --hard <commit-id-del-reflog>
```

---

## ✅ Checklist de bones pràctiques

### Al crear un repositori

- [ ] Crear `.gitignore` adequat
- [ ] Afegir `README.md` amb descripció
- [ ] Afegir `LICENSE.md` si és open-source
- [ ] Configurar branches per defecte (`main`)
- [ ] Afegir templates per a Pull Requests
- [ ] Protegir branca `main`:
  - [ ] Requerir review
  - [ ] Requerir que els tests passin
  - [ ] Requerir que estigui actualitzada

### Cada dia de treball

- [ ] Fer pull al començar
- [ ] Crear branca per a la tasca
- [ ] Fer commits regularment (cada 30-60 min)
- [ ] Fer push de la branca
- [ ] Crear pull request amb descripció
- [ ] Demanar review als col·laboradors
- [ ] Revisar el codi dels altres
- [ ] Resoldre comentaris de review

### Abans de fusionar

- [ ] Els tests passen
- [ ] El codi està revisat
- [ ] No hi ha conflictes
- [ ] La descripció és clara
- [ ] Les imatges/videos funcionen
- [ ] La branca és recent (no és vella)

### Manteniment mensual

- [ ] Netejar branques velles
- [ ] Crear etiquetes (tags) per a versions
- [ ] Revisar dels issues oberts
- [ ] Actualitzar documentació
- [ ] Comprimir repositori si és gran
- [ ] Fer backup del repositori

---

## 📊 Estadístiques útils

### Ver contribucions

```bash
# Commits per autor
git shortlog -sn

# Contribucions per data
git log --oneline --since="2024-01-01" --until="2024-12-31"

# Línies afegides/eliminades
git log --stat

# Autors més actius
git log --format='%an' | sort | uniq -c | sort -rn
```

### Generar changelog

```bash
# Entre dues versions
git log v1.0.0..v2.0.0 --oneline

# Format agrupat
git log v1.0.0..v2.0.0 --format='%h - %s (%an)'

# Exportar a fitxer
git log v1.0.0..v2.0.0 --oneline > CHANGELOG.txt
```

---

## 🎯 Resumen de millors pràctiques

### DO (Fes esto)
- ✅ Fer commits pequeños i freqüents
- ✅ Usar missatges descriptius
- ✅ Crear branques per a cada tasca
- ✅ Fer pull regularment
- ✅ Revisar els canvis dels altres
- ✅ Fer push regularment
- ✅ Mantenir main estable

### DON'T (No facis esto)
- ❌ Commits sense missatge
- ❌ Treballar en main directament
- ❌ Fer force push a branques compartides
- ❌ Commitejar secrets
- ❌ Branques amb noms genèrics ("fix", "update")
- ❌ Ignorar els conflictes
- ❌ Dejar pull requests sense revisar

---

## 🔗 Enllaços de referència

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow Model](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Best Practices](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [Google Style Guide - Git](https://google.github.io/styleguide/shellguide.html)

---

## 📞 Ajuda ràpida

Si necessites ajuda ràpida:

1. **Consulta el Cheat Sheet**: `cheat_sheet_comandes.md`
2. **Busca en INDEX.md**: `INDEX.md`
3. **Documenta en Tutorial**: `tutorial_git_complet.md`
4. **Exemplos**: `exemples_practics_avancats.md`

---

**Recorda: Les millors pràctiques fan que el codi sigui millor i la col·laboració més fàcil.** 🚀

*"Good commit hygiene leads to clean history!"*
