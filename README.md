# Positorial

Your guide to money, health, and personal growth for the new age.

## Getting Started

### Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org))
- A code editor (VS Code recommended)
- Git installed

### Setup

1. Open a terminal and navigate to this folder:
   ```bash
   cd positorial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Buying Your Domain

### Recommended Registrars (cheapest to most feature-rich):

1. **Cloudflare Registrar** (https://dash.cloudflare.com) — At-cost pricing, no markup
2. **Namecheap** (https://namecheap.com) — Affordable, includes free WhoisGuard
3. **Google Domains** (https://domains.google) — Clean interface, easy DNS

### Steps:
1. Go to your chosen registrar
2. Search for `positorial.com` (or your preferred domain)
3. Purchase the domain (~$10-15/year for .com)
4. Keep the registrar tab open — you'll connect it to Vercel next

---

## Deploying to Vercel (Free Hosting)

### Step 1: Push to GitHub
1. Create a GitHub account if you don't have one (https://github.com)
2. Create a new repository called `positorial`
3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Positorial website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/positorial.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click "New Project"
3. Import your `positorial` repository
4. Vercel auto-detects Next.js — just click "Deploy"
5. Your site will be live at `positorial.vercel.app` in ~2 minutes!

### Step 3: Connect Your Custom Domain
1. In Vercel, go to your project → Settings → Domains
2. Add your domain (e.g., `positorial.com`)
3. Vercel will show you DNS records to add
4. Go to your domain registrar's DNS settings
5. Add the records Vercel shows you (usually an A record or CNAME)
6. Wait 5-30 minutes for DNS to propagate
7. Vercel automatically provisions an SSL certificate — your site is now live on HTTPS!

---

## Project Structure

```
positorial/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout (nav + footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── money/page.tsx      # Money & Finances page
│   │   ├── health/page.tsx     # Health & Wellness page
│   │   ├── personal-development/page.tsx  # Personal Development page
│   │   └── blog/
│   │       ├── page.tsx        # Blog listing
│   │       └── [slug]/page.tsx # Individual blog post
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── Footer.tsx          # Footer
│       ├── CategoryCard.tsx    # Category card component
│       ├── ArticleCard.tsx     # Article preview card
│       └── NewsletterSignup.tsx # Email signup form
├── public/                     # Static assets (images, favicon)
├── tailwind.config.ts          # Tailwind CSS config (colors, fonts)
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## Next Steps

- [ ] Replace sample articles with your real content
- [ ] Connect a headless CMS (Sanity, Contentful, or Notion API) for easy content management
- [ ] Set up an email service (ConvertKit, Mailchimp) for the newsletter
- [ ] Add Google Analytics or Plausible for traffic tracking
- [ ] Set up affiliate marketing links and disclosure pages
- [ ] Add a favicon and Open Graph images for social sharing
- [ ] Consider adding a search feature for articles
