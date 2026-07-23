# Tricon Consultant — Company Profile Website

Redesain website company profile **PT. Tricon Mitra Utama Konsultan (EPC)** menggunakan React SPA dengan tampilan modern, fresh, dan interaktif.

**Live Demo:** [tricon-consultant.vercel.app](https://tricon-consultant.vercel.app)

---

## Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| **React 19** + **Vite** | Framework & build tool |
| **Tailwind CSS v4** | Styling utility-first |
| **Framer Motion** | Animasi & page transitions |
| **React Router v7** | Navigasi SPA tanpa reload |
| **Font Awesome 6** | Ikon |
| **Vercel** | Deployment & hosting |

---

## Fitur

### Halaman
- **Home** — Hero carousel, live counter, about, why choose us, services preview, portfolio clients, testimonial, CTA
- **Who We Are** — Profil perusahaan, nilai-nilai, CTA
- **What We Do** — Business overview, 4 industry sectors, EPC lifecycle, komitmen K3
- **Products / Services** — 18 daftar layanan EPC, 3 featured services
- **Our Project / Portfolio** — Grid dengan filter kategori (Engineering, Renewable, Investment & IoT), modal detail gallery
- **Contact Us** — Form → WhatsApp redirect, info kontak lengkap, Google Maps

### Komponen Global
- **Topbar** — Dark strip sticky (freeze saat scroll), informasi kontak, sosial media & **language toggle (EN/ID)**
- **Navbar** — Sticky (freeze tepat di bawah Topbar), responsive mobile, search button
- **Footer** — 4 kolom (brand, quick links, kontak, contact person)
- **Floating WhatsApp** — Tombol WA sticky pojok kiri bawah
- **Floating CS Chat** — Chat interaktif FAQ (quick reply chips, input fuzzy match, WA fallback)
- **Search Modal** — Pencarian services & portfolio

### Enhancement
- **Glassmorphism & blur effects** — backdrop-blur pada navbar, search modal, floating CS, card hover, gradient radial overlays
- **Language toggle** (Indonesia / English) — semua teks website berubah sesuai bahasa yang dipilih, preferensi tersimpan di localStorage
- **Topbar + Navbar sticky** — keduanya freeze saat scroll (Topbar top-0, Navbar top-[45px])
- **Hero breadcrumbs diganti** — accent bar emas tipis di bawah heading setiap halaman
- **Subtitle engaging** — label membosankan (About Us, Testimonials, dll) diganti tagline menarik
- **Statistics cards redesain** — grid seimbang, hover lift + shadow, konsisten
- **Portfolio gallery images** — gambar riil dari website masing-masing perusahaan mitra (Siemens Automation, CG Power, PLN, WPD) + Pexels untuk Duta Realtindo
- **Images dari Pexels** — 4 gambar utama + gambar gallery pelengkap sesuai industri EPC
- **Favicon custom** — icon-tricon.ico dari logo perusahaan
- **Contact info updated** — alamat (Vanya Park, Tangerang), telepon (+62 812-1111-7887), contact person (Tika Mustika S & Sales), Google Maps embed lokasi kantor
- **Scroll ke atas otomatis** — tiap navigasi halaman scroll ke paling atas
- Page transition animations (fade + slide antar halaman via AnimatePresence)
- Scroll-triggered animations (Framer Motion whileInView)
- Live counter statistik (years, projects, clients)
- Testimonial carousel (auto-slide 5 detik)
- Portfolio filter by kategori
- Responsive mobile-first

---

## Cara Menjalankan

### Prasyarat
- Node.js 18+
- npm 9+

### Development

```bash
# Install dependencies
npm install

# Jalankan development server (hot-reload)
npm run dev
```

Buka `http://localhost:5173` di browser.

### Build Production

```bash
# Build ke folder dist/
npm run build

# Preview hasil build
npm run preview
```

---

## Struktur Folder

```
tricon-react/
├── public/images/         ← gambar statis (26 file)
├── src/
│   ├── components/
│   │   ├── layout/        ← Topbar, Navbar, Footer, FloatingWA, FloatingCS, SearchModal
│   │   ├── sections/      ← Hero, LiveCounter, AboutPreview, WhyChooseUs, ServicesPreview, PortfolioClients, TestimonialCarousel, CTA
│   │   └── ui/            ← SectionTitle
│   ├── pages/             ← Home, About, WhatWeDo, Services, Portfolio, Contact
│   ├── constants/         ← translations (EN/ID), services, portfolio, navigation, faq
│   ├── context/           ← LanguageContext (provider + useLanguage + t())
│   ├── hooks/             ← (future custom hooks)
│   ├── App.jsx            ← routing
│   ├── main.jsx           ← entry point
│   └── index.css          ← Tailwind + custom CSS
├── index.html
├── package.json
├── vite.config.js
└── docs/                  ← rencana-eksekusi.md & dokumentasi analisis
```

---

## Deployment ke Vercel

### Opsi 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login Vercel
vercel login

# Deploy (dari folder project)
vercel

# Ikuti wizard:
# ? Set up and deploy? Y
# ? Which scope? pilih akun Vercel
# ? Link to existing project? N
# ? Project name: tricon-consultant
# ? Directory: ./
# ? Override settings? N
# ? Deploy? Y

# Untuk production:
vercel --prod
```

### Opsi 2: Deploy via GitHub + Vercel

```bash
# 1. Buat repository di GitHub
# 2. Push project ke GitHub

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/tricon-consultant.git
git push -u origin main

# 3. Buka https://vercel.com
# 4. Klik "Add New" → "Project"
# 5. Import repository tricon-consultant
# 6. Framework preset: Vite (otomatis terdeteksi)
# 7. Deploy
```

### Opsi 3: Deploy via Vercel Web (drag & drop)

1. Build project: `npm run build`
2. Buka https://vercel.com
3. Klik "Add New" → "Project"
4. Upload folder `dist/` atau hubungkan ke GitHub

### Setelan Vercel (otomatis terdeteksi)

| Setelan | Value |
|---------|-------|
| **Framework** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### Custom Domain (opsional)

1. Di dashboard Vercel → project → **Domains**
2. Masukkan domain (contoh: `triconconsultant.com`)
3. Ikuti instruksi DNS (arahkan ke `cname.vercel-dns.com`)

---

## Dokumentasi Terkait

Semua dokumentasi ada di folder `docs/`:

| File | Isi |
|------|-----|
| `rencana-eksekusi.md` | Progress & timeline pengerjaan |

---

## Catatan

- **Language**: Website mendukung 2 bahasa (Indonesia & English) dengan toggle di Topbar. Preferensi tersimpan di localStorage.
- **Images**: Beberapa gambar placeholder (background gradient) akan muncul jika file gambar tidak tersedia.
- **Form Contact**: Submit form akan redirect ke WhatsApp dengan pre-filled message.
- **FAQ Chat**: Fitur CS chat menggunakan data statis dari translations (bukan AI sungguhan), cocok untuk demo/dummy.
- **Search**: Mencocokkan input dengan nama services (dari translations) dan nama portfolio client.
