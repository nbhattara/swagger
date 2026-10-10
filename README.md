# API Docs

Static Swagger UI site. No build step.

    index.html          page shell
    css/styles.css      styling (light/dark)
    js/app.js           Swagger UI setup + list of specs
    openapi/            put your OpenAPI .yaml/.json here
    .github/workflows/  auto-deploys to GitHub Pages

## Update the docs
1. Replace `openapi/openapi.yaml` with your spec.
2. Commit and push to `main`.

## Share with your team
GitHub: Settings > Pages > Source: **GitHub Actions**. After the first push the docs are live at
`https://<org-or-user>.github.io/<repo>/` (private Pages needs GitHub Enterprise Cloud).

## Preview locally
    python3 -m http.server 8000
Open http://localhost:8000 (opening index.html directly will not load the spec).

## Multiple specs
Add entries to `SPECS` in `js/app.js`; a dropdown appears automatically.
