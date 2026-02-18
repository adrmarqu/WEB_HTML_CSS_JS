# 🎯 COM USAR ELS TUTORIALS DE GIT I GITHUB

## 📂 Estructura de fitxers

```
Git/
├── INDEX.md                           ← COMENÇA AQUÍ
├── tutorial_git_complet.md            ← Tutorial complet (250+ pág)
├── guia_rapida_principiants.md        ← Guia per a principiants (30 min)
├── exemples_practics_avancats.md      ← 5 projectes pràctics
├── cheat_sheet_comandes.md            ← Referència ràpida (100+ comandes)
├── tutorial_git_html.html             ← Versió web interactiva
├── git.md                             ← Document original
├── git.html                           ← Web original
├── git_files/                         ← Imatges i recursos
└── [altres arxius]
```

---

## 🚀 Tres formes de começar

### Opció 1: Llig el Índex Principal
```
1. Obrir: INDEX.md
2. Escull el tutorial adequat per al teu nivell
3. Comença per la sección suggerida
```

### Opció 2: Web interactiva (recomanat)
```
1. Doble clic: tutorial_git_html.html
2. S'obri automàticament en el navegador
3. Navega per les seccions
4. Torna al document markdown per als exemples
```

### Opció 3: Dins de VSCode
```
1. Obrir VSCode
2. File → Open Folder → Selecciona la carpeta Git
3. Explorer → Clica en INDEX.md
4. Markdown Preview: Ctrl+K V (o icona ullell)
5. Llig mentre tens terminal obert (Ctrl+`)
```

---

## 📖 Guia per nivell

### Ets principiant? (No tinc experiència)
```
SETMANA 1:
├── Dia 1: Llig "Guia Ràpida per a Principiants" (30 min)
├── Dia 2: Instal·la Git (30 min)
├── Dia 3: Crea primer projecte local (1 hora)
├── Dia 4: Crea compte GitHub (15 min)
├── Dia 5: Puja projecte a GitHub (30 min)
└── Dia 6-7: Practica fent commits diaris

SETMANA 2:
├── Llig "Tutorial Complet" → Branques i fusió
├── Fes Exemples Pràctics → Projecte 1
└── Experimenta creant branques
```

### Tens alguna experiència?
```
DIA 1:
├── Llig "Tutorial Complet" complert (2-3 hores)
└── Pren notes de les seccions que no entens

DIA 2-7:
├── Fes els 5 Exemples Pràctics complets
├── Practica col·laboració (si pots)
└── Refereix-te a Cheat Sheet per a comandes
```

### Saps Git però vols aprender avançat?
```
├── Salta a "Exemples Pràctics" → Projectes 4-5
├── Llig la sección de "Repositoris compartits"
├── Practica Pull Requests i Forks
└── Usa Cheat Sheet per a comandes avançades
```

---

## 💻 Usar els tutorials mentre practiques

### Configuració recomanada de pantalla

**Windows**:
```
┌─────────────────────────────────────┐
│        Monitor o dual monitor        │
├──────────────────────┬──────────────┤
│                      │              │
│   Tutorial markdown  │  VSCode      │
│   (navegador)        │  (Git repo)  │
│                      │              │
├──────────────────────┴──────────────┤
│         Terminal integrat           │
└─────────────────────────────────────┘
```

**Passos**:
1. Obrir navegador → `tutorial_git_html.html`
2. Obrir VSCode en la mateixa carpeta
3. Obrir terminal integrat: `Ctrl+` `
4. Seguir els passos del tutorial mentre escribes comandes

### macOS (similar a Windows)
```
1. Obre el navegador amb el tutorial HTML
2. Obre VSCode al costat
3. Terminal integrat: Cmd+` `
4. Practica mentre llig
```

---

## 🎮 Exercicis per a cada nivell

### Exercici 1: Primer repositori (30 minuts)
```bash
# Terminal integrat de VSCode
mkdir mi-primer-repo
cd mi-primer-repo
git init
echo "# Meu primer repositori" > README.md
git add .
git commit -m "Commit inicial"
git log --oneline
```

### Exercici 2: Repositori remote (1 hora)
```bash
# 1. Crear repositori en GitHub (web)
# 2. Copiar l'URL HTTPS
# 3. Terminal:
git remote add origin URL_AQUI
git branch -M main
git push -u origin main
# 4. Veure els canvis en GitHub (refresca la pàgina web)
```

### Exercici 3: Branques (1 hora)
```bash
# Crear branca
git checkout -b feature/nova-funcionalitat
echo "Nova funcionalitat" > feature.txt
git add .
git commit -m "Afegida nova funcionalitat"

# Tornar a main
git checkout main

# Fusionar
git merge feature/nova-funcionalitat
```

### Exercici 4: Pull Request (1-2 hores)
```bash
# 1. Fork un repositori en GitHub
# 2. Clonar la teva còpia
git clone URL_DEL_FORK
# 3. Crear branca
git checkout -b bugfix/arreglament
# 4. Fer canvis i commits
# 5. Pujar
git push origin bugfix/arreglament
# 6. A GitHub: crear Pull Request
```

---

## 📚 Flux de lectura recomanat

### Per a principiants

```
1. INDEX.md
   └─ Entendre la estructura

2. guia_rapida_principiants.md
   └─ Els primers 10 passos

3. Instal·la Git
   └─ Seguin les instruccions

4. Fes Exercici 1 i 2
   └─ Practica bàsic

5. Tutorial Complet → Primeres passes
   └─ Aprèn els conceptes

6. Tutorial Complet → Terminal vs GUI
   └─ Escull el que prefereixis

7. Cheat Sheet com a referència
   └─ Per a comandes
```

