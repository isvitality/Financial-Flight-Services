
# Super Prompt: Financial Flight Services Website (Replication Blueprint)

## 1. Project Goal

Your task is to build a sophisticated, professional, and dynamic single-page website for a financial services company named "Financial Flight Services". The site must be a pixel-perfect and functionally identical replica of the provided source code.

This document contains the complete specification. Follow it meticulously.

## 2. Technology Stack & Setup

*   **Framework:** React 18+ with Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (via PostCSS)
*   **Animation:** Framer Motion

### 2.1. `package.json`

Create a `package.json` file with the following dependencies and scripts:

```json
{
  "name": "financial-flight-services-replica",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.2.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
```

### 2.2. Vite & TypeScript Configuration

Create the following configuration files: `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`.

**`vite.config.ts`:**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**`tsconfig.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["."],
  "exclude": ["node_modules", "vite.config.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**`tsconfig.node.json`:**
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### 2.3. Tailwind CSS & PostCSS Configuration

Create `tailwind.config.js` and `postcss.config.js`.

**`tailwind.config.js`:**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
```

**`postcss.config.js`:**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 3. Directory Structure

Organize your files into the following structure:

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   ├── *.tsx (e.g., MailIcon.tsx)
│   │   │   └── index.tsx (barrel file)
│   │   ├── seasonal/
│   │   │   ├── *.tsx (e.g., Snowfall.tsx)
│   │   │   └── index.tsx (barrel file)
│   │   ├── AbundanceQuote.tsx
│   │   ├── About.tsx
│   │   ├── CalendlyPopup.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── FAQItem.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HolidayBanner.tsx
│   │   ├── LeadMagnet.tsx
│   │   ├── Logo.tsx
│   │   ├── MonthlyGreeting.tsx
│   │   ├── Recruitment.tsx
│   │   ├── SeasonalAccentImage.tsx
│   │   ├── SeasonalOverlay.tsx
│   │   ├── Services.tsx
│   │   ├── Support.tsx
│   │   └── ThemeTester.tsx
│   ├── contexts/
│   │   ├── PopupContext.tsx
│   │   └── SimulatedDateContext.tsx
│   ├── data/
│   │   ├── content.ts
│   │   └── themedContent.ts
│   ├── hooks/
│   │   ├── useSeasonalTheme.ts
│   │   ├── useSimulatedDate.ts
│   │   └── useTaxSeason.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── index.html
├── metadata.json
... (config files)
```

## 4. Public Assets & Entrypoint

### 4.1. `index.html`

The main HTML file. It must include Google Fonts, the inline Tailwind config, custom CSS for micro-interactions, and the root div.

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Financial Flight Services</title>

    <!-- SEO & Metadata -->
    <meta name="description" content="Financial Flight Services offers clear, year-round tax guidance for individuals, families, and small businesses. We help you navigate your finances with confidence and ease." />
    <meta name="keywords" content="tax preparation, financial services, small business tax, tax planning, financial clarity, adrian wright, financial flight services" />
    <meta name="author" content="Financial Flight Services" />
    <link rel="canonical" href="https://www.financialflightservices.com" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.financialflightservices.com" />
    <meta property="og:title" content="Financial Flight Services | Your Partners in Financial Clarity" />
    <meta property="og:description" content="Clear, year-round tax guidance for individuals, families, and small businesses. We help you navigate your finances with confidence and ease." />
    <meta property="og:image" content="https://geotapmedia.com/FinancialFlightServices/images/hero.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.financialflightservices.com" />
    <meta property="twitter:title" content="Financial Flight Services | Your Partners in Financial Clarity" />
    <meta property="twitter:description" content="Clear, year-round tax guidance for individuals, families, and small businesses. We help you navigate your finances with confidence and ease." />
    <meta property="twitter:image" content="https://geotapmedia.com/FinancialFlightServices/images/hero.png" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
            colors: {
              'brand-dark': '#4a4948',
              'brand-black': '#1a1a1a',
              'brand-gold': '#c7ae7e',
              'brand-gold-muted': '#a18a67',
              'brand-gold-light': '#e0cc9e',
              'brand-muted': '#6f6a5b',
            }
          },
        },
      }
    </script>
    <style>
      /* --- Micro-interactions --- */
      .btn-shine {
        position: relative;
        overflow: hidden;
      }
      .btn-shine::after {
        content: '';
        position: absolute;
        top: 0;
        left: -150%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .btn-shine:hover::after {
        left: 150%;
      }

      .btn-glow:hover {
        box-shadow: 0 0 15px 0px rgba(199, 174, 126, 0.6);
      }
      
      .text-shadow-dark {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      }

      .nav-link {
        position: relative;
        padding-bottom: 4px;
      }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #c7ae7e; /* Updated color */
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
      }
      .nav-link:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    </style>
<script type="importmap">
{
  "imports": {
    "react": "https://aistudiocdn.com/react@^19.1.1",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.1.1/",
    "react/": "https://aistudiocdn.com/react@^19.1.1/",
    "framer-motion": "https://aistudiocdn.com/framer-motion@^12.23.13",
    "vite": "https://aistudiocdn.com/vite@^7.1.5",
    "@vitejs/plugin-react": "https://aistudiocdn.com/@vitejs/plugin-react@^5.0.2"
  }
}
</script>
</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
    <script src="https://link.msgsndr.com/js/form_embed.js"></script>
  </body>
</html>
```

