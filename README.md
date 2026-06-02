# Palo Accounting - Website + AI Chatbot

![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Google%20Gemini-AI-blue?style=for-the-badge&logo=google)

Palo Accounting is a modern accounting firm website enhanced with an AI-powered chatbot assistant. It is designed to present professional accounting services while also providing users with instant guidance through an intelligent support system powered by Google Gemini API.

The project combines a static marketing website with a modular chatbot architecture (frontend + backend) to simulate a real-world business support system.

## Live Demo

[![🌐 Live Website](https://img.shields.io/badge/🌐_Live_Website-Visit-ff6b2b?style=for-the-badge)](https://paloaccounting.vercel.app/)



## Core Features

### 🌐 Business Website
- Professionally designed accounting firm landing page focused on trust, clarity, and conversion
- Dedicated service pages covering bookkeeping, tax compliance, payroll management, and financial advisory
- Dynamic blog system with reusable templates for consistent content rendering and easy expansion
- Fully responsive UI optimized for desktop, tablet, and mobile experiences
- Clean navigation structure designed for small business owners with minimal technical knowledge

### 🤖 AI Chatbot System
- Hybrid chatbot (rule-based + AI fallback)
- Context-aware conversation flows
- Intelligent service navigation assistant for quickly directing users to relevant accounting solutions Accounting Q&A support powered by Google Gemini API with structured prompt control for accuracy and consistency
- Multi-language support (English + Sinhala) with automatic language adaptation based on user input for improved accessibility

### ⚙️ Backend API Layer
- Secure Express.js backend
- Proxy layer for Google Generative AI
- Environment-based configuration
- CORS-enabled communication with frontend


## System Architecture (How It Works)

The system is split into three layers:

**1. Frontend (Static Website + Chatbot UI)**
- Handles UI rendering and user interactions
- Displays services, blogs, and chatbot interface
- Sends chat requests to backend API

**2. Chatbot Engine (Frontend Logic Layer)**
- Manages conversation state
- Controls flow-based navigation (menus, service selection)
- Switches between rule-based responses and AI mode

**3. Backend API (Node.js + Express)**
- Receives chat requests from frontend
- Sends prompts to Google Gemini API
- Returns AI-generated responses securely

Flow:
User → Frontend UI → Chatbot Engine → Backend API → Gemini AI → Response → UI

## Tech Stack

- HTML5, CSS3, JavaScript (Frontend)
- Node.js + Express (Backend)
- Google Generative AI (Gemini)
- HTTP Server (local development)
- REST API architecture


## Project Structure (Clean View)

Frontend:
- index.html → Home page
- services.html → Services overview
- blog.html → Blog listing
- service-details.html → Service template page
- blog-details.html → Blog reader template
- style.css → Global styling
- script.js → UI helpers and interactions

Chatbot Frontend:
- chatbot-ui.js → Message rendering and UI components
- chatbot-main.js → Input handling and DOM events
- chatbot-engine.js → Flow controller + API communication
- chatbot-flows.js → Predefined conversation structures

Backend:
- chatbot-backend/server.js → Express server + Gemini API integration
- chatbot-backend/package.json → Dependencies and config
- chatbot-backend/.env → Secret API keys (excluded from git)


## Setup Instructions

### 1. Run Frontend

You can run the frontend directly:

Windows:
start index.html

Or using a local server:

npm install -g http-server
http-server -c-1 . -p 8080

Then open:
http://localhost:8080


### 2. Run Backend

cd chatbot-backend
npm install

Create `.env` file:

GEMINI_API_KEY=your_api_key_here
PORT=3000

Start server:

npm start

Backend runs at:
http://localhost:3000/chat


## Environment Security

Never expose API keys in frontend code.

Important rules:
- Keep `.env` inside backend only
- Add `.env` to `.gitignore`
- Rotate API keys if exposed
- Use environment variables in production deployments


## Chatbot Behavior

The chatbot operates in two modes:

### 1. Structured Flow Mode
Used for:
- Service navigation
- Menu selection
- Guided user interaction

### 2. AI Mode
Used for:
- Accounting questions
- Free-form queries
- Advisory responses

This hybrid design ensures both control and intelligence.


## Common Issues

### ❌ 429 Quota Error
Your API project has no quota or billing is disabled.

Fix:
- Enable billing in Google Cloud
- Use a valid API project
- Verify API access using model list endpoint


### ❌ Backend Not Responding
- Check if server is running
- Verify port matches frontend configuration


### ❌ CORS Errors
- Ensure `cors()` middleware is enabled in Express server


### ❌ Poor AI Responses
- Adjust system prompt in `server.js`
- Tune temperature and max token settings



---

## Quick Start

Frontend:
http-server -c-1 . -p 8080

Backend:
cd chatbot-backend
npm install
npm start
