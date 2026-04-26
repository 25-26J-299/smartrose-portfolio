# SmartRose Portfolio (Modern Static Site)

This is a clean, original website for the SmartRose research portfolio.

## Run locally

From this folder:

```bash
python3 -m http.server 8090
```

Then open:

- http://localhost:8090

## Deploy options

## 1) Vercel (recommended)

1. Create a GitHub repo and push this `smartrose-portfolio` folder.
2. In [Vercel](https://vercel.com/), import the repo.
3. Framework preset: **Other**.
4. Build command: *(leave empty)*.
5. Output directory: `.`.
6. Deploy.

## 2) Netlify

1. Push to GitHub.
2. In [Netlify](https://www.netlify.com/), add new site from Git.
3. Build command: *(leave empty)*.
4. Publish directory: `.`.
5. Deploy.

## 3) GitHub Pages

1. Push to a repo.
2. In repo settings, enable Pages from branch (`main`) and folder (`/root`).
3. Site will be served as static files.
