# Shore Guesthouse

A sophisticated vacation rental website built to showcase a fictional guesthouse in Oia, Santorini. Designed with a focus on clean visual storytelling, smooth navigation, and a fully functional booking flow.

**Live site:** [shoreguesthouse.pxxl.run](https://shoreguesthouse.pxxl.run/)
**Repository:** [github.com/Olamilekan-oluwayomi/Sophisticated-Vacation-House-Rental--Community-](https://github.com/Olamilekan-oluwayomi/Sophisticated-Vacation-House-Rental--Community-)

---

## Overview

Shore Guesthouse is a multi-page React application for a vacation rental property. It includes a homepage with an infinite scrolling gallery preview, a full photo gallery with a lightbox-style interior viewer, an "About/Information" page telling the property's story, and a working booking page with date selection, guest count, pricing summary, and a confirmation modal.

The project was built with an emphasis on clean component architecture, responsive design, and a polished user experience across mobile and desktop.

---

## Features

- **Homepage** — Hero section, gallery preview marquee, and a call-to-action for booking
- **Gallery page** — Exterior views, an interactive interior image viewer with thumbnail navigation, and a neighborhood showcase
- **Information page** — The property's story, neighborhood history, and practical visitor information (transport options to the property)
- **Booking page** — Interactive booking form with:
  - Check-in / check-out date validation
  - Guest counter
  - Special requests field
  - Live pricing summary (nights, subtotal, fees, total)
  - Confirmation modal on successful booking
  - House rules and contact section
- **Responsive design** — Fully adapted layouts and navigation for mobile, tablet, and desktop
- **Animated mobile navigation** — Smooth expand/collapse menu using Framer Motion
- **Route-based code splitting** — Each page loads independently, keeping initial bundle size small
- **Responsive images** — Key hero images serve different resolutions depending on screen size

---

## Tech Stack

- **[React](https://react.dev/)** — UI library
- **[Vite](https://vitejs.dev/)** — Build tool and dev server
- **[React Router](https://reactrouter.com/)** — Client-side routing
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[Motion](https://motion.dev/)** (Framer Motion) — Animations
- **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)** — Icon sets
- **[Sharp](https://sharp.pixelplumbing.com/)** — Image processing/optimization (build-time script)

---

## Project Structure

```
shore-guesthouse/
├── public/
├── src/
│   ├── assets/              # Images, organized by page/section
│   │   ├── gallery/
│   │   ├── galleryInfinite/
│   │   └── ...
│   ├── components/
│   │   ├── booking/
│   │   ├── gallery/
│   │   ├── homepage/
│   │   ├── information/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── CTA.jsx
│   ├── data/                 # Static content (gallery items, transport options, etc.)
│   ├── pages/                # Route-level page components
│   ├── App.jsx
│   └── main.jsx
├── scripts/
│   └── optimize-images.js    # Batch image resizing/conversion script (sharp)
├── index.html
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Olamilekan-oluwayomi/Sophisticated-Vacation-House-Rental--Community-.git
   ```

2. Navigate into the project folder:
   ```bash
   cd Sophisticated-Vacation-House-Rental--Community-/shore-guesthouse
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The optimized production build will be output to the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

---

## Image Credits

All property and location photography used in this project is sourced from [Unsplash](https://unsplash.com/), used under Unsplash's free-to-use license.

---

## Author

**Olamilekan Ilesanmi**
- GitHub: [@Olamilekan-oluwayomi](https://github.com/Olamilekan-oluwayomi)
- LinkedIn: [linkedin.com/in/olamilekanilesanmi](https://linkedin.com/in/olamilekanilesanmi)

---

## License

This is a personal portfolio project and is not currently under an open-source license.
