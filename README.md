<div align="center">

# 💪 FitLog

### Track your lifts. Build your legacy.

A modern, minimal workout tracking app built with Next.js 14 — browse a curated library of exercises, build your daily plan, and track your progress.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 About

**FitLog** is a sleek, dark-themed workout companion for lifters who want a no-nonsense way to plan training. Browse a library of foundational lifts, add them to your daily plan, mark them done, and watch your stats grow — all with local persistence.

> 💡 _Twelve lifts covering every major muscle group._

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Library | React 18 |
| Styling | Tailwind CSS 3 |
| State | React Context API |
| Persistence | Browser `localStorage` |
| Images | `next/image` |
| Data | REST API (Cloudflare Workers) |

---

## ✨ Key Features

1. **🏋️ Curated Exercise Library** — Browse twelve foundational lifts with detailed instructions, muscle groups, and stats.
2. **📅 Daily Plan Builder** — Add any workout with one click; duplicate prevention auto-disables buttons for cards already added.
3. **✅ Mark as Done** — Toggle completion with visual feedback (grayscale image, strikethrough, checkmark) that persists across sessions.
4. **🔀 Smart Sorting** — Instantly re-sort by Duration, Calories, or Rating with a custom animated dropdown.
5. **🔔 Toast Notifications** — Beautiful bottom-right toasts confirm every add, remove, or complete action with type-aware colors.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/fitlog.git
cd fitlog

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
src/app/
├── card/                # Single workout detail page
├── cardBox/             # Card design components
├── component/
│   ├── context/         # Global state (CardContext)
│   ├── NavBare.jsx
│   ├── Footer.jsx
│   ├── Toast.jsx
│   ├── SavedButton.jsx
│   ├── FonatButton.jsx
│   └── delet-item/      # Delete button
├── plan/                # My Plan / Saved page
├── layout.jsx
├── page.jsx             # Home — library
└── not-found.jsx        # Custom 404
```

---

## 🔌 API

Base URL: `https://api.abcz.workers.dev/api/fitlog`

```http
GET /              → all workouts
GET /:id           → single workout
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0a` / `#141414` |
| Accent | `#C2F800` / `#D4FF00` |
| Text (primary) | `#FFFFFF` |
| Text (muted) | `#9CA3AF` |
| Radius | `1rem – 1.5rem` |

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: you@example.com

---

<div align="center">

### ⭐ If you like this project, give it a star!

**Built with 💪 by [Your Name](https://github.com/your-username)**

</div>
