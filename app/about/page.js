export const metadata = {
  title: "Biz haqimizda",
  description:
    "Amaliy Hayot - O‘zbekistonda kundalik hayotga oid foydali ma‘lumotlar, yo‘riqnomalar va maslahatlar beruvchi blog sayt.",
  keywords: "biz haqimizda, amaliy hayot, o‘zbekiston blog, yo‘riqnomalar",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Biz haqimizda | Amaliy Hayot",
    description:
      "Amaliy Hayot - O‘zbekistonda kundalik hayotga oid foydali ma’lumotlar, yo‘riqnomalar va maslahatlar beruvchi blog sayt.",
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
    title: "Biz haqimizda | Amaliy Hayot",
    description:
      "Amaliy Hayot - O‘zbekistonda kundalik hayotga oid foydali ma’lumotlar, yo‘riqnomalar va maslahatlar beruvchi blog sayt.",
    images: ["/images/logo.png"],
  },
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-30">
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
          Amaliy Hayot - O‘zbekistonda kundalik hayotga oid foydali ma’lumotlar,
          yo‘riqnomalar va maslahatlar beruvchi professional blog sayt
        </p>
      </div>

      <div className="">
        <div
          className="prose prose-lg md:prose-xl max-w-none
          prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-h2:pt-2 prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-3
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-3
          prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-base md:prose-li:text-lg
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium"
        >
          <div className="mb-8 p-6 bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <p className="text-lg md:text-xl leading-relaxed mb-0">
              <strong className="text-primary">Amaliy Hayot</strong> - bu
              O‘zbekistonda yashovchilar uchun kundalik hayotga oid foydali
              ma’lumotlar, yo‘riqnomalar va maslahatlar to‘plangan professional
              blog sayt.
            </p>
          </div>

          <h2>Bizning maqsadimiz</h2>
          <p>
            O‘zbekistonda yashovchi har bir inson hayotini soddalashtirish va
            qiyinchiliklarga duch kelganda yechim topishiga yordam berish. Biz
            barcha ma‘lumotlarni sodda va tushunarli tarzda taqdim etishga
            intilamiz.
          </p>

          <h2>Biz qanday mavzularni qamrab olamiz?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span>
                Hujjatlar va rasmiy xizmatlar (ID karta, pasport va boshqalar)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span>Davlat xizmatlari (my.gov.uz va boshqa portallar)</span>
            </li>
            <li className="flex items-start gap-3">
              <span>Moliya va bank xizmatlari</span>
            </li>
            <li className="flex items-start gap-3">
              <span>Ta’lim va kasbiy rivojlanish</span>
            </li>
            <li className="flex items-start gap-3">
              <span>Salomatlik va tibbiy xizmatlar</span>
            </li>
            <li className="flex items-start gap-3">
              <span>Transport va yo‘l harakati</span>
            </li>
            <li className="flex items-start gap-3">
              <span>Texnologiya va internet</span>
            </li>
            <li className="flex items-start gap-3">
              <span>Va boshqa ko‘plab mavzular</span>
            </li>
          </ul>

          <h2>Nima uchun bizni tanlash kerak</h2>
          <ul className="space-y-4 list-none1">
            <li className="flex items-start gap-3 list-none p-4 bg-green-50 rounded-xl border border-green-100">
              <span className="text-green-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700">
                <strong>Barcha ma’lumotlar to‘liq va yangilanadi</strong> - Biz
                doimiy ravishda kontentimizni yangilab boramiz
              </span>
            </li>
            <li className="list-none flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <span className="text-blue-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700">
                <strong>Qadamma-qadam yo‘riqnomalar</strong> - Har bir jarayon
                batafsil tushuntirilgan
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <span className="text-purple-600 text-xl font-bold mt-0.5">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>
                  O‘zbek tilida sodda va tushunarli tushuntirishlar
                </strong>{" "}
                - Murakkab mavzular ham oson tushuniladi
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <span className="text-orange-600 text-xl font-bold mt-0.5">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Professional va ishonchli kontent</strong> - Barcha
                ma’lumotlar tekshirilgan va ishonchli
              </span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100">
              <span className="text-teal-600 text-xl font-bold mt-0.5">✓</span>
              <span className="text-gray-700">
                <strong>Vaqtni tejaydigan maslahatlar</strong> - Tezkor
                yechimlar va foydali maslahatlar
              </span>
            </li>
          </ul>

          <h2>Biz bilan bog‘lanish</h2>
          <p>
            Agar sizda savollar yoki takliflar bo‘lsa, biz bilan bog‘laning. Biz
            har doim o‘quvchilarimizdan fikr-mulohazalarni kutib qolamiz!
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            {/* <div className="p-6 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email orqali</h3>
                  <a
                    href="mailto:info@amaliyhayot.uz"
                    className="text-blue-600 hover:text-blue-800 font-medium break-all"
                  >
                    info@amaliyhayot.uz
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Bizga email yuboring va 24 soat ichida javob olasiz
                  </p>
                </div>
              </div>
            </div> */}

            {/* Telegram */}
            <div className="p-6 bg-linear-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Telegram
                  </h3>
                  <a
                    href="https://t.me/abduazimov707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-800 font-medium"
                  >
                    @abduazimov707
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Telegram orqali tezkor javob oling
                  </p>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="p-6 bg-linear-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Facebook
                  </h3>
                  <a
                    href="https://facebook.com/amaliyhayot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    facebook.com/amaliyhayot
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Facebook sahifamizga qo‘shiling
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            {/* <div className="p-6 bg-linear-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ish vaqti</h3>
                  <p className="text-gray-700 font-medium">
                    Dushanba - Juma: 9:00 - 18:00
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Email va Telegram orqali 24/7 javob beramiz
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="mt-10 p-6 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20 text-center">
            <p className="text-xl md:text-2xl font-bold text-primary mb-2">
              Amaliy Hayot jamoasi sizning muvaffaqiyatingiz uchun ishlayapti!
              🚀
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
