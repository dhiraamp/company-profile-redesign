# Rencana Eksekusi — Tricon Consultant Website

## Status: ✅ Done (Deployed to Vercel)

---

## Phase 1: Project Scaffolding ✅
- [x] Init Vite + React 19 project
- [x] Install dependencies (Tailwind CSS v4, Framer Motion, React Router v7)
- [x] Konfigurasi Tailwind v4 (`@tailwindcss/vite` plugin)
- [x] Folder structure (components/layout, components/sections, components/ui, pages, constants, hooks, context)

## Phase 2: Layout & Navigation ✅
- [x] Topbar (dark strip, contact info, social media icons)
- [x] Navbar (sticky, responsive mobile, search button, active link styling)
- [x] Footer (4 kolom: brand, quick links, contact, contact person)
- [x] Floating WA button
- [x] Floating CS Chat (FAQ bubble, quick reply chips, input with fuzzy match)
- [x] Search Modal (live filter services + portfolio)
- [x] Spinner (loading screen on mount)

## Phase 3: Halaman Utama ✅
- [x] **Home** — Hero carousel (2 slide), LiveCounter, AboutPreview, WhyChooseUs, ServicesPreview, PortfolioClients, TestimonialCarousel, CTA
- [x] **What We Do** — Business overview, stats highlights, 4 industry sectors, EPC lifecycle (6 steps), Quality/Safety/Sustainability commitments, CTA
- [x] **About** — Company profile, values (3 items), company info table, CTA
- [x] **Services** — 18 service list + 3 featured services, CTA
- [x] **Portfolio** — Grid with filter (All/Engineering/Renewable/Investment & IoT), modal detail with gallery placeholder
- [x] **Contact** — Form → WA redirect, contact info (address, phone, 2 contact persons), Google Maps iframe
- [x] Page transitions (AnimatePresence mode="wait", fade+slide 0.2s)

## Phase 4: Enhancement ✅
- [x] Images copied from old project (26 files)
- [x] BackToTop removed (navbar sticky, not needed)
- [x] Logo fallback to text on error
- [x] Search modal keyboard shortcut (Escape to close)
- [x] Page transition animations
- [x] Scroll-triggered animations (Framer Motion whileInView)
- [x] UI Polishing — redundant headings removed, glassmorphism (backdrop-blur), rounded-2xl cards, hover effects, gradient accents, radial-gradient decorative overlays
- [x] Scroll ke atas otomatis saat navigasi antar halaman (useEffect on location.pathname)
- [x] Topbar sticky freeze bersama Navbar (Topbar top-0, Navbar top-[45px])

## Phase 5: Language System (EN/ID) ✅
- [x] `constants/translations.js` — Complete nested EN/ID translation dictionary
- [x] `context/LanguageContext.jsx` — Provider with `t(path)` function, `toggleLang()`, persists to localStorage
- [x] `Topbar.jsx` — Language toggle button (ID | EN), active language highlighted
- [x] `Layout.jsx` — Wrapped with `<LanguageProvider>`
- [x] `navigation.js` — Labels changed to translation keys
- [x] All section components updated to use `t()` — Hero, LiveCounter, AboutPreview, WhyChooseUs, ServicesPreview, PortfolioClients, TestimonialCarousel, CTA
- [x] All layout components updated — Navbar, Footer, FloatingCS, SearchModal
- [x] All pages updated — About, WhatWeDo, Services, Portfolio, Contact
- [ ] `index.html` — Title & meta description (belum di-update, perlu pendekatan berbeda karena di luar React tree)

## Phase 6: Build & Verify ✅
- [x] `npm run build` — 0 errors
- [x] Output: dist/index.html, ~457 KB JS, ~45 KB CSS

## Phase 7: Deployment ✅
- [x] Deploy to Vercel
- [ ] Custom domain (opsional)

## Phase 8: Final Polish ✅
- [x] Subtitle engaging — semua subtitle lama diganti tagline menarik
- [x] Hero breadcrumbs → accent bar emas di setiap halaman
- [x] Statistics cards redesain — grid seimbang tanpa col-span-2, hover effects
- [x] Favicon custom — icon-tricon.ico dari logo perusahaan
- [x] Images EPC dari Pexels — hero-1, hero-2, about, feature

---

## Catatan
- Stack: React 19 + Vite 8, Tailwind CSS v4, Framer Motion 12, React Router v7
- Font Awesome 6 via CDN di `index.html`
- Portfolio gallery: placeholder icon (gambar belum di-copy ke public/images/portfolio/)
- FAQ data di translations.js (bukan file faq.js terpisah)
- FloatingCS menggunakan data FAQ dari translations; menampilkan quick reply + input dengan fuzzy matching
- Testimonial: 4 item dengan rating 5/5 dan 4/5
