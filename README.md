# Ciberpunk Ecuador

Sitio web de Ciberpunk Ecuador construido con Next.js 16, React 19 y Tailwind CSS 4. El proyecto funciona como web de presentación, portafolio, materiales y servicios, con despliegue actual en Vercel.

## Estado actual

- Home, servicios, materiales, clases, portafolio, bolsa y sobre mí ya están actualizados.
- El portafolio usa miniaturas remotas reales desde sitios publicados y una imagen local de respaldo para algunos casos.
- La producción activa está en `https://cpunkec.vercel.app`.

## Desarrollo local

Requisitos:

- Node.js 20
- npm 10 o compatible

Instalación y arranque:

```bash
npm ci
npm run dev
```

La app queda en `http://localhost:3000`.

## Ejecución con contenedores

El proyecto usa una imagen de producción multi-stage y la salida `standalone` de Next.js. El proceso del contenedor se ejecuta con un usuario sin privilegios e incluye un healthcheck.

Construir y arrancar en segundo plano:

```bash
npm run docker:up
```

Con Podman:

```bash
npm run podman:up
```

Para detenerlo:

```bash
npm run docker:down
npm run podman:down
```

Servicio disponible en `http://localhost:3000`.

## Imágenes remotas del portafolio

Las miniaturas externas permitidas se configuran en [next.config.ts](/home/freudiandev/Documentos/dev/CiberPunk%20Ecuador/next.config.ts). Actualmente se aceptan imágenes de:

- `ladataec.com`
- `freudiandev.github.io`
- `www.impermeabilizacion.uio.ec`

Si agregas nuevos sitios al portafolio con miniaturas remotas, también debes agregar su dominio en `remotePatterns`.

## Scripts útiles

```bash
npm run dev
npm run lint
npm run build
npm run docker:up
npm run docker:down
npm run podman:up
npm run podman:down
```

## Deploy actual

La publicación activa se hace con Vercel. Un deploy manual puede hacerse con:

```bash
npx vercel --prod --yes
```

## Notas

- Hoy el proyecto no depende de una base de datos para mostrar contenido.
- El logo principal servido por el sitio vive en [1.jpg](/home/freudiandev/Documentos/dev/CiberPunk%20Ecuador/public/1.jpg).
- La data principal del portafolio vive en [portfolio.ts](/home/freudiandev/Documentos/dev/CiberPunk%20Ecuador/src/lib/portfolio.ts).
