# Little Playroom Cafe Website

Static website with Express server for contact form email (Nodemailer) and optional Google Calendar integration.

## Quick start (for the new owner)

1. **Install Node.js** (v14 or newer): https://nodejs.org

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Copy `.env.example` to `.env`
   - Edit `.env` and set `GMAIL_APP_PASSWORD` (see [Gmail App Passwords](https://myaccount.google.com/apppasswords))

4. **Run locally**
   ```bash
   npm start
   ```
   Or with auto-reload: `npm run dev`  
   Site: http://localhost:3000

5. **Contact form email**  
   The server sends form submissions from `playroommadison@gmail.com`. Use your own Gmail and App Password in `.env` if you change ownership.

## Project structure

- `index.html`, `pages/` – main pages
- `js/` – scripts (footer loader, calendar config, etc.)
- `content/`, `data/` – editable content
- `server.js` – Express server and `/api/send-email` endpoint
- `netlify.toml` – Netlify config if you deploy there

## Deploying

- **Static only:** Upload the folder (excluding `node_modules`, `.env`) to any static host. Contact form will not work without the server.
- **With server:** Deploy to a Node host (e.g. Heroku, Railway, Render) and set `GMAIL_APP_PASSWORD` (and optionally `PORT`) in the host’s environment variables.
- **Netlify:** Configure serverless/backend per Netlify docs if you need the email API there.

## Handoff checklist (for current owner)

When giving this project to someone else:

1. **Do not share** your `.env` file or any real passwords.
2. **Share the code** by one of:
   - **Zip:** Zip the project folder but **exclude** `node_modules` and `.env`. They run `npm install` and create their own `.env` from `.env.example`.
   - **Git:** Push to GitHub/GitLab (ensure `.gitignore` is in place so `.env` and `node_modules` are not committed). They clone and then `npm install` and add `.env`.
3. **Tell them** to read this README and set up their own `GMAIL_APP_PASSWORD` (and Google Calendar keys if they use that feature).
4. **Optional:** Share short notes on where the site is currently hosted, domain, and any accounts they need to take over.
