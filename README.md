# Palo Accounting — Website + Chatbot

Palo Accounting is a accounting firm focused on providing bookkeeping, tax preparation, payroll, and advisory services for local businesses and professionals. This repository contains a marketing website for Palo Accounting plus an integrated support chatbot prototype that can answer accounting questions and route users to human support.

---

**Contents**

- Overview and business description
- What’s included in this repo
- How to run (frontend + backend)
- Chatbot: frontend & backend technical details
- Environment variables and security
- Troubleshooting (AI quota / 429 errors)
- Next steps & recommended improvements

---

**Palo Accounting (short)**

Palo Accounting provides practical, timely accounting and tax services to help small businesses run efficiently and stay compliant. Services typically include:
- Bookkeeping and IFRS/GAAP-aligned transaction recording
- Tax filing and compliance for small businesses and sole proprietors
- Payroll setup and processing
- Financial reporting and advisory

The site text should be professional, accessible and helpful to non-technical business owners.

---

**What’s in this repository**

- `index.html`, `services.html`, `blog.html` — main marketing pages
- `service-details.html`, `service-details.js` — single-template service detail renderer
- `blog-details.html`, `blog-details.js` — single-template blog reader renderer
- `style.css`, `script.js` — site styles and UI helpers
- `chatbot-ui.js`, `chatbot-main.js`, `chatbot-engine.js`, `chatbot-flows.js` — chatbot frontend UI, flows and logic
- `chatbot-backend/` — Express backend that proxies requests to Google Generative AI
	- `chatbot-backend/server.js` — server code that calls the Generative AI SDK
	- `chatbot-backend/package.json` — backend dependencies
	- `chatbot-backend/.env` — environment variables (do not commit)
- `images/` — project images used on pages

---

**How to run (local development)**

Frontend

The frontend is static HTML/CSS/JS. To run locally you can open `index.html` in a browser (file://) or serve the folder with a simple static server.

Commands (PowerShell / macOS / Linux):

```bash
# from repo root
# Option A: open file directly (quick test)
start index.html      # Windows PowerShell

# Option B: serve files with a simple node server (install http-server globally first)
npm install -g http-server
http-server -c-1 . -p 8080
# then open http://localhost:8080
```

Backend (chatbot)

The chatbot backend is a small Node.js Express app that forwards user prompts to the Google Generative AI API. It requires a Google API key with access to Generative Language.

Commands:

```bash
cd chatbot-backend
npm install
# create .env with GEMINI_API_KEY and optionally PORT
# Example .env (do NOT commit):
# GEMINI_API_KEY=YOUR_GOOGLE_API_KEY
# PORT=3000
npm start
```

By default the frontend expects the backend at `http://localhost:3000/chat`. If you change `PORT` in `.env`, update the fetch target in `chatbot-engine.js` accordingly.

---

**Chatbot — Overview**

The site includes a client-side chatbot widget and a backend proxy that calls Google Generative AI. The chatbot is designed as an advisory/FAQ assistant scoped to accounting topics.

Frontend files and responsibilities:
- `chatbot-ui.js` — message rendering, carousel cards, inline options
- `chatbot-main.js` — DOM wiring: input box, send button, quick-action buttons, date header
- `chatbot-engine.js` — flow rendering and state machine; handles AI mode enable/disable and posts to backend
- `chatbot-flows.js` — conversation flows data (WELCOME, services, language options, carousel items)

Backend files and responsibilities:
- `chatbot-backend/server.js` — Express endpoint `POST /chat` that calls the Generative AI SDK. It reads `GEMINI_API_KEY` from `process.env`.
- `chatbot-backend/package.json` — lists dependencies. The server uses ES modules (`type: module`) so Node 18+ is recommended.

Where to change the model & system prompt
- The server selects the generative model name inside `chatbot-backend/server.js`. To change models or adjust the system prompt, edit that file.
- The project currently includes a structured system prompt to keep responses focused. Adjust this prompt in `server.js` if you need different tone/length.

---

**Environment variables**

Create a `chatbot-backend/.env` with:

```
GEMINI_API_KEY=YOUR_GOOGLE_API_KEY
PORT=3000
```

Important: never commit API keys. Add `chatbot-backend/.env` to `.gitignore`:

```bash
# from repo root
echo "chatbot-backend/.env" >> .gitignore
```

If you've already committed `chatbot-backend/.env`, remove it from git history and rotate the key immediately.

---

**Common issues & troubleshooting**

1) 429 Quota exceeded ("limit: 0")
- Symptoms: Backend logs show a GoogleGenerativeAIFetchError with HTTP 429 and message "Quota exceeded; limit: 0".
- Meaning: the Google Cloud project or API key currently has no quota for the Generative API. You must either enable billing or use a project that has the free quota enabled.
- Quick checks:
	- Use the Google API model list endpoint to verify models and project access:

PowerShell example:

```powershell
Invoke-RestMethod -Uri "https://generativelanguage.googleapis.com/v1/models?key=$env:GEMINI_API_KEY" |
	Select-Object -ExpandProperty models |
	Select-Object name, supportedGenerationMethods
```

curl example:

```bash
curl "https://generativelanguage.googleapis.com/v1/models?key=YOUR_API_KEY"
```

- Fixes:
	- Enable billing for the Google Cloud project and ensure Generative AI API access is granted.
	- Use a different API key/project that has quota.
	- After enabling, retry and watch server logs for successful responses.

2) Backend port mismatch
- Make sure `PORT` in `chatbot-backend/.env` and the frontend fetch target (in `chatbot-engine.js`) match.

3) CORS / network
- If frontend and backend run on different hosts/ports, confirm CORS is allowed in `server.js` (the project already enables `cors()`).

4) Unhelpful AI answers
- The backend uses a structured system prompt. If answers are too short or rigid, relax the prompt in `chatbot-backend/server.js` or adjust max tokens/temperature there.

---

**Security & housekeeping**

- Do NOT commit `chatbot-backend/.env`. If an API key appears in the repo, rotate the key immediately.
- Add `chatbot-backend/.env` to `.gitignore`.
- Consider using environment-specific secrets (e.g., platform environment variables, Vault, or GitHub Secrets) for production.

---

**Developer notes & next improvements**

- Improve backend error reporting: return structured error messages so the frontend can show actionable guidance ("AI temporarily unavailable — enable billing or try again later").
- Add retry/backoff behavior for transient Google errors when `RetryInfo` is provided.
- Add server-side rate limiting and input sanitization.
- Add unit/integration tests for chatbot flows.
- Consider deploying the static site to Netlify/Vercel and the backend to a Node-friendly host (Render, Heroku, Google Cloud Run) with secure secrets.

---

If you want, I can:
- Remove a discovered API key from the repository and add `.env` to `.gitignore` (I can do that now if you confirm),
- Update `server.js` to return clearer error messages to the frontend,
- Add a short troubleshooting script to test API key & list models.

Tell me which of the optional items you want me to do next.