# Amaliy Hayot - Next.js Blog

Professional blog sayt Next.js 14 (App Router), Markdown va Tailwind CSS bilan yaratilgan. O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.

## 🚀 Loyihani ishga tushirish

### Talablar

- Node.js 18.17 yoki undan yuqori
- npm, yarn, pnpm yoki bun

### O'rnatish

1. **Repozitoriyani klonlang:**

   ```bash
   git clone <repository-url>
   cd blog
   ```

2. **Kerakli paketlarni o'rnating:**

   ```bash
   npm install
   # yoki
   yarn install
   # yoki
   pnpm install
   ```

3. **Development serverini ishga tushiring:**

   ```bash
   npm run dev
   # yoki
   yarn dev
   # yoki
   pnpm dev
   ```

4. **Brauzerda oching:**
   ```
   http://localhost:3000
   ```

## 📝 Yangi maqola qo'shish

Yangi maqola qo'shish juda oson:

1. `posts/` papkasida yangi `.md` fayl yarating (masalan: `yangi-maqola.md`)

2. Faylning boshida frontmatter qo'shing:

   ```markdown
   ---
   title: "Maqola sarlavhasi"
   date: "2026-01-15"
   description: "Qisqa tavsif (150-160 belgi)"
   image: "/images/maqola-rasmi.jpg"
   author: "Amaliy Hayot"
   category: "Kategoriya"
   keywords: "kalit, so'zlar, vergul bilan"
   ---

   # Maqola matni

   Bu yerda Markdown formatida maqolangizni yozasiz...
   ```

3. Faylni saqlang va sayt avtomatik yangilanadi!

### Frontmatter maydonlari

- `title` (majburiy) - Maqola sarlavhasi
- `date` (majburiy) - Sana (YYYY-MM-DD formatida)
- `description` (tavsiya) - SEO uchun tavsif
- `image` (ixtiyoriy) - Asosiy rasm yo'li
- `author` (ixtiyoriy) - Muallif nomi
- `category` (ixtiyoriy) - Kategoriya
- `keywords` (ixtiyoriy) - SEO kalit so'zlar

## 🏗️ Loyiha strukturi

```
blog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Global layout
│   ├── page.tsx           # Bosh sahifa
│   ├── globals.css        # Global stillar
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.js    # Dinamik maqola sahifasi
│   ├── about/
│   │   └── page.js        # Biz haqimizda
│   ├── sitemap.js         # XML sitemap
│   ├── robots.js          # Robots.txt
│   └── not-found.js       # 404 sahifa
├── components/            # React komponentlar
│   ├── Header.js
│   ├── Footer.js
│   ├── PostCard.js
│   └── TableOfContents.js
├── lib/                   # Utility funksiyalar
│   └── posts.js          # Markdown ishlash
├── posts/                # Maqolalar (Markdown)
│   ├── id-karta-olish.md
│   ├── mygov-foydalanish.md
│   └── bank-karta-ochish.md
└── public/               # Static fayllar
    └── images/           # Rasmlar
```

## 🎨 Dizayn va ranglar

- **Asosiy rang:** `#2563EB` (Moviy)
- **Ikkilamchi rang:** `#10B981` (Yashil)
- **Accent:** `#F59E0B` (Oltin)
- **Background:** `#F9FAFB` (Och kulrang)
- **Matn:** `#1F2937` (To'q kulrang)

## 📦 Texnologiyalar

- **Next.js 14** - React framework (App Router)
- **React 19** - UI kutubxonasi
- **Tailwind CSS 4** - CSS framework
- **Markdown** - Maqolalar uchun
- **gray-matter** - Frontmatter parsing
- **remark** - Markdown to HTML
- **date-fns** - Sana formatlash

## 🔧 Build va Production

### Build

```bash
npm run build
```

### Production server

```bash
npm run start
```

## 🚀 Vercel'ga deploy qilish

1. **Vercel akkauntiga kiring:**

   - [vercel.com](https://vercel.com) ga kiring
   - GitHub yoki boshqa git provider orqali ro'yxatdan o'ting

2. **Loyihani import qiling:**

   - "Add New..." → "Project" ni tanlang
   - GitHub repozitoriyangizni tanlang
   - Import tugmasini bosing

3. **Environment variables (ixtiyoriy):**

   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy!**
   - Vercel avtomatik build qiladi va deploy qiladi
   - Har safar `main` branch'ga push qilsangiz, avtomatik redeploy bo'ladi

### Custom domain qo'shish

1. Vercel dashboard'da loyihangizni oching
2. "Settings" → "Domains" ga kiring
3. Domain nomingizni kiriting
4. DNS sozlamalarni bajarish

## 📊 SEO optimizatsiya

Loyiha quyidagi SEO optimizatsiyalar bilan keladi:

- ✅ Metadata API (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Article schema)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Alt text rasmlar uchun

## 🐛 Xatolarni tuzatish

### Rasmlar ko'rinmayapti

- Rasmlarni `public/images/` papkasiga qo'ying
- Frontmatter'da `image: "/images/rasm.jpg"` formatida kiriting

### Build xatosi

- `npm install` qilib, paketlarni qayta o'rnating
- `.next` papkasini o'chirib, qayta build qiling

### Maqolalar ko'rinmayapti

- `.md` fayllar `posts/` papkasida bo'lishi kerak
- Frontmatter to'g'ri formatda bo'lishi kerak
- Fayl nomida maxsus belgilar bo'lmasligi kerak

## 📝 Lisensiya

Bu loyiha ochiq manba. O'zingizning ehtiyojingizga mos ravishda o'zgartirishingiz mumkin.

## 🤝 Yordam

Agar savollar yoki muammolar bo'lsa:

- GitHub Issues oching
- Yoki loyiha muallifiga murojaat qiling

---

**Yaratuvchi:** Amaliy Hayot jamoasi  
**Yil:** 2026
