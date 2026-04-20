"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import Logo from "../public/images/logo.png";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/blog", label: "Maqolalar" },
    { href: "/about", label: "Biz haqimizda" },
    { href: "/contact", label: "Bog‘lanish" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 smooth border-b border-border ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow"
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between md:h-20 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={Logo}
              alt="Amaliy Hayot - O‘zbekistonda kundalik hayot yo‘riqnomalari"
              className="w-10 md:w-13"
            />
            <span className="text-lg md:text-3xl font-bold text-primary block sm:hidden lg:block">
              Amaliy Hayot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-neutral-text-gray hover:text-primary smooth relative group font-medium ${isActive ? "text-primary" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-neutral-text-gray hover:text-primary smooth p-2 rounded-lg hover:bg-[#F8FAFC] cursor-pointer"
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
            <Link
              href="https://t.me/+BPD056aF_E0wNjQy"
              target="_blank"
              className="hidden md:flex gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-blue hover:bg-primary-dark smooth cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span>Obuna bo‘ling</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 rounded-xl text-neutral-text-gray hover:bg-[#F8FAFC] active:bg-[#F1F5F9] smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`w-6 h-6 smooth ${mobileMenuOpen ? "rotate-90" : ""}`}
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
          className={`md:hidden overflow-hidden smooth ${mobileMenuOpen ? "max-h-84 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="py-4 border-t border-neutral-border space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium smooth ${isActive
                      ? "text-primary bg-[#DBEAFE] border-l-4 border-primary"
                      : "text-neutral-text-dark hover:text-primary hover:bg-[#F8FAFC]"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="https://t.me/+BPD056aF_E0wNjQy"
              target="_blank"
              className="w-full mt-2 flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-bold shadow-blue hover:bg-primary-dark smooth cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span>Obuna bo‘ling</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
