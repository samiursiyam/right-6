<div align="center">

# 💪 FitLog

### Track your lifts. Build your legacy.

A modern, minimal workout tracking app built with Next.js 14 — browse a curated library of exercises, build your daily plan, and track your progress.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-C2F800?style=for-the-badge)](LICENSE)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 About The Project

**FitLog** is a sleek, dark-themed workout companion designed for lifters who want a no-nonsense way to plan their training. Browse a library of twelve foundational lifts, add them to your daily plan, mark them done, and watch your stats grow — all in one smooth interface.

Built with performance and simplicity in mind, FitLog stores your plan, saved workouts, and completed lifts locally so you never lose progress — even after a page refresh.

> 💡 **Tagline:** _Twelve lifts covering every major muscle group._

---

## 🛠️ Technologies Used

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Library** | [React 18](https://react.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **State Management** | React Context API |
| **Persistence** | Browser `localStorage` |
| **Images** | `next/image` (optimized) |
| **Icons** | Inline SVG |
| **Data Source** | REST API (Cloudflare Workers) |
| **Language** | JavaScript (ES2022+) |

---

## ✨ Key Features

### 1. 🏋️ **Curated Exercise Library**
Browse a beautifully designed grid of twelve foundational lifts — each with image, muscle groups, difficulty, equipment, sets, reps, and detailed step-by-step instructions.

### 2. 📅 **Today's Plan Builder**
Add any exercise to your daily plan with one click. Duplicate prevention ensures each lift can only be added once, with the button auto-disabling for cards already in your plan.

### 3. ✅ **Mark as Done + Live Progress**
Toggle each workout as "done" to visually transform the card — grayscale image, strikethrough title, and a satisfying checkmark overlay. All states persist across sessions.

### 4. 🔀 **Smart Sorting (Duration · Calories · Rating)**
Instantly re-sort your plan or saved list by duration, calories burned, or rating. The custom dropdown with chevron animation and click-outside detection makes it feel native.

### 5. 🔔 **Toast Notification System**
Beautiful bottom-right toast alerts confirm every action — whether you're adding, removing, or marking a workout as done — with type-aware colors (success/info/error) and auto-dismiss.

---

## 📸 Screenshots

<div align="center">

| Home Library | Single Workout | My Plan |
|:---:|:---:|:---:|
| _Browse all lifts_ | _Detailed view_ | _Track your day_ |

</div>

> _Replace these placeholders with actual screenshots by adding images to a `/public/screenshots` folder._

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:

- **Node.js** `18.17.0` or later
- **npm** / **yarn** / **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fitlog.git
   cd fitlog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
fitlog/
├── app/
│   ├── layout.jsx              # Root layout with CardProvider
│   ├── page.jsx                # Home — exercise library
│   ├── not-found.jsx           # Custom 404 page
│   ├── plan/
│   │   ├── page.jsx            # My Plan / Saved page
│   │   ├── WorkoutCard.jsx     # Individual workout card
│   │   └── StatsCard.jsx       # Top stats summary bar
│   └── card/
│       └── [id]/
│           └── page.jsx        # Single workout detail
├── component/
│   ├── NavBare.jsx             # Top navigation
│   ├── Footer.jsx              # Site footer
│   ├── Toast.jsx               # Toast notification
│   ├── SavedButton.jsx         # "Save for later" button
│   ├── FonatButton.jsx         # "Add to today's plan" button
│   ├── delet-item/
│   │   └── DeletPlan.jsx       # Remove (X) button
│   └── context/
│       └── CardContext.jsx     # Global state + localStorage sync
└── public/
    └── assets/
        └── logo.png
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Background** | `#0a0a0a` / `#141414` | Page & card backgrounds |
| **Accent** | `#C2F800` / `#D4FF00` | Primary CTAs, highlights |
| **Accent (hover)** | `#aad600` | Hover state for buttons |
| **Text Primary** | `#FFFFFF` | Headings |
| **Text Muted** | `#9CA3AF` | Secondary text |
| **Border** | `rgba(255,255,255,0.05)` | Card edges |
| **Radius** | `1rem – 1.5rem` | Rounded corners everywhere |
| **Font** | System sans-serif | Clean, modern feel |

---

## 🔌 API Reference

FitLog consumes a public REST API hosted on Cloudflare Workers:

```http
GET https://api.abcz.workers.dev/api/fitlog
```
Returns an array of all workouts.

```http
GET https://api.abcz.workers.dev/api/fitlog/:id
```
Returns a single workout by ID.

### Sample response
```json
{
  "id": 1,
  "name": "Barbell Bench Press",
  "description": "The king of upper body lifts...",
  "image": "https://...",
  "muscleGroups": ["Chest", "Triceps"],
  "equipment": "Barbell",
  "difficulty": "Intermediate",
  "sets": 4,
  "reps": "8-10",
  "duration": 30,
  "caloriesBurned": 250,
  "rating": 4.8,
  "instructions": ["Step 1...", "Step 2...", "..."]
}
```

---

## 🧠 How State Persists

FitLog uses **React Context** + **localStorage** — no backend, no login, no friction.

```
┌─────────────────┐
│  User Action    │  (click Add / Save / Done / Remove)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  CardContext    │  plan · saved · done arrays
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  localStorage   │  Auto-synced on every change
└─────────────────┘
```

On app load, all three arrays are hydrat ed back from `localStorage`, so your data survives page reloads and browser restarts.

---

## 🗺️ Roadmap

- [x] Exercise library
- [x] Daily plan
- [x] Save for later
- [x] Mark as done + toast
- [x] Custom 404 page
- [x] Sort by duration / calories / rating
- [ ] User authentication
- [ ] Cloud sync across devices
- [ ] Progress charts & streaks
- [ ] Dark / light theme toggle
- [ ] PWA support

---

## 🤝 Contributing

Contributions are what make the open-source community amazing. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

**Your Name**

- GitHub: [@your-username](https://github.com/your-username)
- Twitter: [@your-handle](https://twitter.com/your-handle)
- Email: you@example.com

---

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shields.io](https://shields.io/) for the badges
- [Cloudflare Workers](https://workers.cloudflare.com/) for the free API

---

<div align="center">

### ⭐ If you like this project, give it a star!

**Built with 💪 and ☕ by [Your Name](https://github.com/your-username)**

</div>
