# Valeriu Prodan — professional portfolio

React portfolio with light and dark modes. The initial theme follows the system preference, with dark as the fallback when unavailable. The header toggle saves an explicit choice for later visits. System changes are followed until the visitor chooses a mode.

## Local development

From this directory:

```sh
npm install
npm run dev
```

If port 3000 is already occupied:

```sh
PORT=3001 BROWSER=none npm run dev
```

The scripts invoke React Scripts directly so the existing copied dependencies work even when `node_modules/.bin` is missing.

## Verification

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

## Pages

- `/`: professional introduction and selected impact.
- `/experience`: career and education, based on the supplied CV.
- `/projects`: selected academic and personal projects.
- `/beyond-work`: local photography gallery and real surfing footage.
- `/alternate-universe`: unlinked Easter egg featuring clearly labelled AI-generated singing. A comment in the HTML source reveals the route. It requests `noindex, nofollow`; it is publicly accessible, not an access-controlled page. Autoplay starts muted, with native controls and a sound button.

Old `/profesional`, `/pictures`, `/auth`, and `/real-estate` URLs redirect to relevant portfolio pages. The old authentication and Firebase-backed components remain in source for reference but are not imported by the active app. There are no Firebase requests or account requirements in the redesigned portfolio.

## Content and media

Professional content comes from `Valeriu Prodan CV.pdf`, supplied in October 2026. It lists Google employment through April 2026; the site does not imply current Google employment.

The downloadable CV is `public/Valeriu-Prodan-CV.pdf`. Gallery photos were selected from the existing `pictures_compressed` directory. Both supplied videos were converted to H.264/AAC, with reduced resolution and fast-start metadata for browser playback. Media files and posters are in `public/media`.

The existing `_redirects` provides SPA routing for compatible static hosts. A different host must also rewrite page routes to `index.html`.
