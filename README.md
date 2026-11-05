# Landing Page — Recuperación · Urabá Dev

Landing page de portafolio de servicios para **Urabá Dev**, una empresa ficticia de desarrollo web y software. Está hecha con **React + Vite + Tailwind CSS**.

**Página publicada:** https://marcos-argel.github.io/Landing-Page-Recuperacion/

![Estado](https://img.shields.io/badge/estado-terminado-0f766e) ![React](https://img.shields.io/badge/React-19-61dafb) ![Vite](https://img.shields.io/badge/Vite-8-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)

## Contenido

- [Qué tiene la página](#qué-tiene-la-página)
- [Tecnologías](#tecnologías)
- [Cómo correr el proyecto](#cómo-correr-el-proyecto)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Cómo cambiar los textos](#cómo-cambiar-los-textos)
- [Equipo y ramas](#equipo-y-ramas)
- [Cómo trabajamos](#cómo-trabajamos)
- [Publicación en GitHub Pages](#publicación-en-github-pages)
- [Scripts](#scripts)

## Qué tiene la página

| Sección | Qué muestra | Archivo |
| --- | --- | --- |
| Menú | Enlaces a cada sección, menú hamburguesa en celular | `layout/Navbar.jsx` |
| Inicio | Mensaje principal y botón "Cotiza ya" | `sections/Hero.jsx` |
| Servicios | Tarjetas con los servicios que ofrecemos | `sections/Services.jsx` |
| Portafolio | Proyectos de ejemplo con sus tecnologías | `sections/Portfolio.jsx` |
| Proceso | Pasos de cómo trabajamos con un cliente | `sections/Process.jsx` |
| Precios | Tres planes (Básico, Profesional y Empresarial) | `sections/Pricing.jsx` |
| Testimonios | Opiniones de clientes | `sections/Testimonials.jsx` |
| Equipo | Los 5 integrantes con su rol | `sections/Team.jsx` |
| Preguntas frecuentes | Preguntas que se abren y cierran | `sections/FAQ.jsx` |
| Contacto | Formulario con validación que abre WhatsApp con el mensaje | `sections/Contact.jsx` |
| Pie de página | Correo, teléfono y redes | `layout/Footer.jsx` |
| WhatsApp | Botón verde flotante en la esquina | `ui/WhatsAppButton.jsx` |

La página es **responsive**: se adapta a celular, tableta y computador.

## Tecnologías

| Herramienta | Para qué se usa |
| --- | --- |
| [React 19](https://react.dev) | Construir la página por componentes |
| [Vite 8](https://vite.dev) | Servidor de desarrollo y compilación |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos con clases utilitarias |
| [oxlint](https://oxc.rs) | Revisar errores en el código |
| GitHub Actions + GitHub Pages | Publicar la página automáticamente |
| Jira | Repartir y seguir las tareas del equipo |

## Cómo correr el proyecto

Necesitas **Node.js 20.19 o superior** (recomendado Node 22) y **Git**.

```bash
git clone https://github.com/Marcos-Argel/Landing-Page-Recuperacion.git
cd Landing-Page-Recuperacion
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (por defecto http://localhost:5173).

## Estructura de carpetas

```
Landing-Page-Recuperacion/
├── .github/workflows/deploy.yml   # Publica la página en GitHub Pages
├── public/                        # Archivos que se copian tal cual (ícono)
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar y Footer
│   │   ├── sections/              # Una sección de la página por archivo
│   │   └── ui/                    # Button, Card, SectionTitle, WhatsAppButton
│   ├── data/                      # Textos y datos de cada sección
│   ├── pages/Home.jsx             # Arma la página con todas las secciones
│   ├── index.css                  # Tailwind y colores del proyecto
│   ├── App.jsx
│   └── main.jsx
├── index.html                     # Título de la pestaña
├── package.json
└── vite.config.js
```

## Cómo cambiar los textos

Casi todo el contenido está en `src/data/`, separado del diseño. Para cambiar un texto no hace falta tocar los componentes.

| Quiero cambiar… | Archivo |
| --- | --- |
| Nombre de la empresa, correo, teléfono y WhatsApp | `src/data/siteConfig.js` |
| Enlaces del menú | `src/data/navLinks.js` |
| Servicios | `src/data/services.js` |
| Proyectos del portafolio | `src/data/projects.js` |
| Pasos del proceso | `src/data/process.js` |
| Planes y precios | `src/data/pricing.js` |
| Testimonios | `src/data/testimonials.js` |
| Integrantes del equipo | `src/components/sections/Team.jsx` (arreglo `teamMembers`) |
| Preguntas frecuentes | `src/components/sections/FAQ.jsx` (arreglo `questions`) |
| Colores | `src/index.css` (`primary`, `primary-dark`, `ink`, `soft`) |

**WhatsApp:** en `siteConfig.js`, el número va en formato internacional, solo dígitos y sin `+` ni espacios (ej: `573001234567`). Si se deja vacío, el botón queda deshabilitado.

**Fotos del equipo:** pon las imágenes en `public/team/` y cambia `photo: null` por la ruta (ej: `'team/nombre.jpg'`). Mientras no haya foto se muestran las iniciales.

**Nueva sección:** crea el componente en `src/components/sections/`, agrega su `id` en `navLinks.js` y añade una línea en el objeto `secciones` de `src/pages/Home.jsx`.

## Equipo y ramas

| Integrante | Rama | Tarea | Estado |
| --- | --- | --- | --- |
| Marcos Argel | `marcos` | Líder: Jira, GitHub, revisión de PR y despliegue (#6). Proceso, Precios y Testimonios (#5) | ✅ |
| Luis Vergara | `luis` | Proyecto base, Navbar, Footer y componentes (#1) | ✅ |
| Santiago Cogollo | `santiago` | Hero y Servicios (#2) | ✅ |
| Juan Pablo Parra | `juan-parra` | Portafolio (#3) | ✅ |
| Juan Pablo Padilla | `juan-padilla` | Equipo, Preguntas frecuentes, Contacto y WhatsApp (#4) | ✅ |

Las tareas se organizaron en Jira (espacios **LPR** para el desarrollo y **ENT** para las entregas) y en los Issues de GitHub.

## Cómo trabajamos

1. Antes de empezar y antes de subir, actualiza tu rama:
   ```bash
   git checkout TU_RAMA
   git pull origin main
   ```
2. Tu sección va en `src/components/sections/` y debe usar el `id` que está en `src/data/navLinks.js`
   (`inicio`, `servicios`, `portafolio`, `proceso`, `precios`, `equipo`, `faq`, `contacto`).
3. Usa los componentes de `src/components/ui/` (`Button`, `Card` y `SectionTitle`) y los colores del proyecto.
4. Prueba con `npm run dev` que el menú lleve a tu sección y que se vea bien en celular.
5. Sube a tu rama y abre un **Pull Request hacia `main`** con `Closes #N` en la descripción:
   ```bash
   git add .
   git commit -m "Describe tu cambio"
   git push origin TU_RAMA
   ```
6. El líder revisa el Pull Request y, si está bien, lo une a `main`.

**Reglas:**
- Nadie sube directo a `main`: la rama está protegida y todo pasa por Pull Request con 1 aprobación.
- Cada integrante trabaja solo en su rama.
- No se cambian `Button` ni `Navbar` sin avisar, porque los usa todo el equipo.

## Publicación en GitHub Pages

La página se publica sola. Cada vez que algo entra a `main`, el flujo `.github/workflows/deploy.yml`:

1. Instala las dependencias con `npm ci`.
2. Compila el proyecto con `npm run build`.
3. Sube la carpeta `dist` a GitHub Pages.

En 1 o 2 minutos los cambios se ven en https://marcos-argel.github.io/Landing-Page-Recuperacion/. El avance se puede ver en la pestaña **Actions** del repositorio.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Versión para producción (carpeta `dist`) |
| `npm run preview` | Muestra la versión compilada |
| `npm run lint` | Revisa el código |

---

© 2026 Urabá Dev — Proyecto académico, Politécnico Colombiano Jaime Isaza Cadavid.
