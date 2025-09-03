# Swift Bot Technologies — Website

Marketing website for **Swift Bot Technologies**, showcasing AI-powered recruiting and automation services.  
Built with **Next.js**, **TypeScript**, and **Tailwind CSS** and deployed on **Vercel**.

> ℹ️ This repo contains only the public website (marketing pages, blog, and contact form).  
> Product apps and internal tools live in separate repositories.

---

## ✨ Highlights

- ⚡ **Fast & modern**: Next.js App Router, TypeScript, Tailwind CSS
- 📈 **Analytics**: optional Vercel Analytics 
- ✉️ **Contact form**: serverless action

---

## 🧱 Tech Stack

- **Framework**: Next.js (App Router), React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS,
- **UI**: Headless primitives / shadcn-style components, `lucide-react` icons
- **Forms**: React Hook Form 
- **Analytics**: Vercel Analytics
- **Deploy**: Vercel

---

## ⚙️ Requirements

- **Node.js** 18+ (recommend 20+)
- **npm** (or **pnpm/yarn** — update commands accordingly)
- **Vercel** account for deployment

---

## 🚀 Getting Started (Local)

1) **Install dependencies**
```bash
npm install
Copy envs

Copy code
cp .env.example .env.local
Run dev server

Copy code
npm run dev
# http://localhost:3000
Build & run production

Copy code
npm run build
npm run start
🔑 Environment Variables
Create .env.local with the values you use in production/staging. Example:

env
Copy code
# Site
NEXT_PUBLIC_SITE_URL=https://swiftbot.tech
```

