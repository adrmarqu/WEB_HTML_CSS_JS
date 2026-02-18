# 📌 GIT CHEAT SHEET - COMANDES RÀPIDES EN CATALÀ

## 🔧 CONFIGURACIÓ

```bash
# Veure la configuració
git config --list
git config user.name
git config user.email

# Configurar globalment (primera vegada)
git config --global user.name "El teu nom"
git config --global user.email "email@exemple.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"

# Configurar per projecte
git config user.name "Nom del projecte"
git config user.email "email@projecte.com"
```

---

## 📂 CREAR I CLONAR REPOSITORIS

```bash
# Inicialitzar Git en una carpeta existent
git init

# Inicialitzar amb un repositori buit
git init nom-repositori

# Clonar un repositori remot
git clone https://github.com/usuario/repositori.git

# Clonar en una carpeta amb nom específic
git clone https://github.com/usuario/repositori.git meu-nom

# Clonar una branca específica
git clone -b nom-branca https://github.com/usuario/repositori.git
```

---

## 🔄 VER L'ESTAT

```bash
# Estat detallat
git status

# Estat curt (M = Modified, A = Added, D = Deleted, ? = Untracked)
git status -s

# Veure diferències entre working directory i staging
git diff

# Veure diferències entre staging i última versió commited
git diff --cached

# Veure diferències entre dos commits
git diff commit1 commit2

# Veure diferències en un arxiu específic
git diff -- arxiu.txt
```

---

## ➕ AFEGIR CANVIS AL STAGING

```bash
# Afegir un arxiu específic
git add arxiu.txt

# Afegir múltiples arxius
git add arxiu1.txt arxiu2.txt

# Afegir tots els canvis
git add .

# Afegir tots els canvis (de forma curta)
git add -A

# Afegir de forma interactiva (seleccionar quins canvis)
git add -p

# Afegir canvis eliminats
git add -u

# Afegir només arxius de tipus específic
git add *.js
```

---

## 💾 COMMITS

```bash
# Fer un commit simple
git commit -m "Missatge del commit"

# Commit amb descripció llarga
git commit -m "Títol" -m "Descripció detallada
de vàries línies"

# Commit sense editar el missatge de l'últim commit
git commit --amend --no-edit

# Editar el missatge de l'últim commit
git commit --amend -m "Nou missatge"

# Afegir canvis a l'últim commit sense crear-ne un de nou
git commit --amend --no-edit

# Commit de tots els arxius modificats (sense staging)
git commit -a -m "Missatge"

# Commit i stagear al mateix temps
git commit -am "Missatge"

# Crear un commit sense canvis
git commit --allow-empty -m "Missatge"
```

---

## 📜 VER L'HISTORIAL

```bash
# Historial complet
git log

# Historial en una línia per commit
git log --oneline

# Últims 5 commits
git log -5

# Historial amb gràfica de branques
git log --graph --all --oneline

# Historial amb autor i data
git log --format="%h - %an, %ar : %s"

# Historial d'un arxiu específic
git log -- arxiu.txt

# Historial amb les diferències
git log -p

# Historial amb estadístiques
git log --stat

# Commits després d'una data
git log --after="2024-01-01"

# Commits entre dues dates
git log --after="2024-01-01" --before="2024-12-31"

# Commits d'un autor
git log --author="Nom"

# Commits que canvien una funció
git log -S "nom-funcio"

# Veure tots els canvis referenciats
git reflog
```

---

## 🔙 DESFER CANVIS

```bash
# Desfer canvis en un arxiu (revertir al últim commit)
git checkout -- arxiu.txt

# Desfer TOTS els canvis (atenció!)
git checkout -- .

# Treure un arxiu del staging
git reset arxiu.txt

# Treure tots els arxius del staging
git reset

# Desfer l'últim commit (mantenir els canvis en local)
git reset --soft HEAD~1

# Desfer l'últim commit (mantenir els canvis però sense staging)
git reset --mixed HEAD~1

# Desfer l'últim commit (descartar tots els canvis)
git reset --hard HEAD~1

# Desfer múltiples commits
git reset --hard HEAD~3

# Desfer un commit anterior (crear un nou commit que desfà)
git revert commit-id

# Desfer dels últims N commits
git reset --hard HEAD~N

# Restaurar un arxiu eliminat
git restore arxiu.txt

# Restaurar un arxiu del staging
git restore --staged arxiu.txt
```

