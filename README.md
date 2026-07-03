# JS Tetris // Cyber Edition

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-blue.svg)
![JavaScript](https://img.shields.io/badge/ES6-JavaScript-yellow.svg)
![Webpack](https://img.shields.io/badge/Webpack-v5-green.svg)

A premium, responsive, cyberpunk-themed Tetris clone built using **HTML5 Canvas**, **Vanilla CSS Glassmorphism**, and **ES6 JavaScript**. This application runs at a buttery-smooth 60FPS, features neon-glowing cyber-aesthetics, and includes modern game engine features like hold piece, ghost piece previews, line clear animations, level scaling, and persistent high scores.

---

## 🎮 Live Preview & Aesthetics

The interface is built to wow at first glance, incorporating:
- **Neon Synthwave Cyberpunk Theme:** Glowing cyber-blocks in cyan, electric blue, orange, yellow, green, purple, and hot pink.
- **Glassmorphic UI Cards:** Semi-transparent containers featuring backdrop filters (`blur(16px)`), subtle reflections, and animated borders.
- **High-DPI Canvas Rendering:** Pixel-perfect rendering of active and frozen blocks with inner bevel highlights for a premium 3D glass look.
- **Responsive Layout:** Automatically scales across desktop, tablet, and mobile browsers with specialized on-screen D-pad and action buttons.

---

## ✨ Features

- **Standard Game Mechanics:** Full collision detection, standard 7-bag randomizer, and SRS-like wall kicks for smooth rotations.
- **Ghost Piece Preview:** Shows where the active piece will land, allowing for fast, precise gameplay.
- **Hold & Queue System:** Store a piece for later swapping (default key `C` or `Shift`) and preview the upcoming piece.
- **Advanced State Controller:** Interactive overlay menus for **Welcome / Start**, **Pause**, and **Game Over** states.
- **Level & Speed Scaling:** Game speed dynamically increases as you clear lines (every 10 lines triggers a level up).
- **Score System:** Multi-line clear scoring multipliers (Single, Double, Triple, and Tetris) with persistent High Score tracking via `localStorage`.
- **On-Screen Mobile Controls:** Virtual controls for mobile devices that map perfectly to physical touch buttons.

---

## 📂 Project Structure

The project has been organized into a modular, clean, and highly maintainable 5-file architecture:

```
├── dist/
│   ├── index.html     # Semantic, SEO-optimized markup, D-pad layout, and modal overlays
│   ├── style.css      # Dark mode variables, glassmorphic styling, and media queries
│   └── main.js        # Minified production bundle output (compiled by Webpack)
├── src/
│   ├── constants.js   # Tetrimino shapes, scoring rules, keys, and cyber-color palettes
│   ├── piece.js       # Piece class managing coordinates, cloning, and matrix rotations
│   ├── board.js       # Grid logic, collisions, SRS wall kicks, and row clearance
│   ├── renderer.js    # Canvas rendering loops, neon glows, bevels, grid lines, and previews
│   ├── game.js        # Controller handling loop timers, states, 7-bag, hold swap, and scores
│   └── index.js       # Entry point binding DOM events, keyboard inputs, and touch controls
├── package.json       # Webpack configuration scripts and modern dependencies
└── webpack.config.js  # Production-ready bundler configuration
```

---

## 🚀 Setup & Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16+ recommended, fully compatible with Node 24+) and `npm` installed.

### 1. Install Dependencies

Clone the repository and run:

```bash
npm install
```

### 2. Development Mode

To run a development watch server that auto-compiles changes in the `src/` directory to `dist/main.js`:

```bash
npm run dev
```

### 3. Production Build

To compile and minify the production bundle:

```bash
npm run build
```

### 4. Running the Game

Simply open [dist/index.html](dist/index.html) directly in any modern web browser or serve it using a local development server like VS Code Live Server or python's `http.server`:

```bash
npx serve dist
```

---

## 🕹️ Controls Guide

### Keyboard Mappings

| Action | Primary Key | Alternative Key |
| :--- | :--- | :--- |
| **Move Left** | `Left Arrow` | - |
| **Move Right** | `Right Arrow` | - |
| **Soft Drop** | `Down Arrow` | - |
| **Rotate Right** | `Up Arrow` | `X` |
| **Rotate Left** | - | `Z` |
| **Hard Drop** | `Space` | - |
| **Hold Piece** | `C` | `Shift` |
| **Pause / Resume**| `P` | `Escape` |

### Touch (Mobile & Tablet)

- **Left D-Pad Buttons:** Move Left, Soft Drop, Move Right.
- **Right Action Buttons:** Rotate (CW), Hard Drop, Hold Piece.
- **Sidebar Button:** Pause / Resume overlay.

---

## 📄 License

This project is open-source and licensed under the [ISC License](LICENSE).
