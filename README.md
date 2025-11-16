
# Sexy.web3loots - Landing page (static)

This is a small, responsive single-page landing template for `Sexy.web3loots`.
Files included:
- index.html
- styles.css
- script.js
- README.md

Instructions:
1. Replace `favicon.png` with your favicon (optional).
2. Replace the Formspree action in `index.html` with your actual Formspree endpoint.
3. Serve locally: `python -m http.server 8000` then open http://localhost:8000
4. Deploy to GitHub Pages / Netlify / Vercel for live hosting.

If you want additional changes (logo, colors, wallet connect demo), tell me and I will update the files.


# Sexy.web3loots - Landing page (static) — UPDATED

What's new in this package:
- Simple SVG logo (logo.svg)
- colors.css — a light-theme example and instructions how to use it
- Updated README with step-by-step deploy & DNS instructions

### Quick edits you might want to do
- Replace `favicon.png` and `logo.svg` with your real assets.
- In `index.html` replace Formspree action: `https://formspree.io/f/yourFormId` with your actual endpoint.
- To enable the light theme, add `class="light"` to the `<body>` tag and include `colors.css` after `styles.css`:
  ```html
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="colors.css" />
  <body class="light">
  ```

### Deploy (GitHub Pages)
1. Create a GitHub repo (public or private with Pages enabled).
2. Commit all files and push to `main` branch.
3. In GitHub repo → Settings → Pages → Set branch `main` and folder `/ (root)` → Save.
4. Wait a few minutes; your site will be available at `https://<your-username>.github.io/<repo-name>/`

### Deploy (Netlify / Vercel)
- Connect your Git repository to Netlify or Vercel and deploy. Both will automatically provide HTTPS.
- For Netlify, you can also drag-and-drop the site folder to the Netlify Sites dashboard for an instant deploy.

### Custom domain (Sexy.web3loots.com)
1. In your hosting (Netlify/ Vercel / GitHub Pages) add `Sexy.web3loots.com` as a Custom Domain.
2. In your domain provider DNS settings add either:
   - **CNAME** record for `Sexy.web3loots.com` → `<your-hosting-provider-assigned-domain>` (common for Netlify)
   - or **A** records (if provider gave IP addresses) for `Sexy.web3loots.com` → `A` record values provided by host.
3. Wait for DNS propagation (usually minutes to a few hours).
4. Enable automatic HTTPS (most hosts provide Let's Encrypt automatically).

### Formspree setup
1. Create an account at https://formspree.io and create a form to get your endpoint (looks like `https://formspree.io/f/xxxxx`).
2. Replace the `action` attribute in `index.html` with that endpoint.
3. Test the form by submitting once — Formspree will send a confirmation to your email and deliver form submissions.

---
If you want, I can:
- Replace the svg logo with a custom PNG/SVG you upload.
- Change the accent color to any hex you prefer.
- Add a MetaMask / WalletConnect demo block into the hero.
Tell me which and I will update the package again.