---

## 🌳 BRANQUES

```bash
# Veure totes les branques locals
git branch

# Veure totes les branques (locals i remotes)
git branch -a

# Veure branques remotes
git branch -r

# Crear branca nova
git branch nom-branca

# Crear branca i canviar a ella
git checkout -b nom-branca

# Crear branca basada en altra branca
git checkout -b nova-branca develop

# Canviar a una branca
git checkout nom-branca

# Canviar a una branca (forma moderna)
git switch nom-branca

# Canviar a la branca anterior
git checkout -

# Crear una branca local des de la remota
git checkout --track origin/nom-branca

# Renombrar branca actual
git branch -m nou-nom

# Renombrar altra branca
git branch -m nom-vell nom-nou

# Eliminar branca local
git branch -d nom-branca

# Forçar eliminació de branca
git branch -D nom-branca

# Eliminar branca remota
git push origin --delete nom-branca

# Llistar branques fusionades amb la actual
git branch --merged

# Llistar branques NO fusionades
git branch --no-merged

# Veure informació de la branca
git branch -v
```

---

## 🔀 FUSIONS

```bash
# Fusionar una branca a la branca actual
git merge nom-branca

# Fusionar sense crear merge commit (fast-forward)
git merge --ff nom-branca

# Crear sempre un merge commit (inclús si ff és possible)
git merge --no-ff nom-branca

# Fusionar sense commitear (per revisar primer)
git merge --no-commit nom-branca

# Abortar una fusió en cas de conflicte
git merge --abort

# Veure els conflictes
git status

# Fer rebase en lloc de merge (història lineal)
git rebase nom-branca

# Abortar rebase
git rebase --abort
```

---

## 🌐 REPOSITORIS REMOTS

```bash
# Veure repositoris remots
git remote

# Veure repositoris remots amb detall
git remote -v

# Afegir repositori remote
git remote add nom-remot https://github.com/usuario/repositori.git

# Afegir origin (remote per defecte)
git remote add origin https://github.com/usuario/repositori.git

# Ver la URL d'un remote
git remote get-url nom-remot

# Canviar la URL d'un remote
git remote set-url nom-remot https://nova-url.git

# Renombrar remote
git remote rename nom-vell nom-nou

# Eliminar remote
git remote remove nom-remot

# Veure informació del remote
git remote show origin

# Descarregar canvis del remote (sense fusionar)
git fetch

# Descarregar de remote específic
git fetch origin

# Descarregar branca específica
git fetch origin nom-branca
```

---

## 📤 PUSH I PULL

```bash
# Enviar canvis a origin main
git push

# Enviar branca específica
git push origin nom-branca

# Enviar i configurar upstream
git push -u origin nom-branca

# Forçar push (atenció!)
git push --force

# Forçar push amb safety
git push --force-with-lease

# Enviar totes les branques
git push --all

# Enviar totes les etiquetes
git push --tags

# Enviar branca específica a remot diferent
git push otro-remot nom-branca

# Eliminar branca remota
git push origin --delete nom-branca

# Descarregar i fusionar
git pull

# Descarregar de remote específic
git pull origin

# Descarregar de branca específica
git pull origin nom-branca

# Descarregar sense fusionar
git fetch
git merge origin/main

# Descarregar amb rebase
git pull --rebase
```

---

## 🏷️ ETIQUETES (TAGS)

```bash
# Llistar etiquetes
git tag

# Crear etiqueta lleugera
git tag v1.0.0

# Crear etiqueta anotada (amb missatge)
git tag -a v1.0.0 -m "Versió 1.0.0"

# Veure informació d'etiqueta
git show v1.0.0

# Crear etiqueta en commit específic
git tag v1.0.0 commit-id

# Eliminar etiqueta local
git tag -d v1.0.0

# Eliminar etiqueta remota
git push origin --delete v1.0.0

# Enviar etiqueta específica
git push origin v1.0.0

# Enviar totes les etiquetes
git push origin --tags

# Clonar repositori fins a una etiqueta
git clone --depth 1 --branch v1.0.0 URL
```