### 4.2. `metadata.json`

```json
{
  "name": "Financial Flight Services",
  "description": "Financial Flight Services offers clear, year-round tax guidance for individuals, families, and small businesses. We help you navigate your finances with confidence and ease.",
  "requestFramePermissions": []
}
```

### 4.3. Global CSS (`index.css`)

This file is minimal as most styling is done with Tailwind.

```css
/* This file should be empty. All styles are handled via inline Tailwind config and <style> tags in index.html */
```

### 4.4. `index.tsx` (App Entrypoint)

Render the `App` component, wrapped in all necessary context providers.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SimulatedDateProvider } from './contexts/SimulatedDateContext';
import { PopupProvider } from './contexts/PopupContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SimulatedDateProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </SimulatedDateProvider>
  </React.StrictMode>
);
```

## 5. Data Models

### 5.1. `data/content.ts`

Centralize all site content in this file.

```ts
// Create this file with the exact content from the provided source.
// Example structure:
export const content = {
  company: {
    name: "Financial Flight Services",
    logo: "https://geotapmedia.com/FinancialFlightServices/images/logo1.png"
  },
  about: { /* ... */ },
  services: [ /* ... */ ],
  contact: { /* ... */ },
  magnet: { /* ... */ },
  faqs: [ /* ... */ ],
  expert: { /* ... */ }
};
```

### 5.2. `data/themedContent.ts`

Centralize all theme-specific assets and content.

```ts
// Create this file with the exact content from the provided source.
// Example structure:
import { SeasonalTheme } from '../hooks/useSeasonalTheme';

type ThemedAsset = {
  heroBackground: string;
  accentImage: string;
  quote: {
    text: string;
    cite: string;
  };
  video: {
    thumbnail: string;
    title: string;
    description: string;
  };
};

export const themeAssets: Record<SeasonalTheme | 'none', ThemedAsset> = {
  winter: { /* ... */ },
  spring: { /* ... */ },
  // ... all other themes
  none: { /* ... */ }
};

