'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SearchModal from './SearchModal';
import Logo from "../public/images/logo.png"
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/blog', label: 'Maqolalar' },
    { href: '/about', label: 'Biz haqimizda' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 smooth ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <Image src={Logo} alt="Logo" className="w-12 md:w-14" />
            <span className="text-lg md:text-3xl font-bold text-primary">Amaliy Hayot</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-text-gray hover:text-[#0EA5E9] smooth relative group font-medium"
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#0EA5E9] smooth ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-neutral-text-gray hover:text-[#0EA5E9] smooth p-2 rounded-lg hover:bg-[#F8FAFC] cursor-pointer"
              aria-label="Qidiruv"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button 
              onClick={() => {
                document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="hidden md:block bg-[#0EA5E9] text-white px-6 py-3 rounded-xl font-bold shadow-blue hover:bg-[#0369A1] smooth cursor-pointer"
            >
              Obuna bo'lish
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 rounded-xl text-neutral-text-gray hover:bg-[#F8FAFC] active:bg-[#F1F5F9] smooth focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`w-6 h-6 smooth ${mobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden smooth ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-neutral-border space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium smooth ${
                    isActive
                      ? 'text-[#0EA5E9] bg-[#DBEAFE] border-l-4 border-[#0EA5E9]'
                      : 'text-neutral-text-dark hover:text-[#0EA5E9] hover:bg-[#F8FAFC]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <button 
              onClick={() => {
                document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 bg-[#0EA5E9] text-white px-4 py-3 rounded-xl font-bold shadow-blue hover:bg-[#0369A1] smooth cursor-pointer"
            >
              Obuna bo'lish
            </button>
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
