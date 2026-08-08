# 🚀 Vinayak Subhash Deshmane - 3D Interactive Portfolio Documentation

---

## 👤 Developer Profile
* **Full Name:** Vinayak Subhash Deshmane
* **Primary Role:** AI & Data Science Engineer / Full Stack Developer / Android Developer
* **Education:** 
  * B.Tech (3rd Year) in Artificial Intelligence & Data Science – *Siddhivinayak Technical Campus, Shegaon*
  * Diploma in Computer Engineering – *Government Polytechnic, Hingoli (75.80% Aggregate)*
  * SSC (10th) – *Manik Memorial Aryan School, Hingoli (75.00%)*
* **Primary Email:** `vinuu02052005@gmail.com`
* **WhatsApp / Mobile Number:** `+91 7249868441`
* **Location:** Maharashtra, India
* **Instagram Accounts:**
  * Personal Profile: [@vina_yak711](https://www.instagram.com/vina_yak711/)
  * Developer / Tech Profile: [@viinayak.in](https://www.instagram.com/viinayak.in/)
* **GitHub:** [vina-yak711](https://github.com/vina-yak711)

---

## 🌐 Live URLs & Deployment Environments
1. **GitHub Pages (Public Live Production):**
   * URL: [https://vina-yak711.github.io/porffolio/](https://vina-yak711.github.io/porffolio/)
   * Pipeline: Automated via GitHub Actions `.github/workflows/deploy.yml` on every `git push origin main`.
2. **Localhost (XAMPP Apache Server):**
   * URLs: `http://localhost/portfolio/` & `http://localhost/porffolio/`
   * Unified Project Hub: `http://localhost/` (`C:\xampp\htdocs\index.php`) connects:
     1. Vinayak's 3D Portfolio
     2. Hotel Management System
     3. Hostel Management System
   * Sync Command: `npm run sync:local` (or run `sync_localhost.bat`)

---

## 🛠️ Technology Stack
* **Frontend Framework:** React 18 with TypeScript (`.tsx`)
* **3D Visual Engine:** Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
* **Animations:** Framer Motion (`framer-motion`), Tilt Parallax (`react-parallax-tilt`)
* **Styling & Design System:** Tailwind CSS, Glassmorphism, CSS Custom Properties (CSS Variables)
* **Icons:** Lucide React (`lucide-react`)
* **Form & API Integration:** FormSubmit AJAX Endpoint, WhatsApp Click-to-Chat API
* **Build Tool:** Vite 5 with relative base configuration (`./`)

---

## 🌟 Key Features & Implementation Details

### 1. 3D Graphics & Visual Canvas
* **3D Desktop PC Model (`src/components/canvas/Computers.tsx`):**
  * Located in the Hero section.
  * Features smooth **360° Continuous Auto-Rotation** (`autoRotate`, `autoRotateSpeed={2.2}`) matching the Contact section Earth globe.
  * Fully interactive with OrbitControls allowing users to click, drag, and spin the PC model in 3D space.
* **Deep Cosmic Midnight Space Background (`src/globals.css` & `src/components/canvas/Stars.tsx`):**
  * Rich dark space canvas (`#050816`) with floating 3D particle stars.
  * Preserved glowing violet and cyan ambient gradients across all pages.
* **3D Earth Globe (`src/components/canvas/Earth.tsx`):**
  * Auto-rotating interactive planetary model displayed alongside the Contact Form.
* **3D Tech Floating Balls (`src/components/canvas/Ball.tsx`):**
  * Floating interactive skill spheres for technologies (React, Three.js, TypeScript, Tailwind, Python, Java, Docker, etc.).

---

### 2. Multi-Account Instagram Integration
* **Glassmorphic Instagram Modal (`src/components/atoms/InstagramModal.tsx`):**
  * Triggered whenever a user clicks the Instagram badge or social icon.
  * Displays both verified accounts with direct clickable profile cards:
    * 📸 **Personal Account:** `@vina_yak711` – Photos, Personal Journey & Lifestyle
    * 💻 **Developer / Tech Account:** `@viinayak.in` – Web Development, AI Projects & Tech Tutorials
* **Curated Social Links:**
  * Hero, Contact, and Footer contain exactly 4 clean social actions: **GitHub, WhatsApp, Instagram (opens dual modal), and Email**.

---

### 3. Smart Contact Form & Dual Delivery System (`src/components/sections/Contact.tsx`)
* **Privacy-Protected Contact Badges:**
  * Displays clean action buttons (`✉️ Email`, `💬 WhatsApp`, `📸 Instagram`, `📍 Maharashtra, India`) without exposing raw mobile numbers or plain-text email strings on the screen.
* **Smart Email Typo Detector:**
  * Catches common typos (`@gamil.com`, `@yaho.com`, `@hotmial.com`, `@outlok.com`) and offers a 1-click **"Fix Typo"** button.
* **Email Security OTP Verification:**
  * Generates a 4-digit verification code with a 60-second timer and verifies authentic senders with a **"✅ Verified"** badge.
* **Backup Phone / WhatsApp Field:**
  * Captures the sender's mobile number so Vinayak can contact them back directly.
* **Dual Message Delivery (Email + WhatsApp):**
  1. **Direct Gmail Inbox Delivery:** Sends full inquiry details (Name, Verified Email, Phone, Subject, Message, Timestamp) directly to `vinuu02052005@gmail.com` via FormSubmit AJAX.
  2. **Instant 1-Click WhatsApp Forwarding:** Automatically populates an instant chat link to Vinayak's WhatsApp (`+91 7249868441`) with the formatted inquiry summary.

---

### 4. Multi-Theme Engine & High-Contrast Readability
* **Theme Support (`src/context/ThemeContext.tsx`):**
  * 🌙 **Dark Mode (Default):** Deep Midnight Cosmos (`#050816`) with glowing violet accents (`#915EFF`).
  * ☀️ **Light Mode:** Clean, minimalist slate with deep navy typography (`#0f172a`).
  * ⚡ **Cyber Mode:** High-tech dark neon with cyan accents (`#06B6D4`).
* **Text Contrast Overhaul (`tailwind.config.cjs` & `src/globals.css`):**
  * Guaranteed 100% crystal-clear readable text (`#ffffff` in Dark mode, `#0f172a` in Light mode) across all input fields, textareas, cards, headings, and labels.

---

## 📁 Key File Map

| File Path | Description |
|---|---|
| `src/components/canvas/Computers.tsx` | 3D Desktop PC Canvas with continuous 360° auto-rotation |
| `src/components/canvas/Earth.tsx` | 3D Earth Globe Canvas in Contact Section |
| `src/components/canvas/Stars.tsx` | Cosmic background particle stars |
| `src/components/sections/Contact.tsx` | Smart Contact Form (Typo checker, OTP verification, Dual Gmail + WhatsApp) |
| `src/components/atoms/InstagramModal.tsx` | Glassmorphic popup modal for dual Instagram accounts |
| `src/components/atoms/SocialButton.tsx` | Social button renderer with modal trigger |
| `src/context/ThemeContext.tsx` | Multi-theme state provider (Dark, Light, Cyber) |
| `src/globals.css` | CSS variables, typography, and contrast tokens |
| `tailwind.config.cjs` | Tailwind theme extension and color token mappings |
| `src/constants/config.ts` | Portfolio textual content, bio, experience, and projects |
| `C:\xampp\htdocs\index.php` | Localhost multi-project dashboard (Portfolio, Hotel, Hostel) |
| `sync_localhost.bat` | 1-Click build & sync batch script for XAMPP |

---

## ⚡ One-Click Commands & Maintenance

* **Start Development Server:**
  ```bash
  npm run dev
  ```
* **Build for Production & Sync to Localhost XAMPP:**
  ```bash
  npm run sync:local
  ```
* **Push Updates to GitHub Pages:**
  ```bash
  git add .
  git commit -m "feat: Your update message"
  git push origin main
  ```

---
*Created and documented for Vinayak Subhash Deshmane's Official Portfolio.*
