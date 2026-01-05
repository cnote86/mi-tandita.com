# Mi Tandita

Landing page for Mi Tandita - a platform for organizing and coordinating tandas (rotating savings groups) among users.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Language:** TypeScript

## Features

- Premium, responsive landing page
- Compliance-focused content (Conekta-ready)
- Contact form with Resend integration
- Honeypot spam protection
- Terms and Privacy pages
- PWA-ready with manifest

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API route
│   ├── privacidad/      # Privacy policy page
│   ├── terminos/        # Terms and conditions page
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   └── ContactForm.tsx  # Contact form with honeypot
public/
├── Mi -Tandita-logo.png # Main logo
├── site.webmanifest     # PWA manifest
└── [favicons]           # Various favicon formats
```

## Deployment

Deploy to Vercel for full functionality (API routes require server-side rendering).

```bash
vercel
```

## License

All rights reserved. © 2026 Mi Tandita

---

Designed by [CodevoStudio](https://codevostudio.com)
