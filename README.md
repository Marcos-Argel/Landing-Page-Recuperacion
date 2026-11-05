# Landing Page — Recuperación

Landing page de portafolio de servicios hecha con **React + Vite + Tailwind CSS**.

## Cómo correr el proyecto

```bash
git clone https://github.com/Marcos-Argel/Landing-Page-Recuperacion.git
cd Landing-Page-Recuperacion
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (por defecto http://localhost:5173).

## Equipo y ramas

| Integrante | Rama | Tarea |
| --- | --- | --- |
| Luis Vergara | `luis` | Proyecto base, Navbar, Footer y componentes (#1) |
| Santiago Cogollo | `santiago` | Hero y Servicios (#2) |
| Juan Pablo Parra | `juan-parra` | Portafolio (#3) |
| Juan Pablo Padilla | `juan-padilla` | Equipo, Preguntas frecuentes, Contacto y WhatsApp (#4) |
| Marcos Argel | `marcos` | Proceso, Precios y Testimonios (#5) — líder |

## Cómo trabajar

1. Antes de empezar y antes de subir, actualiza tu rama:
   ```bash
   git checkout TU_RAMA
   git pull origin main
   ```
2. Tu sección va en `src/components/sections/` y debe usar el `id` que está en `src/data/navLinks.js`
   (`inicio`, `servicios`, `portafolio`, `proceso`, `precios`, `equipo`, `contacto`).
3. En `src/pages/Home.jsx` reemplaza el bloque temporal de tu sección por tu componente.
4. Usa los componentes de `src/components/ui/`: `Button`, `Card` y `SectionTitle`.
   Los colores del proyecto están en `src/index.css` (`primary`, `ink`, `soft`).
5. Prueba con `npm run dev` que el menú lleve a tu sección.
6. Sube a tu rama (`git push origin TU_RAMA`) y abre un **Pull Request hacia `main`** con `Closes #N` en la descripción.

Nadie sube directo a `main`: todo pasa por Pull Request y revisión.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Versión para producción |
| `npm run lint` | Revisa el código |
