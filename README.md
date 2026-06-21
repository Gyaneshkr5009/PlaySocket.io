# Vebble Games Matrix — Frontend Hub

A modern, high-performance web platform and documentation hub built to interface with type-safe, decoupled gaming microservices. 

This production ecosystem uses a **React + Vite** frontend setup optimized with rapid Hot Module Replacement (HMR) alongside a containerized **Spring Boot backend architecture**.

---

## 🎮 Game Microservice Architecture

The underlying application layout avoids traditional rigid monolith styles. Instead, all decoupled gameplay, calculation loops, and validation engines are isolated under a unified base routing path hosted on a remote cluster:

* **Production Base URL:** `https://onrender.com`
* **Microservice Scope:** `/api/games/*`

### Live Implementation Example: GraphQL Sudoku Engine
Developers or clients can generate custom dynamic boards directly using our dedicated endpoint:
* **Endpoint:** `POST https://onrender.com/api/games/sudoku-app`

#### Supported Configuration Types:
* **`limit`**: `0..10` (Maximum grids generated per runtime thread)
* **`difficulty`**: `"EASY" | "MEDIUM" | "HARD"` *(Ensure value string is fully capitalized)*
* **`size`**: `4 | 6 | 9 | 10 | 12 | 16` (Grid width sizing dimension arrays)

---

## 🚀 Getting Started Locally

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org) installed (v18+ recommended)
* Clear system network environments to avoid port collisions on `localhost:5173`

### Installation & Run Steps
```bash
# 1. Clone your project repository instance
git clone https://github.com
cd portfolio-v3

# 2. Install all development dependencies cleanly
npm install

# 3. Spin up the Vite development cluster with HMR enabled
npm run dev
```

*Note: If local OS environments drop file update trackers causing caching freezes, run `npm run dev -- --force` to flush module dependencies manually.*

---

## ⚙️ Core Compilation Stack & Plugins

This template provides a minimal setup to get React working in Vite with HMR and optimized ESLint configurations. Currently, two official compilation paths are available depending on your developer workflow preferences:

* **[@vitejs/plugin-react](https://github.com)**: Utilizes the ultra-fast rust-based [Oxc](https://oxc.rs) parser infrastructure for smooth file tracking.
* **[@vitejs/plugin-react-swc](https://github.com)**: Leverages [SWC](https://swc.rs/) configurations specifically for instantaneous Hot Module Replacements.

### React Compiler
The React Compiler is **not enabled** on this template by default due to potential performance tracking overheads during rapid developmental build phases. To explicitly opt-in or review integration benchmarks, check out the official [React Compiler Installation Guide](https://react.dev).

### Expanding the ESLint Configuration
For scalable production apps, it is highly recommended to extend standard rulesets toward type-aware lint rules. Switch your default linting arrays inside your root config files to pull configurations directly from [`typescript-eslint`](https://typescript-eslint.io) structures.

---

## 🔗 Connected Developer Links
* **Live Deployment Hub:** [Portfolio v3 on Vercel](https://vercel.app)
* **Professional Network:** [Gyanesh Kumar on LinkedIn](https://linkedin.com)
* **Algorithmic Benchmarks:** [Gyaneshkr Profile on LeetCode](https://leetcode.com)

---

## ☕ Support Compute Hosting Nodes
Running persistent Java Virtual Machine (JVM) containers on remote cloud infrastructure incurs constant resource costs. If you use our public query endpoints inside your apps or want to help expand subsequent matrix engines under the `/games/*` routing standard, support the server runtime nodes via local **UPI (gyanesh5009-1@oksbi)** or our global donation link banners.
