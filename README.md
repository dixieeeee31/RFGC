# RFGC website

Richville Federated Group of Companies — website design prototype.

## Folder structure

```
rfgc-website/
├── index.html          All pages (Home, About, Properties, Hospitality, Leasing,
│                       Commercial, Our impact, News, Careers, Contact, property pages)
├── css/style.css       All styles, scoped to .rfgc
├── js/main.js          Page navigation, mobile menu, inquiry button
├── images/             All photographs and the logo
└── CONTENT-NEEDED.md   Copy and photos still to be supplied
```

## Replacing photos

Every photo is loaded from `images/` by filename. To swap one, upload a new
file with the **exact same name** and it updates on every page that uses it.
Keep photos under about 300 KB (JPG, 1600–2000 px wide) so pages load quickly.

Current files:

- `rfgc-richville-federated-group-of-companies-logo.png`
- `rfgc-lobby-interior.jpg`
- `the-one-richville-place.jpg`
- `vivere-hotel-and-resorts-exterior.jpg`
- `the-one-p-campa.jpg`
- `richville-corporate-center.jpg`
- `vivere-sta-rosa.jpg`
- `richville-corporate-tower.jpg`
- `vivere-azure.jpg`
- `amari-el-nido-by-vivere.jpg`
- `the-one-santo-tomas.jpg`
- `the-one-p-campa-2.jpg`
- `the-one-dasma-place.jpg`
- `legarda-suites.jpg`
- `e-g-galeria-suites-p-noval.jpg`
- `mayon-galeria-suites.jpg`

New properties or photos: add the file to `images/`, then in `index.html`
set `src="images/your-file.jpg"` on the image.

## Publishing on GitHub Pages

1. Upload the **contents** of this folder (not the folder itself) to the
   repository root, so `index.html` sits at the top level next to `css/`,
   `js/`, and `images/`.
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `(root)` → Save.

## Notes

- Fonts (Source Serif 4, Inter) load from Google Fonts.
- Contact and inquiry forms are front-end only and don't send yet.
- Open `index.html` directly in a browser to preview locally.