export const getThemeAssets = (theme: SeasonalTheme): ThemedAsset => {
  return themeAssets[theme] || themeAssets['none'];
};
```

## 6. Core Logic: Contexts & Hooks

### 6.1. `contexts/SimulatedDateContext.tsx`

- **Purpose:** Provide a date (real or simulated) to the entire app.
- **Logic:**
    - On initialization, check `localStorage` for a `vfs-theme-override` key.
    - If found, use a `themeDateMap` object to generate a date corresponding to that theme.
    - If not found, use `new Date()`.
    - Provide a `setThemeOverride` function that updates `localStorage` and the context's date state.
    - If not simulating, a `setInterval` should update the time every minute.

### 6.2. `contexts/PopupContext.tsx`

- **Purpose:** Manage the visibility of the Calendly popup.
- **Logic:**
    - A simple `useState` to track `isCalendlyOpen`.
    - Expose `openCalendly` and `closeCalendly` functions to toggle the state.

### 6.3. `hooks/useSimulatedDate.ts`

- **Purpose:** A simple consumer hook for the `SimulatedDateContext`.
- **Logic:** `useContext(SimulatedDateContext)` and returns `simulatedDate`.

### 6.4. `hooks/useTaxSeason.ts`

- **Purpose:** Determine the current business season and provide relevant content.
- **Logic:**
    - Consumes `useSimulatedDate`.
    - Calculates time remaining until the next April 16th.
    - Based on the current month, determines the `season` (`PEAK_SEASON`, `OFF_SEASON`, `PRE_SEASON`).
    - Returns an object with `season`, `coreContent`, `seasonalContent`, and the `countdown` values.

### 6.5. `hooks/useSeasonalTheme.ts`

- **Purpose:** Determine the current visual theme for holidays and seasons.
- **Logic:**
    - Consumes `useSimulatedDate`.
    - Uses a series of `if/else if` and `switch` statements to check for specific holidays first (e.g., Dec 25th is 'christmas').
    - If no holiday matches, it falls back to a general season based on the month (e.g., December is 'winter').
    - Returns an object with the `theme` name and an array of `accents` (images) for that theme.
    - Must include logic for floating holidays like Mother's Day (2nd Sunday in May).

## 7. Component Implementation Details

Recreate every component exactly as specified.

---

### `App.tsx`

- **Purpose:** Main application layout component.
- **Structure:** Renders all main section components in order: `HolidayBanner`, `Header`, `Hero`, `About`, `MonthlyGreeting`, `Services`, `AbundanceQuote`, `Recruitment`, `Support`, `LeadMagnet`, `FAQ`, `Contact`, `Footer`, `ThemeTester`, `CalendlyPopup`.
- **State:** `const [isTesterVisible, setIsTesterVisible] = useState(false);`
- **Logic:** Passes the `setIsTesterVisible` functions to `Footer` and `ThemeTester`.

---

### `components/Header.tsx`

- **Purpose:** The main navigation header.
- **Dependencies:** `usePopupContext`.
- **State:** `const [isMenuOpen, setIsMenuOpen] = useState(false);`
- **Logic:**
    - `useEffect` to toggle `document.body.style.overflow` when the mobile menu is open.
    - `handleLinkClick` for smooth scrolling to sections.
    - `handleBookClick` to open the Calendly popup via context.
- **Animation:**
    - **Mobile Menu Overlay (`<motion.div>`):**
        - `variants={menuVariants}`
        - `initial="hidden"`, `animate="visible"`, `exit="exit"`
        - `menuVariants`: `{ hidden: { opacity: 0, x: '100%' }, visible: { opacity: 1, x: 0, ... }, exit: { opacity: 0, x: '100%', ... } }`
    - **Hamburger Icon (`<motion.span>`s):** Animate between open/closed states by rotating and fading the three lines.
    - **Menu Items (`<motion.a>`):** Use `staggerChildren` on the parent and `variants={navItemVariants}` on the items for a staggered reveal. `navItemVariants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }`

---

### `components/Hero.tsx`

- **Purpose:** The main "above-the-fold" section.
- **Dependencies:** `useTaxSeason`, `useSeasonalTheme`, `usePopupContext`.
- **State:** `const [isClient, setIsClient] = useState(false);` to prevent countdown hydration mismatch.
- **Structure:**
    1.  `<AnimatePresence>` wrapping a `<motion.img>` for the background for smooth transitions between themes.
    2.  A dark overlay `div`.
    3.  `<SeasonalOverlay />` component.
    4.  A `div` for the main content (titles, countdown, CTAs).
- **Logic:**
    - All text content (`preTitle`, `title`, `subtitle`, `cta`) is pulled from the `useTaxSeason` hook.
    - The `heroBackground` image URL is pulled from `getThemeAssets(theme)`.
    - The countdown is only rendered if `isClient` is true and the season is `PEAK_SEASON` or `PRE_SEASON`.

---

### `components/About.tsx`

- **Purpose:** Introduce the expert and the company's commitment.
- **Structure:** Two distinct parts.
    - **Part 1 (Expert):** A two-column grid. Left side has text content from `data/content.ts`. Right side has a circular `img` of the expert, with an absolutely positioned colored circle behind it and decorative floating icons around it.
    - **Part 2 (Commitment):** A dark (`bg-brand-black`) section with the "S.O.A.R." philosophy and a 4-column grid for the commitment items (Icon, Title, Description).
- **Animation:** Use `whileInView` with `viewport={{ once: true }}` to animate elements in as they are scrolled into view. Use slide-in (`x: -50`) and scale-up (`scale: 0.8`) effects.

---

### `components/FAQItem.tsx`

- **Purpose:** A single, reusable accordion item.
- **Props:** `{ question: string; answer: string; index: number; }`
- **State:** `const [isOpen, setIsOpen] = useState(false);`
- **Animation:**
    - Use `<AnimatePresence>` to wrap the answer `div`.
    - The answer `div` uses `variants` to animate `height` and `opacity` between `'collapsed'` and `'open'` states.
    - The chevron icon uses `animate={{ rotate: isOpen ? 180 : 0 }}`.

---

### `components/SeasonalAccentImage.tsx`

- **Purpose:** Display decorative images in the corners of sections.
- **Dependencies:** `useSeasonalTheme`.
- **State:** Uses `useState` and `useEffect` to generate randomized animation properties *only on the client side* to prevent hydration mismatch.
- **Logic:**
    - Gets `accents` from the hook.
    - If accents exist, renders two `<motion.img>` elements.
    - Each image has randomized `initial`, `animate`, and `transition` properties (scale, rotate, spring physics) generated by a helper function.
    - The component returns `null` until the client-side properties are generated.

---

### `components/seasonal/Particle.tsx`

- **Purpose:** A generic, reusable particle for seasonal effects.
- **Props:** `{ content: string | React.ReactNode; durationRange: [number, number]; fontSizeRange: [number, number]; isFloating?: boolean; }`
- **Logic:**
    - Uses `useMemo` to calculate random initial properties (`x`, `y`, `duration`, `delay`, `fontSize`, `drift`).
    - Has two animation modes based on `isFloating`:
        - **Falling:** Animates `y` from top to bottom with horizontal `drift`.
        - **Floating:** Animates `y` up and down in place and fades in and out.

---

### All Other Components

Recreate all other components (`AbundanceQuote`, `Contact`, `Footer`, etc.) by translating their JSX structure and Tailwind classes directly from the source code. Ensure all `whileInView` animations are implemented. For the `Footer`, remember the 5-click easter egg on the logo to trigger the `ThemeTester`. For `LeadMagnet`, ensure the `iframe` is embedded correctly.

## 8. Icons

Create a TSX file for each SVG icon in `components/icons/`. They should be simple React functional components that accept `React.SVGProps<SVGSVGElement>`.

**Example: `MailIcon.tsx`**
```tsx
import React from 'react';

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
```

Create a barrel file `components/icons/index.tsx` to export them all.
```ts
export * from './MailIcon';
export * from './PhoneIcon';
// ... etc for all icons
```
