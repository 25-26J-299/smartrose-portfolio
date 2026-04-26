# SmartRose (Portfolio & Freshness Monitoring)

**Freshness Monitoring (FM)** — freshness monitoring for the SmartRose project.

**Portfolio** — static site in this repo for the SmartRose research portfolio.

## Repository structure

- `iot/` — Arduino sketches and IoT firmware
- `ml/` — machine learning models and data processing
- `docs/` — documentation and specifications
- (site root) — HTML, CSS, JS, and assets for the public portfolio

## Run the portfolio locally

From this folder:

```bash
python3 -m http.server 8090
```

Then open [http://localhost:8090](http://localhost:8090).

## Deploy the static site

### 1) Vercel (recommended)

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/), import the repo.
3. Framework preset: **Other**.
4. Build command: *(leave empty)*.
5. Output directory: `.`.
6. Deploy.

### 2) Netlify

1. Push to GitHub.
2. In [Netlify](https://www.netlify.com/), add new site from Git.
3. Build command: *(leave empty)*.
4. Publish directory: `.`.
5. Deploy.

### 3) GitHub Pages

1. Push to a repo.
2. In repo settings, enable Pages from branch (`main`) and folder (`/root`).
3. The site is served as static files.

## FM development

For IoT, ML, and docs work, see the `iot/`, `ml/`, and `docs/` directories. Add project-specific setup and requirements there as the project grows.
