export const metadata = {
  title: 'Maxfiylik siyosati',
  description: "Amaliy Hayot saytining maxfiylik siyosati. Shaxsiy ma'lumotlaringizni qanday to'plash, ishlatish va himoya qilishimiz haqida batafsil ma'lumot.",
  keywords: "maxfiylik siyosati, shaxsiy ma'lumotlar, cookie, xavfsizlik, amaliy hayot",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: 'Maxfiylik siyosati | Amaliy Hayot',
    description: "Amaliy Hayot saytining maxfiylik siyosati. Shaxsiy ma'lumotlaringizni qanday to'plash, ishlatish va himoya qilishimiz haqida batafsil ma'lumot.",
    type: "website",
    url: "/privacy",
    siteName: "Amaliy Hayot",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Amaliy Hayot - Maxfiylik siyosati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Maxfiylik siyosati | Amaliy Hayot',
    description: "Amaliy Hayot saytining maxfiylik siyosati. Shaxsiy ma'lumotlaringizni qanday to'plash, ishlatish va himoya qilishimiz haqida batafsil ma'lumot.",
    images: ["/images/logo.png"],
  },
};

export default function Privacy() {
  const lastUpdated = "2026-yil 1-yanvar";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-30">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Maxfiylik siyosati
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Bu sahifa Amaliy Hayot saytida shaxsiy ma'lumotlaringizni qanday to'plash, 
          ishlatish va himoya qilishimiz haqida batafsil ma'lumot beradi.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Oxirgi yangilanish: {lastUpdated}
        </p>
      </div>

      <div className="prose prose-lg md:prose-xl max-w-none
        prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-h2:pt-2 prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-3
        prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
        prose-strong:text-foreground prose-strong:font-semibold
        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-3
        prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-base md:prose-li:text-lg
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium">

        <div className="mb-8 p-6 bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
          <p className="text-lg md:text-xl leading-relaxed mb-0">
            <strong className="text-primary">Amaliy Hayot</strong> sizning maxfiyligingizni himoya qilishga 
            katta ahamiyat beradi. Ushbu maxfiylik siyosati bizning saytimizdan foydalanganda 
            shaxsiy ma'lumotlaringizni qanday to'plash, ishlatish va himoya qilishimizni tushuntiradi.
          </p>
        </div>

        <h2>1. To'plangan ma'lumotlar</h2>
        <p>
          Biz quyidagi ma'lumotlarni to'playmiz:
        </p>
        <ul>
          <li>
            <strong>Texnik ma'lumotlar:</strong> IP manzil, brauzer turi, qurilma ma'lumotlari, 
            operatsion tizim va boshqa texnik ma'lumotlar
          </li>
          <li>
            <strong>Foydalanish ma'lumotlari:</strong> Saytda qaysi sahifalarni ko'rib chiqganingiz, 
            qanday vaqtda tashrif buyurganingiz va qanday harakatlarni amalga oshirganingiz
          </li>
          <li>
            <strong>Newsletter obunasi:</strong> Agar siz newsletter ga obuna bo'lsangiz, 
            biz sizning email manzilingizni saqlaymiz
          </li>
        </ul>

        <h2>2. Ma'lumotlardan foydalanish</h2>
        <p>
          To'plangan ma'lumotlardan quyidagi maqsadlarda foydalanamiz:
        </p>
        <ul>
          <li>Saytning ishlashini yaxshilash va optimallashtirish</li>
          <li>Foydalanuvchilar tajribasini yaxshilash</li>
          <li>Statistik ma'lumotlarni tahlil qilish</li>
          <li>Xavfsizlikni ta'minlash</li>
          <li>Newsletter orqali yangiliklarni yuborish (faqat obuna bo'lganlar uchun)</li>
        </ul>

        <h2>3. Cookie (Kukilar)</h2>
        <p>
          Bizning saytimiz cookie (kukilar) texnologiyasidan foydalanadi. Cookie - bu 
          brauzeringizga saqlanadigan kichik matn fayllari bo'lib, ular saytning 
          ishlashini yaxshilash va foydalanuvchi tajribasini optimallashtirish uchun ishlatiladi.
        </p>
        <p>
          Cookie turlari:
        </p>
        <ul>
          <li>
            <strong>Zaruriy cookie:</strong> Saytning asosiy funksiyalarini ta'minlash uchun
          </li>
          <li>
            <strong>Analitik cookie:</strong> Sayt foydalanishini tahlil qilish uchun 
            (Google Analytics, Yandex.Metrika)
          </li>
          <li>
            <strong>Funksional cookie:</strong> Foydalanuvchi afzalliklarini saqlash uchun
          </li>
        </ul>
        <p>
          Siz brauzer sozlamalari orqali cookie larni o'chirib qo'yishingiz mumkin, 
          ammo bu saytning ba'zi funksiyalarining ishlamasligiga olib kelishi mumkin.
        </p>

        <h2>4. Uchinchi tomon xizmatlari</h2>
        <p>
          Biz quyidagi uchinchi tomon xizmatlaridan foydalanamiz:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Sayt foydalanishini tahlil qilish uchun
          </li>
          <li>
            <strong>Yandex.Metrika:</strong> Sayt statistikasini yig'ish uchun
          </li>
        </ul>
        <p>
          Bu xizmatlar o'zlarining maxfiylik siyosatiga ega. Biz ularning siyosatlarini 
          nazorat qila olmaymiz va javobgarlikni o'z zimmalariga olmaymiz.
        </p>

        <h2>5. Ma'lumotlarni himoya qilish</h2>
        <p>
          Biz sizning shaxsiy ma'lumotlaringizni himoya qilish uchun quyidagi choralarni ko'ramiz:
        </p>
        <ul>
          <li>Xavfsiz HTTPS protokolidan foydalanish</li>
          <li>Muntazam xavfsizlik tekshiruvlari</li>
          <li>Ma'lumotlarni shifrlash</li>
          <li>Faqat zarur bo'lgan ma'lumotlarni to'plash</li>
        </ul>
        <p>
          Biroq, internetda mutlaqo xavfsiz ma'lumot uzatish imkoni yo'qligini esda tuting.
        </p>

        <h2>6. Ma'lumotlarni saqlash muddati</h2>
        <p>
          Biz sizning ma'lumotlaringizni faqat zarur bo'lgan muddat davomida saqlaymiz. 
          Statistik ma'lumotlar odatda 2 yil davomida saqlanadi. Newsletter obunasi 
          ma'lumotlari obuna bekor qilingungacha saqlanadi.
        </p>

        <h2>7. Sizning huquqlaringiz</h2>
        <p>
          Siz quyidagi huquqlarga egasiz:
        </p>
        <ul>
          <li>O'zingiz haqingizdagi ma'lumotlarni olish</li>
          <li>Ma'lumotlarni tuzatish yoki o'chirishni so'rash</li>
          <li>Newsletter obunasini bekor qilish</li>
          <li>Cookie lardan foydalanishni cheklash</li>
        </ul>
        <p>
          Ushbu huquqlardan foydalanish uchun biz bilan bog'laning: 
          <a href="/contact" className="text-primary font-medium">Bog'lanish sahifasi</a>
        </p>

        <h2>8. Bolalar maxfiyligi</h2>
        <p>
          Bizning saytimiz 13 yoshdan kichik bolalar uchun mo'ljallanmagan. 
          Biz ataylab 13 yoshdan kichik bolalardan shaxsiy ma'lumot to'plamaymiz. 
          Agar siz ota-ona yoki vasiy bo'lsangiz va bolangiz bizga shaxsiy ma'lumot 
          bergan bo'lsa, biz bilan bog'laning va biz bu ma'lumotni olib tashlaymiz.
        </p>

        <h2>9. Siyosat o'zgarishlari</h2>
        <p>
          Biz ushbu maxfiylik siyosatini vaqt-vaqti bilan yangilashimiz mumkin. 
          O'zgarishlar kiritilganda, biz sahifaning yuqori qismida yangilanish sanasini 
          ko'rsatamiz. Ushbu sahifani muntazam tekshirib turishni tavsiya qilamiz.
        </p>

        <h2>10. Biz bilan bog'lanish</h2>
        <p>
          Maxfiylik siyosati yoki shaxsiy ma'lumotlar bilan bog'liq savollaringiz bo'lsa, 
          biz bilan bog'laning:
        </p>
        <ul>
          <li>
            <strong>Telegram:</strong>{' '}
            <a href="https://t.me/abduazimov707" target="_blank" rel="noopener noreferrer">
              @abduazimov707
            </a>
          </li>
          <li>
            <strong>Facebook:</strong>{' '}
            <a href="https://facebook.com/amaliyhayot" target="_blank" rel="noopener noreferrer">
              facebook.com/amaliyhayot
            </a>
          </li>
          <li>
            <strong>Bog'lanish sahifasi:</strong>{' '}
            <a href="/contact">/contact</a>
          </li>
        </ul>

        <div className="mt-10 p-6 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20 text-center">
          <p className="text-xl md:text-2xl font-bold text-primary mb-2">
            Maxfiylik sizning huquqingiz! 🔒
          </p>
          <p className="text-gray-600 mt-2">
            Biz sizning shaxsiy ma'lumotlaringizni himoya qilishga sodiqmiz
          </p>
        </div>
      </div>
    </div>
  );
}