### Per a desenvolupadors amb experiència

```
1. INDEX.md → busca per categoria
   
2. Tutorial Complet → seccions rellevants
   
3. Exemples Pràctics → projectes 3-5
   
4. Cheat Sheet → comandes avançades
```

---

## 🔍 Com buscar informació

### Si vols saber com fer...

1. **Obrir INDEX.md**
2. **Busca per paraula clau** a la secció "Busca ràpida"
3. **Segueix el link** al fitxer recomanat
4. **Consulta la secció** indicada

### Exemples:

- Crear repositori local:
  - INDEX.md → "Busca ràpida" → "I" → "Inicialitzar"
  
- Col·laborar en equip:
  - INDEX.md → "Busca ràpida" → "C" → "Colaboració"
  
- Resoldre conflictes:
  - Tutorial Complet → Busca "conflicte" (Ctrl+F)
  
- Comanda específica:
  - Cheat Sheet → Busca la categoria

---

## 🎓 Estudi progressiu

### Setmana 1: Bases
- [ ] Instal·lar Git
- [ ] Configurar Git
- [ ] Crear repositori local
- [ ] Fer commits
- [ ] Crear repositori remot en GitHub
- [ ] Pujar canvis a GitHub

### Setmana 2: Branques
- [ ] Crear branques
- [ ] Canviar entre branques
- [ ] Fusionar branques
- [ ] Resoldre conflictes simples
- [ ] Eliminar branques

### Setmana 3: Col·laboració
- [ ] Clonar repositori d'altres
- [ ] Treballar en equip
- [ ] Crear Pull Requests
- [ ] Review canvis dels altres
- [ ] Fusionar PR

### Setmana 4: Avançat
- [ ] Fork repositoris
- [ ] Contribuir a open-source
- [ ] Rebase interactiu
- [ ] Gestio de branques en producció
- [ ] Signar commits

---

## 💡 Consells per aprendre millor

### 1. Practica regularment
```
No només llegir, sinó FAZER
Cada dia, almenys 30 minuts practicant
```

### 2. Commiteaja cada canvi petit
```
Millor 5 commits pequeños que 1 gran commit
```

### 3. Experimenta sense por
```
Git és segur, pots desfer qualsevol canvi
Practica en repositoris de testing
```

### 4. Llig l'historial dels teus commits
```bash
git log --oneline --graph
```

### 5. Juga amb les branques
```bash
git branch
git log --all --graph
```

### 6. Usa el Cheat Sheet diàriament
```
Copia comandes del Cheat Sheet
Adapta-les als teus projectes
Practica fins que les memoritzis
```

---

## 🚨 Problemes comuns

### Problema: No sé per on começar
**Solució**: 
1. Llig INDEX.md
2. Segueix la ruta recomada pel teu nivell
3. No intents apendre-ho tot a la vegada

### Problema: Alguna cosa no funciona
**Solució**:
1. Busca el tema en INDEX.md → "Busca ràpida"
2. Llig la secció de "Solució de problemes"
3. Consulta el Cheat Sheet
4. Googla l'error exacte

### Problema: Oblit el que he apès
**Solució**:
1. Torna al Cheat Sheet
2. Practica de nou l'exercici
3. Llig la secció corresponent del tutorial

### Problema: Vull aprender més
**Solució**:
1. Fes els Exemples Pràctics complets
2. Contribueix a projectes open-source
3. Consulta la documentació oficial
4. Segueix tutorials avançats en línia

---

## 📞 Recursos d'ajuda

### Dins dels tutorials
- Cheat Sheet: Per a comandes
- Tutorial Complet: Per a explicacions detallades
- Exemples Pràctics: Per a casos reals
- INDEX.md: Per a navegació

### Online
- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/git)
- [Learn Git Branching](https://learngitbranching.js.org/)

---

## ✅ Checklist: He acabat els tutorials?

- [ ] Lleg el INDEX.md completament
- [ ] Escolleg el tutorial adequat pel meu nivell
- [ ] Instal·lag Git correctament
- [ ] Feg el primer repositori local
- [ ] Creag un repositori a GitHub
- [ ] Pujag canvis a GitHub
- [ ] Entenc els 4 estats de Git
- [ ] Puc crear i fusionar branques
- [ ] Puc col·laborar amb altres
- [ ] Puc resoldre conflictes
- [ ] Conec les comandes bàsiques de memòria
- [ ] Sé on trobar ajuda ràpidament

**Si tens tota la checklist: FELICITATS! 🎉 Ja saps usar Git i GitHub!**

---

## 🎓 Següents passos

Una vegada domines Git:

1. **Projectes reals**: Crea els teus projectes personals
2. **Open-source**: Contribueix a projectes de tercers
3. **CI/CD**: Aprèn sobre integració contínua
4. **Avançat**: Rebase, cherry-pick, reflog
5. **Administrador**: Gestio de repositoris grans

---

## 📝 Notes personals

Espai per a escriure les teves notes mentre aprens:

```
[Deixa aquest espai per a les teves anotacions]
```

---

## 🎯 Última revisió

- Data: 8 de gener de 2026
- Versió: 1.0
- Idioma: Català
- Nivells coberts: Principiant a Avançat
- Hores d'estudi recomanades: 20-40 hores

---

**Bona sort! Recorda que l'única manera d'aprendre Git és usant-lo cada dia.** 🚀

*"Committed to your success!" - El teu tutorial de Git*
