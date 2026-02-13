# Portfolio Project - AI Agent Guidelines

## Project Overview

This is a modern, professional portfolio website for **Mouad EL BOUANANI** built with React, TypeScript, Vite, and Tailwind CSS. The site is deployed on GitHub Pages and features dynamic project fetching, multiple theme support, and smooth animations.

**Key URLs:**
- Live: https://Mouadbouanani.github.io/Portfolio/
- GitHub: https://github.com/Mouadbouanani/portfolio

---

## Architecture & Key Components

### Component Structure

```
src/components/
├── HeroTechModernPro.tsx    # Main hero section (Tech Modern Pro theme)
├── TechSkills.tsx            # Technical skills showcase (NEW)
├── About.tsx                 # About section with extended skills list
├── Experience.tsx            # Work experience timeline
├── Projects.tsx              # Dynamic project grid (fetches from projects.json)
├── Certifications.tsx        # Certifications & achievements
├── Contact.tsx               # Contact form (EmailJS integration)
├── Navbar.tsx                # Navigation with smooth scroll
├── ThemeSwitcher.tsx         # Theme selector dropdown
├── footer.tsx                # Footer
└── ScrollToTopButton.tsx     # Scroll-to-top utility
```

### Data Flow

```
projects.json (public/) 
    ↓ 
Projects.tsx (displays dynamically)
    ↓
GitHub Actions workflow (auto-updates on schedule)
```

**Key Files:**
- `src/contexts/ThemeContext.tsx` - Theme state management (4 themes: dark, light, pastel, tech)
- `src/services/githubApi.ts` - GitHub API client for fetching repos
- `src/config/github.ts` - GitHub configuration constants
- `tailwind.config.cjs` - Comprehensive color palette (516 lines)

---

## Theme System (Critical Pattern)

The portfolio uses **Context API** for theme management with localStorage persistence.

### How Themes Work

1. **Theme State**: Managed via `ThemeContext.tsx`
   - 4 available themes: `dark`, `light`, `pastel`, `tech`
   - Default: `tech` (GitHub-inspired)
   - Persisted in localStorage as `portfolio-theme`

2. **Theme Classes Pattern**:
   ```tsx
   const themeClasses = {
     dark: { ... },
     light: { ... },
     pastel: { ... },
     tech: { ... }
   };
   const currentTheme = themeClasses[theme];
   ```

3. **Color Palette** (tailwind.config.cjs):
   - **Tech Theme** (primary for 2025): `#0D1117` bg, `#00C2FF` accent, `#C9D1D9` text
   - **Dark Theme**: Gold/Black palette
   - **Light Theme**: Blue/White palette
   - **Pastel Theme**: Soft pastels

### When Adding Components

Always support all 4 themes by:
1. Importing `useTheme()` hook
2. Defining `themeClasses` object with all theme variants
3. Using `currentTheme = themeClasses[theme]` pattern
4. **Never hardcode colors** - use theme variables

---

## Build & Deployment

### Development
```bash
npm install
npm run dev          # Runs on http://localhost:5173
npm run lint         # Check code quality
```

### Production Build
```bash
npm run build        # TypeScript compilation + Vite bundling
npm run deploy       # Deploys dist/ to gh-pages branch
```

### Key Build Details

- **Base URL**: `/Portfolio/` (set in `vite.config.ts`)
- **Custom Vite Plugin**: Copies `public/projects.json` to `dist/` after build
- **GitHub Pages**: Auto-deploys via `predeploy` script (runs build first)

---

## Dynamic Projects System

### How It Works

1. **GitHub Actions Workflow** (`.github/workflows/update-projects.yml`):
   - Runs on schedule, on push to main, or manual trigger
   - Fetches repos tagged with "portfolio" topic
   - Updates `public/projects.json`

2. **Projects Component** (`src/components/Projects.tsx`, **585 lines**):
   - Fetches `public/projects.json` on mount
   - Implements filtering by technology (topics)
   - Sorting options: Updated, Stars, Name
   - Search functionality
   - Error handling with fallback UI

3. **Project Interface**:
   ```tsx
   interface GitHubRepo {
     id: number;
     name: string;
     description: string;
     html_url: string;
     homepage: string | null;
     language: string;
     stargazers_count: number;
     forks_count: number;
     topics: string[];        // Used for filtering
     created_at: string;
     updated_at: string;
     fork: boolean;
   }
   ```

### Updating Projects Manually

If you need to regenerate `public/projects.json`:
1. Edit `scripts/update-projects.js` if needed
2. Commit and push to trigger GitHub Actions
3. Or manually run the workflow from GitHub UI

---

## Styling & Design System

