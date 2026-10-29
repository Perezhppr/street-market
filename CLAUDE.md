# Street Market — catálogo web de streetwear y diseñador (Lima)

## Qué es
Catálogo web de una página para **Street Market** (Instagram @streetmarket.pe, TikTok @streetmarketpe), boutique de streetwear y ropa de diseñador en Lima. Muestra piezas destacadas transcritas de sus posts públicos de Instagram (nombre, color, talla y precio en S/). Cada ficha enlaza a su post original, donde el cliente confirma la disponibilidad. **No hay flujo de WhatsApp**: el contacto es por Instagram y TikTok.
- Stack: HTML + CSS + JS estáticos, sin build ni dependencias (`index.html`, `styles.css`, `app.js`, `assets/*.webp`). Fuentes de Google: Space Grotesk, Manrope, DM Mono. Fondo casi negro (`#0a0a0b`).
- Repo `Perezhppr/street-market`, rama `main`. **El repo es PÚBLICO** (lo normal en Hugo es privado; no se cambió).
- Carpeta local: `~/Desktop/Proyectos/Webstreet-market` (se renombró el 2026-10-28; antes era `street-market`, y el repo sigue llamándose `street-market`).
- URL publicada: ninguna que funcione (ver Estado actual).
- Si es un encargo de la tienda o una propuesta para venderle: (por confirmar con Hugo).

## Estado actual (2026-10-28)
- v1 terminada el 2026-10-04 y sin cambios desde entonces: hero, cinta de categorías, catálogo con 3 piezas AMIRI (2 polos y unas zapatillas Skel Low), sección "La tienda", sección de scroll "Un look, cuatro capas" (las 4 capas del look aparecen al bajar) y contacto.
- **No está en línea.** El README dice que se publica con GitHub Pages desde `main` (raíz), pero https://perezhppr.github.io/street-market/ responde 404 (`curl -sI` del 2026-10-28). No hay `.deploy/web-en-linea.json` ni Dockerfile, así que nunca pasó por el Dokploy de Hugo. Las notas viejas de `dockploycontext` no la mencionan.
- Sin `noindex`.

## Decisiones y porqués
- Productos, tallas y precios solo de lo que está publicado en su Instagram, y cada ficha enlaza al post original, porque los precios pueden cambiar y la disponibilidad la confirma la tienda (README).
- Sitio estático sin build para servirlo directo desde GitHub Pages (README).
- Con `prefers-reduced-motion` no hay animación de scroll: las 4 capas del look se muestran de una vez.

## Cómo trabajar aquí
- Ver en local: en la carpeta, `python3 -m http.server 4174` y abrir http://localhost:4174 (el README trae el comando de Windows, `python -m http.server 4174`).
- Productos: el arreglo `products` al inicio de `app.js` (nombre, color, categoría, talla, precio, imagen, alt y enlace al post). Las fotos van en `assets/` como `.webp` optimizado. El texto "03 PIEZAS DESTACADAS" de `index.html` está escrito a mano: cámbialo si cambia la cantidad.
- Publicar: con la skill `web-en-linea` (Dokploy, Hugo Cloud, `<slug>.hugorocha.pe`, cada push a `main` se despliega solo). Ojo: la skill pide repo privado y Dockerfile (Nginx en el 8080 con `/healthz`); este repo es público y no tiene Dockerfile. Decidirlo con Hugo antes de publicar.
- Docker Desktop está cerrado por defecto: ábrelo solo para probar la imagen y apágalo al terminar.

## Pendiente
- Hugo: decidir si la web sigue (¿propuesta?, ¿la aprobó la tienda?) y dónde vive: GitHub Pages (hoy da 404) o Dokploy con `web-en-linea`. (por confirmar con Hugo)
- Hugo: si va a Dokploy, decidir si el repo pasa a privado, que es lo que pide la skill.
- Claude: el `<dialog id="product-dialog">` de `index.html` no lo abre nada (las fichas enlazan directo a Instagram). Quitarlo o conectarlo.
- Claude: pasar el README a macOS (`python3`) y a la forma de publicar que se elija.
- El catálogo tiene solo 3 piezas. ¿Ampliarlo con más posts? (por confirmar con Hugo)

## Registro
- 2026-10-04: se construyó y subió la web completa en una tarde (README, `index.html`, `styles.css`, `app.js`). Después se cambiaron las fotos por versiones `.webp` optimizadas (hero y 3 productos). Son 6 commits, de `def6872` a `639e764`.
- 2026-10-28: tras la migración de Windows al Mac se creó este `CLAUDE.md` con lo que se dedujo del código, el README y el `git log`. GitHub Pages da 404. La carpeta local pasó a llamarse `Webstreet-market`.
