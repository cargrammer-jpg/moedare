# MOEDARE

Private landing for **moedare.se** — ALX / MOEDARE, Stockholm.

This folder **is** the production site. There is no compile step. Open the files, or serve the directory.

## Preview

From this folder:

```bash
python3 -m http.server 4173
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

ES modules need a local server — do not open `index.html` as a `file://` URL.

## Add a social URL

Edit [`js/socials.js`](js/socials.js). Set `url` on the network you want live. Leave it as `""` to hide that network.

```js
{ id: "instagram", label: "Instagram", url: "https://instagram.com/yourhandle" },
```

Confirmed live: **X** — [https://x.com/MOEDARE](https://x.com/MOEDARE).

Empty slots already exist for Instagram, Reddit, YouTube, and TikTok.

## Hero photograph

The cover is designed to hold without a car image. To drop one in later, place a file at either:

- `/car.jpg` (next to `index.html`), or
- `/public/car.jpg`

A landscape or 3:4 portrait of the Z4 M Coupe both work. The well crops with `object-fit: cover`.

## Domain

Production domain: **moedare.se**

`CNAME` in this folder is already set to `moedare.se`.

## GitHub Pages — `cargrammer-jpg/moedare`

Do not use a `dist` build. Publish this directory as the site root.

1. Create the repository [https://github.com/cargrammer-jpg/moedare](https://github.com/cargrammer-jpg/moedare) if it does not exist.
2. Push these files to the default branch (`main`).
3. GitHub → **Settings** → **Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
4. Under **Custom domain**, enter `moedare.se` and save. The `CNAME` file in this repo will keep it.
5. At the DNS host for `moedare.se`, point the domain at GitHub Pages:
   - Apex: four A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and AAAA `2606:50c0:8000::153` … `8003::153`), **or**
   - `www` CNAME to `cargrammer-jpg.github.io`, then redirect apex → www.
6. Wait for DNS, then enable **Enforce HTTPS**.

Because the custom domain is `moedare.se`, asset paths are root-absolute (`/css/site.css`). That is correct for Pages + custom domain. It is also correct for `python3 -m http.server` from this folder.

If you ever preview on `https://cargrammer-jpg.github.io/moedare/` *without* the custom domain, those root paths will 404 — attach `moedare.se` before treating that URL as canonical.

`.nojekyll` is included so GitHub Pages will not run Jekyll on the files.

## Shop

`/shop/` is a forthcoming page. No products, no cart, no Shopify. When the house is ready, replace `shop/index.html`.

## Stack

Handwritten HTML, CSS, and ES modules. Self-hosted Cormorant Garamond + IBM Plex Mono. No framework, no tracker, no cookie banner.