### Tailwind CSS Setup
- **Config**: `tailwind.config.cjs` (516 lines - comprehensive)
- **Base Styles**: `src/index.css`
- **Component Styles**: Inline via Tailwind classes (not CSS modules)

### Key Tailwind Extensions
```javascript
// Colors: 4 complete palettes defined
colors: {
  'light-primary': '#1A73E8',
  'pastel-primary': '#A7C7E7',
  'dark-primary': '#0D0D0D',
  'dark-secondary': '#D4AF37',
  // ... + more per palette
}

// Fonts: Poppins (body), Montserrat (headings), Fira Code (mono)
// Animations: gradient-x, gradient-y, gradient-xy, float
```

### Design Principles
- **Smooth Animations**: Framer Motion for all interactive elements
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Minimalist**: Tech-focused, clean aesthetic

---

## Animation System

**Framer Motion** is used throughout for:
- Page transitions
- Staggered element reveals
- Hover effects
- Scroll-triggered animations (`whileInView` with `viewport={{ once: true }}`)

**Common Patterns**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
```

---

## External Integrations

### EmailJS (Contact Form)
- Service configured in `src/components/Contact.tsx`
- Requires environment variables:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- Create `.env.local` with these values for local development

### GitHub API
- Reads from `src/config/github.ts`
- Free tier: 60 requests/hour (unauthenticated)
- Used in `src/services/githubApi.ts` for fetching repos

### React Helmet
- Manages `<head>` meta tags dynamically
- Currently set in `App.tsx` - update as needed for SEO

---

## Performance Notes

### Current Issues & Quick Wins

1. **Component Code Duplication**:
   - Theme classes defined in ~10 components
   - **Solution**: Extract to `src/utils/themeUtils.ts`

2. **Large Component**: `Projects.tsx` (585 lines)
   - **Solution**: Extract filtering/sorting logic to custom hooks

3. **No Caching**: GitHub API calls on every page load
   - **Solution**: Add React Query or SWR

4. **Tailwind Config Size**: 516 lines
   - Consider splitting into separate variable files

### Optimization Opportunities
- Lazy-load project cards with `react-lazy-load-image-component`
- Implement image optimization for hero section
- Code-split components via dynamic imports

---

## Common Tasks

### Adding a New Section
1. Create component in `src/components/YourSection.tsx`
2. Import and add to `src/App.tsx` main element
3. Implement theme support using `themeClasses` pattern
4. Use Framer Motion for scroll animations

### Adding a New Theme
1. Add color values to `tailwind.config.cjs`
2. Add theme object to all `themeClasses` definitions in components
3. Add option to `ThemeSwitcher.tsx`
4. Test with `npm run dev`

### Updating Projects
1. Tag repo on GitHub with "portfolio" topic
2. Push to main branch (triggers GitHub Actions)
3. Or manually trigger workflow from GitHub UI

### Deploying Changes
```bash
npm run build    # Bundles everything
npm run deploy   # Pushes to gh-pages
```

---

## File Naming & Organization

- **Components**: PascalCase (e.g., `HeroTechModernPro.tsx`)
- **Hooks**: `use` prefix (e.g., `useTheme.ts`)
- **Utilities**: camelCase (e.g., `githubApi.ts`)
- **Contexts**: "Context" suffix (e.g., `ThemeContext.tsx`)

---

## Testing & Quality

- **Linting**: ESLint configured - run `npm run lint`
- **Type Safety**: TypeScript enabled with strict checks
- **No Test Suite**: Consider adding Vitest for future improvements

---

## Key Dependencies

```json
{
  "@emailjs/browser": "^4.4.1",        // Contact form
  "framer-motion": "^12.23.22",        // Animations
  "lucide-react": "^0.545.0",          // Icons
  "react": "^19.1.1",                  // Framework
  "react-dom": "^19.1.1",
  "react-helmet": "^6.1.0",            // Meta tags
  "react-scroll": "^1.9.3"             // Scroll utilities
}
```

---

## Quick Reference: Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Form** | EmailJS |
| **Deployment** | GitHub Pages |
| **CI/CD** | GitHub Actions |

---

## Git Workflow

- **Main Branch**: Production-ready code
- **Deploy**: Automated via `npm run deploy` → gh-pages branch
- **Theme Testing**: Test all 4 themes before committing

---

## Resources

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vitejs.dev)

---

## Notes for AI Agents

- **Always check theme support** before modifying any component
- **Avoid hardcoding colors** - use the theme system
- **Test responsive design** on mobile, tablet, desktop
- **Review GitHub Actions workflow** before making breaking changes
- **Update this file** if you add new sections, themes, or major patterns
