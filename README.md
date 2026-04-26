# SmartRose Portfolio

Static website for the SmartRose research portfolio: HTML, CSS, JavaScript, and images. No build step.

**Repository:** [github.com/25-26J-299/smartrose-portfolio](https://github.com/25-26J-299/smartrose-portfolio)

## Project layout

- `index.html` — main page
- `styles.css` — site styles
- `script.js` — client-side behavior
- `images/` — image assets
- `netlify.toml` / `vercel.json` — deployment settings

## Run locally

From this directory:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in your browser. You can use another port if 8080 is busy.

## Deploy

Push to `main` on this repo, then connect the site to a host of your choice.

### Vercel

1. In [Vercel](https://vercel.com/), import [this GitHub repository](https://github.com/25-26J-299/smartrose-portfolio).
2. Framework preset: **Other**.
3. Build command: leave **empty**.
4. Output directory: **`.`** (project root).
5. Deploy.

### Netlify

1. In [Netlify](https://www.netlify.com/), add a new site from this Git repository.
2. Build command: leave **empty**.
3. Publish directory: **`.`** (project root).
4. Deploy.

### GitHub Pages

1. In the repository on GitHub, open **Settings → Pages**.
2. Set source to the **`main`** branch and the **/ (root)** folder.
3. Save; the static files are served as the site.

## Related SmartRose repositories

Other components (for example Freshness Monitoring) live in their own org repositories under [github.com/25-26J-299](https://github.com/25-26J-299); this repo is only the public portfolio site.
