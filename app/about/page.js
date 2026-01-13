export const metadata = {
  title: 'Biz haqimizda',
  description: "Amaliy Hayot - O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar beruvchi blog sayt.",
  keywords: "biz haqimizda, amaliy hayot, o'zbekiston blog, yo'riqnomalar",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: 'Biz haqimizda | Amaliy Hayot',
    description: "Amaliy Hayot - O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar beruvchi blog sayt.",
    type: "website",
    url: "/about",
    siteName: "Amaliy Hayot",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Amaliy Hayot - Biz haqimizda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Biz haqimizda | Amaliy Hayot',
    description: "Amaliy Hayot - O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar beruvchi blog sayt.",
    images: ["/images/logo.png"],
  },
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-30">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Biz haqimizda
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Amaliy Hayot - O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar beruvchi professional blog sayt
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-12 lg:p-16 hover:shadow-xl transition-shadow duration-300">
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
              <strong className="text-primary">Amaliy Hayot</strong> - bu O'zbekistonda yashovchilar uchun kundalik hayotga oid
              foydali ma'lumotlar, yo'riqnomalar va maslahatlar to'plangan professional blog sayt.
            </p>
          </div>

          <h2>Bizning maqsadimiz</h2>
          <p>
            O'zbekistonda yashovchi har bir inson hayotini soddalashtirish va qiyinchiliklarga
            duch kelganda yechim topishiga yordam berish. Biz barcha ma'lumotlarni sodda va
            tushunarli tarzda taqdim etishga intilamiz.
          </p>

          <h2>Biz qanday mavzularni qamrab olamiz?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Hujjatlar va rasmiy xizmatlar (ID karta, pasport va boshqalar)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Davlat xizmatlari (my.gov.uz va boshqa portallar)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Moliya va bank xizmatlari</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Ta'lim va kasbiy rivojlanish</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Salomatlik va tibbiy xizmatlar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Transport va yo'l harakati</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Texnologiya va internet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Va boshqa ko'plab mavzular</span>
            </li>
          </ul>

          <h2>Nima uchun bizni tanlash kerak?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
              <span className="text-green-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700"><strong>Barcha ma'lumotlar to'liq va yangilanadi</strong> - Biz doimiy ravishda kontentimizni yangilab boramiz</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <span className="text-blue-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700"><strong>Qadamma-qadam yo'riqnomalar</strong> - Har bir jarayon batafsil tushuntirilgan</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <span className="text-purple-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700"><strong>O'zbek tilida sodda va tushunarli tushuntirishlar</strong> - Murakkab mavzular ham oson tushuniladi</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <span className="text-orange-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700"><strong>Professional va ishonchli kontent</strong> - Barcha ma'lumotlar tekshirilgan va ishonchli</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <span className="text-teal-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700"><strong>Vaqtni tejaydigan maslahatlar</strong> - Tezkor yechimlar va foydali maslahatlar</span>
            </li>
          </ul>

          <h2>Biz bilan bog'lanish</h2>
          <p>
            Agar sizda savollar yoki takliflar bo'lsa, biz bilan bog'laning. Biz har doim
            o'quvchilarimizdan fikr-mulohazalarni kutib qolamiz!
          </p>

          <div className="mt-10 p-6 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20 text-center">
            <p className="text-xl md:text-2xl font-bold text-primary mb-2">
              Amaliy Hayot jamoasi sizning muvaffaqiyatingiz uchun ishlayapti! 🚀
            </p>
            <p className="text-gray-600 mt-2">
              Birgalikda hayotimizni yanada qulay va sodda qilamiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
