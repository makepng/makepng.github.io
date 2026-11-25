# MakePNG ✂️
> **100% Free, In-Browser AI Background Remover with Multi-Language Support**

[![Live Website](https://img.shields.io/badge/Live%20Demo-makepng.github.io-26b0a1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://makepng.github.io)
[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg?style=for-the-badge)](#-license)

MakePNG is a privacy-first web application that turns photos into transparent PNG cutouts instantly. Unlike traditional background removal tools, **all AI processing runs 100% locally inside the browser using WebAssembly and Web Workers**. Your images never leave your computer or phone — zero server uploads, no sign-ups, no subscriptions, and absolutely no watermarks.

---

## ✨ Features

- 🔒 **100% Client-Side Privacy**: Neural network runs locally via WebAssembly (`@imgly/background-removal`). Your photos are never sent to external servers or stored in the cloud.
- ⚡ **Instant Inference**: The AI model is cached locally on first load; subsequent image background removals take only **1–2 seconds**.
- 🌐 **6-Language i18n Subpath Routing**: Full native translations and SEO subpaths for:
  - 🇺🇸 **English** (`/`)
  - 🇪🇸 **Spanish** (`/es/`)
  - 🇧🇷 **Portuguese** (`/pt/`)
  - 🇩🇪 **German** (`/de/`)
  - 🇫🇷 **French** (`/fr/`)
  - 🇯🇵 **Japanese** (`/ja/`)
- 🌓 **Zero-FOUC Dark & Light Mode**: Synchronous inline `<script>` in `<head>` detects system preferences and `localStorage` before rendering, eliminating flashes of unstyled content. Includes an eye-friendly dark checkered canvas for cutout previews.
- 🖼️ **Full-Resolution Export**: Download high-quality transparent PNG cutouts with no compression limits or watermarks.
- 📱 **Mobile & Desktop Optimized**: Responsive drag-and-drop workspace, sample image generator, and comparison mode (toggle original vs cutout).
- 🔍 **SEO & Search-Engine Ready**: Complete 7 bidirectional `hreflang` alternate tags, localized Open Graph metadata, multi-entity Schema.org JSON-LD graphs (`WebApplication`, `HowTo`, `FAQPage`), and a Google-compliant XML sitemap.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Astro](https://astro.build/)** | Static Site Generation (SSG), routing, and zero-JS static HTML by default |
| **[React](https://react.dev/)** | Interactive Astro Islands (`client:load`) for the core tool workspace |
| **[@imgly/background-removal](https://www.npmjs.com/package/@imgly/background-removal)** | In-browser client-side neural network inference (ONNX Runtime / WASM) |
| **[Tailwind CSS](https://tailwindcss.com/)** | Responsive utility-first styling with class-based dark mode (`darkMode: 'class'`) |
| **[Lucide React](https://lucide.dev/)** | Clean, accessible SVG icons |

---

## 📁 Project Structure

```text
makepng.github.io/
├── public/
│   ├── favicon.svg             # Brand vector icon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sample.jpg              # Bundled sample demonstration image
│   └── sitemap.xml             # Multilingual XML sitemap with hreflang links
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.jsx      # Reusable button component with dark mode
│   │   ├── BackgroundRemover.jsx # React Island: file upload, WASM AI, preview, export
│   │   ├── Header.astro        # Sticky blurred navbar with logo, nav links & CTA
│   │   ├── HomePage.astro      # Shared localized landing page component
│   │   ├── LanguagePicker.astro# Interactive 6-language switcher dropdown
│   │   ├── Navbar.astro        # Backward-compatible wrapper for Header
│   │   └── ThemeToggle.astro   # Sun/Moon dark & light mode switcher
│   ├── i18n/
│   │   ├── ui.ts               # Complete multilingual dictionaries (en, es, pt, de, fr, ja)
│   │   └── utils.ts            # Route parsing, translation hooks, localized path helpers
│   ├── layouts/
│   │   └── Layout.astro        # Master HTML layout, anti-FOUC theme script, SEO tags & footer
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro     # SSG subpath routes (/es/, /pt/, /de/, /fr/, /ja/)
│   │   └── index.astro         # Default English root landing page (/)
│   └── styles/
│   │   └── global.css          # Base styles, checkered preview grid (light & dark)
├── astro.config.mjs            # Astro configuration with i18n routing
├── tailwind.config.mjs         # Tailwind configuration with brand colors & dark mode
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.14.1` or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/makepng/makepng.github.io.git
   cd makepng.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```
   This compiles all static assets and localized subpages into the `dist/` directory.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Internationalization (i18n)

MakePNG utilizes Astro's native `i18n` configuration with `prefixDefaultLocale: false`:

- **Root URL (`/`)**: English (default)
- **Subpaths**:
  - `/es/` — Spanish (Español)
  - `/pt/` — Portuguese (Português)
  - `/de/` — German (Deutsch)
  - `/fr/` — French (Français)
  - `/ja/` — Japanese (日本語)

Every page automatically includes:
- Matching `<html lang="...">` attributes
- Localized Open Graph & Twitter Cards (`og:locale`)
- All 7 bidirectional `hreflang` alternate links (`en`, `es`, `pt`, `de`, `fr`, `ja`, and `x-default`)

---

## ☕ Support the Developer

If you find MakePNG useful, consider supporting its development:

[![Support the Developer](https://img.shields.io/badge/Support_the_Developer-Gumroad-FF90E8?style=for-the-badge&logo=gumroad&logoColor=black)](https://kisharadilshan.gumroad.com/coffee)

---

## 📄 License

This project is open-source under the MIT License.
