# Tanisha Gupta — Portfolio

Plain HTML, CSS and vanilla JavaScript. No build step, no npm, no frameworks.

## Preview locally
Double-click `index.html`. (Optional: run `python3 -m http.server` in this folder and open http://localhost:8000.)

## Edit content
- **Projects, experience, email, GitHub, LinkedIn:** `assets/js/data.js`. Set `linkedin` there and the LinkedIn link appears in the footer and on the contact page. Any project `live` or `github` left as `""` is hidden.
- **Hero text, stats, About page, skills:** edit the matching `.html` file.
- **Colors:** CSS variables at the top of `assets/css/style.css` (`:root` is dark, `[data-theme="light"]` is light).
- **Contact form:** it opens the visitor's email app (`mailto:`), so no server is needed.

## Deploy to GitHub Pages
1. Create a new repository on GitHub (for example `portfolio`) and push these files to the `main` branch with `index.html` at the repo root.
2. Open the repo's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Deploy to Netlify
1. Sign in at https://app.netlify.com.
2. **Add new site → Deploy manually**, then drag this whole folder onto the upload area. (Or choose **Import from Git** and pick your repo.)
3. Leave the build command empty and set the publish directory to `/` (the root).
4. Netlify gives you a `*.netlify.app` URL; rename it under **Site configuration → Change site name**.
