# Ciberpunk Ecuador

Sitio web profesional para Ciberpunk Ecuador: desarrollo web, clases de programacion y materiales educativos interactivos desde Quito para Ecuador y Latinoamerica.

La direccion visual combina minimalismo profesional con una capa cyberpunk sobria: fondo tecnico, acentos neon, sombras animadas, bordes luminosos y componentes con movimiento ligero.

## Stack

- Next.js 16.2.1 con App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9 con `eslint-config-next`

## Estructura

- `src/app/`: rutas, layout global, estilos y paginas.
- `src/components/`: header, footer y CTA reutilizable.
- `src/lib/site.ts`: configuracion central del sitio, base path, URL publica y logo.
- `public/`: imagenes y assets publicos.
- `.github/workflows/deploy-pages.yml`: despliegue automatico a GitHub Pages.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Desarrollo Local

Instala dependencias:

```bash
npm install
```

Levanta el servidor local:

```bash
npm run dev
```

Si el servidor de desarrollo falla por artefactos `.next` con permisos incorrectos, limpia o corrige ownership de `.next/`. En esta maquina tambien puede aparecer un problema de Turbopack en CPUs sin instrucciones `bmi2`; para revisar visualmente puedes generar el build y servir `out/`:

```bash
npm run build
python3 -m http.server 3000 --directory out
```

## Variables de Entorno

| Variable | Uso | Ejemplo |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publica absoluta del sitio. | `https://freudiandev.github.io/cpunkec` |
| `NEXT_PUBLIC_BASE_PATH` | Subruta para despliegues como GitHub Pages. En Vercel normalmente se deja vacia. | `/cpunkec` |
| `NEXT_DIST_DIR` | Directorio de build alternativo para evitar conflictos locales. | `.next-local` |

## Despliegue

### GitHub Pages

El workflow incluido compila el sitio como export estatico y publica `out/`.

Variables configuradas en el workflow:

```bash
NEXT_PUBLIC_BASE_PATH=/cpunkec
NEXT_PUBLIC_SITE_URL=https://freudiandev.github.io/cpunkec
```

### Vercel

Para Vercel, usa el build normal de Next.js:

```bash
npx vercel
```

Para produccion:

```bash
npx vercel --prod
```

En Vercel normalmente no necesitas `NEXT_PUBLIC_BASE_PATH`. Si configuras `NEXT_PUBLIC_SITE_URL`, usa la URL publica final del proyecto.

## Calidad

Antes de publicar cambios:

```bash
npm run lint
npm run build
```

## Notas de Next.js

Este proyecto usa Next.js 16. Lee la documentacion local en `node_modules/next/dist/docs/` antes de cambiar APIs, configuracion o convenciones del framework.
