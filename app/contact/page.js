export const metadata = {
  title: 'Bog\'lanish',
  description: "Amaliy Hayot bilan bog'laning. Savollar, takliflar yoki fikr-mulohazalar uchun bizga murojaat qiling.",
  keywords: "bog'lanish, kontakt, amaliy hayot, savollar, takliflar",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: 'Bog\'lanish | Amaliy Hayot',
    description: "Amaliy Hayot bilan bog'laning. Savollar, takliflar yoki fikr-mulohazalar uchun bizga murojaat qiling.",
    type: "website",
    url: "/contact",
    siteName: "Amaliy Hayot",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Amaliy Hayot - Bog'lanish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Bog\'lanish | Amaliy Hayot',
    description: "Amaliy Hayot bilan bog'laning. Savollar, takliflar yoki fikr-mulohazalar uchun bizga murojaat qiling.",
    images: ["/images/logo.png"],
  },
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-30">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Biz bilan bog'laning
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Savollar, takliflar yoki fikr-mulohazalaringiz bo'lsa, bizga murojaat qiling. 
          Biz har doim o'quvchilarimizdan fikr-mulohazalarni kutib qolamiz!
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

        {/* Contact Methods */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Telegram */}
          <div className="p-6 bg-linear-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Telegram</h3>
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
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Facebook</h3>
                <a
                  href="https://facebook.com/amaliyhayot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  facebook.com/amaliyhayot
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Facebook sahifamizga qo'shiling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10 p-6 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20">
          <h2 className="mt-0">Qanday yordam bera olamiz?</h2>
          <p>
            Bizga murojaat qilish orqali siz quyidagilarni so'rashingiz mumkin:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Maqolalar bo'yicha savollar va tushuntirishlar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Yangi mavzular bo'yicha takliflar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Sayt ishlashi bo'yicha fikr-mulohazalar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Hamkorlik takliflari</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Boshqa har qanday savollar</span>
            </li>
          </ul>
        </div>

        {/* Response Time */}
        <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-500 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Javob vaqti</h3>
              <p className="text-gray-700">
                Biz Telegram orqali murojaat qilganlarga <strong>24 soat ichida</strong> javob berishga harakat qilamiz. 
                Facebook orqali murojaat qilganlarga esa <strong>48 soat ichida</strong> javob beramiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
