import Link from 'next/link';
import Logo from "../public/images/logo.png"
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-subtle-gradient border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src={Logo} alt="Amaliy Hayot - O'zbekistonda kundalik hayot yo'riqnomalari" className="w-12 md:w-14" width={56} height={56} />
              <span className="text-lg md:text-3xl font-bold text-primary">Amaliy Hayot</span>
            </Link>
            <p className="text-sm md:text-base text-neutral-text-gray leading-relaxed">
              O'zbekistonda kundalik hayotga oid foydali ma'lumotlar, yo'riqnomalar va maslahatlar.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-text-dark mb-4">Havolalar</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-neutral-text-gray hover:text-[#0EA5E9] smooth inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#0EA5E9] mr-0 group-hover:mr-2 smooth"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-text-dark mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative p-3 rounded-xl bg-white border border-neutral-border hover:border-[#0EA5E9] shadow-soft hover:shadow-soft-lg text-neutral-text-gray hover:text-white smooth hover:bg-[#0EA5E9]"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-neutral-text-light mt-4">
              Biz bilan bog'laning va yangiliklardan xabardor bo'ling
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-border/50 text-center">
          <p className="text-sm text-neutral-text-gray">
            © {currentYear} <span className="font-semibold text-neutral-text-dark">Amaliy Hayot</span>. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