---

## 🔍 CERCA I INSPECCIÓ

```bash
# Cerca commits que contenen text
git log -S "text"

# Cerca en missatges de commit
git log --grep="pattern"

# Veure qui va canviar una línia específica
git blame arxiu.txt

# Veure details d'un commit
git show commit-id

# Veure un arxiu en una versió anterior
git show commit-id:arxiu.txt

# Veure les diferències entre branques
git diff branca1..branca2

# Veure els commits entre dues branques
git log branca1..branca2

# Cercar branques que contenen un commit
git branch --contains commit-id
```

---

## 🆘 SOLUCIÓ DE PROBLEMES

```bash
# Recuperar commits eliminats
git reflog
git reset --hard commit-id

# Recuperar branca eliminada
git reflog
git checkout -b nom-branca commit-id

# Netejar l'historial
git gc

# Comprimir el repositori
git repack -d

# Verificar integritat del repositori
git fsck

# Veure commits penjants
git log --graph --all --oneline

# Veure errors en la configuració
git config -l

# Restaurar .git corrompido (ATENCIÓ!)
# No hi ha solució fàcil, considereu fer backup
```

---

## 🎯 CASOS D'ÚS COMUNS

### Caso 1: Has commitejat quelcom que no volia

```bash
# Veure l'últim commit
git log -1

# Desfer l'últim commit (mantenir els canvis)
git reset --soft HEAD~1

# O desfer i descartar els canvis
git reset --hard HEAD~1
```

### Caso 2: Has commitejat a la branca equivocada

```bash
# Crear branca on volia estar
git branch feature/nova

# Desfer el commit de la branca actual
git reset --hard HEAD~1

# Canviar a la branca correcta
git checkout feature/nova

# Els canvis estan aquí
```

### Caso 3: Vols combinar múltiples commits

```bash
# Veure els últims 3 commits
git log --oneline -3

# Fer rebase interactiu
git rebase -i HEAD~3

# Marcar commits per a squash (s) o fixup (f)
# Guardar i tancar l'editor
```

### Caso 4: Vols revertir un commit públic

```bash
# En lloc de reset, fer revert (crea un nou commit)
git revert commit-id

# Pujar els canvis
git push
```

### Caso 5: Vols treure un arxiu del staging

```bash
# Treure un arxiu específic
git reset arxiu.txt

# Treure tots
git reset
```

### Caso 6: Vols esborrar tots els canvis locals

```bash
# Desfer totes les edicions (ATENCIÓ!)
git reset --hard

# O restaurar arxius específics
git checkout -- arxiu.txt
```

---

## 📊 ATALLOS ÚTILS

### Crear aliases per a comandes llargues

```bash
# Afegir a ~/.gitconfig o ~/.bash_profile

# Alias pel log bonito
git config --global alias.l 'log --oneline'
git config --global alias.lg 'log --oneline --graph --all'

# Alias per a status curt
git config --global alias.st 'status -s'

# Alias per a diff
git config --global alias.d 'diff'

# Usar els aliases
git l
git lg
git st
git d
```

---

## 🔐 SEGURETAT

```bash
# Signar commits amb GPG (opcional)
git commit -S -m "Commit signat"

# Configurar firma automàtica
git config --global user.signingkey <key-id>

# Verificar signatura d'un commit
git verify-commit <commit-id>
```

---

## 💡 CONSELLS

1. **Commiteaja regularment** - Cada petit canvi mereix un commit
2. **Missatges descriptius** - Descriu QUÈ i PER QUÈ, no com
3. **No force push** - A branques compartides, usa `--force-with-lease`
4. **Branques per a features** - Crea branques per a cada nova funcionalitat
5. **Pull before push** - Sempre `git pull` abans de `git push`
6. **Review els commits** - `git log`, `git diff`, `git show` regularment
7. **Backup** - Sempre manté un backup del repositori important

---

## 📚 RECURSOS

- [Documentació oficial Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [Git Reference](https://git-scm.com/docs)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

**Última actualització: Gener 2026**
**Versió: 1.0**
**Idioma: Català**
