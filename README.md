# Mohammed Al-Hamed — Personal Portfolio

A premium, production-ready personal portfolio and CV website for **Mohammed Abdullah Al-Hamed** — Software Engineering student at UMPSA, from Riyadh, Saudi Arabia.

**Live features:**
- Bilingual English / Arabic with full RTL support
- Language toggle in the navigation (one click to switch)
- Animated hero with particle field
- All sections: Hero · About · Skills · Experience · Projects · Education · Certifications · GitHub · Contact · Footer
- Fully responsive (mobile, tablet, desktop)
- Production build — statically generated, ready for Vercel

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | Framer Motion · CSS keyframes |
| Icons | Lucide React + custom SVG icons |
| Fonts | Cormorant Garamond · Syne · IBM Plex Sans Arabic |
| Deployment | Vercel (recommended) |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

---

## Adding Your Photo

1. Take your professional photo (portrait orientation recommended, min 600×800px)
2. Save it as **`public/photo.jpg`** (replace the placeholder)
3. The photo will automatically appear in the Hero and About sections

> The site gracefully shows "MA" initials if no photo is found.

---

## Updating Your Content

All website content is in a **single file**: [`src/data/content.ts`](src/data/content.ts)

The file has two sections: `en` (English) and `ar` (Arabic). Update both to keep bilingual parity.

### What to update:

| Section | What to change |
|---|---|
| `hero.tagline` | Your personal pitch |
| `about.bio1/2/3` | Your about text |
| `experience.items` | Your work/academic experience |
| `projects.items` | Your real projects (title, description, GitHub URL, demo URL) |
| `education.items` | Your university details |
| `certifications.items` | Your certifications (name, issuer, year, credentialId) |
| `contact.form.emailAddress` | Your real email address |
| `footer.copyright` | Your name and year |

### Removing placeholder badges

Items marked with `isPlaceholder: true` show a small "placeholder" badge. Once you've replaced the content, set `isPlaceholder: false` to remove the badge.

---

## Adding a Downloadable CV

1. Export your CV as a PDF
2. Save it as **`public/cv.pdf`**
3. The "Download CV" button in the About section will automatically link to it

---

## Customizing Design

The design tokens (colors, fonts) live in [`src/app/globals.css`](src/app/globals.css) inside the `@theme` block:

```css
@theme {
  --color-gold: #C8A96E;       /* Primary accent color */
  --color-ink: #09090D;        /* Background */
  --color-sand: #F2EEE5;       /* Primary text */
  /* ... */
}
```

---

## Deployment on Vercel (Recommended)

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
cd portfolio
vercel

# Follow prompts → get a public URL in ~60 seconds
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/Mohammed-Alhamed1/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### Option C — Custom Domain

After deploying to Vercel:
1. Go to your project settings → **Domains**
2. Add your custom domain (e.g., `mohammed-alhamed.com`)
3. Update your DNS records as instructed
4. Vercel handles SSL automatically

---

## Sharing on LinkedIn

Once deployed, add the URL to your LinkedIn profile:
- Go to **Edit Profile** → **Contact info** → **Website**
- Add your Vercel URL (or custom domain)
- Also add it to your About section intro for maximum visibility

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata, LanguageProvider
│   ├── page.tsx           # Main page — assembles all sections
│   └── globals.css        # Tailwind v4 @theme + custom component classes
├── components/
│   ├── Navigation.tsx     # Sticky nav with language switcher + mobile menu
│   ├── Hero.tsx           # Full-screen hero with particle field
│   ├── About.tsx          # Photo + bio + stats
│   ├── Skills.tsx         # Tech stack category grid
│   ├── Experience.tsx     # Timeline of work/academic experience
│   ├── Projects.tsx       # Featured + other project cards
│   ├── Education.tsx      # Education + certifications side by side
│   ├── GitHubHighlights.tsx # GitHub profile callout
│   ├── Contact.tsx        # Contact form + social links
│   ├── Footer.tsx         # Footer with links + back to top
│   └── Icons.tsx          # GitHub + LinkedIn SVG icons
├── context/
│   └── LanguageContext.tsx # Language state (en/ar), RTL toggle, t() helper
└── data/
    └── content.ts         # ALL bilingual content in one place
public/
├── photo.jpg              # ← ADD YOUR PHOTO HERE
└── cv.pdf                 # ← ADD YOUR CV HERE (optional)
```

---

## Links

- **LinkedIn:** https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/
- **GitHub:** https://github.com/Mohammed-Alhamed1

---

*Built with Next.js 16 · Tailwind CSS v4 · TypeScript*
