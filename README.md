# MOEDARE

Private landing for **moedare.se** — ALX / MOEDARE, Sweden.

This folder **is** the production site. There is no compile step. Open the files, or serve the directory.

## Preview

From this folder:

```bash
python3 preview.py
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Add a social URL

Edit [`socials.js`](socials.js) — the single source of truth, loaded by every page. Set `url` on the network you want live. Leave it as `""` to hide that network.

Confirmed live: **X**, **Instagram**, **Reddit**, **SoundCloud**, **YouTube**. TikTok stays hidden until a URL is added.

## Domain

Production domain: **moedare.se**

`CNAME` in this folder is already set to `moedare.se`. `.nojekyll` is included so GitHub Pages will not run Jekyll.

Asset paths are relative so the site works at the repository root on GitHub Pages.

## Shop

`shop.html` is a coming-soon page. No products, no cart.

## Stack

Handwritten HTML, CSS, and JS. System UI font stack. No framework, no tracker.
