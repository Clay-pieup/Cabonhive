"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { NAV_LINKS } from "@/components/navLinks";

const LANGUAGES = [
  { code: "KO", label: "한국어" },
  { code: "EN", label: "English" },
] as const;

export default function TopNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [lang]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/60 backdrop-blur-md border-b border-outline-variant/30 shadow-sm"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <nav className="flex justify-between items-center px-gutter max-w-max-width mx-auto h-24">
        <a href="#" aria-label="홈으로 이동" className="flex items-center gap-3">
          <img
            alt="카본하이브 로고"
            className="w-auto h-24 object-contain py-2"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMEf19P8qVeoVTBX4DIPLB0JMHM7PFozl8Ij0EZqTZrKEQmkWuDXNRJrWfoEIU6UHz5H6Men_1atvQTUkMXj_blYj52DIYPEGAuvzPAs1CWbhFFOkcS9jgn4zwGk7W7-7ilfs9mvhR9RkurL5BScNwjYF2DQ6646kMIB4cR1duuoEzAOlonWyYEaOCQm3NzAalsRKkG5i1Wo5M752JY8N7fM_VQjfaE2BUx0LyicnAyfUdwJoYggSRR_h4RC-XiNAvYxdATrLPSN3R"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS[lang].map(({ label, href }) => (
            <a
              key={href}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider"
              href={href}
            >
              {label}
            </a>
          ))}

          <div className="h-4 w-px bg-outline-variant" />

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((open) => !open)}
              className="flex items-center gap-1 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              Language
              <span
                className={`material-symbols-outlined text-base transition-transform duration-200 ${
                  langOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-32 bg-white border border-outline-variant/30 rounded-lg shadow-lg overflow-hidden"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <li key={code}>
                    <button
                      role="option"
                      aria-selected={lang === code}
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-label-md font-label-md transition-colors ${
                        lang === code
                          ? "text-primary font-bold bg-surface-container-low"
                          : "text-on-surface-variant hover:bg-surface-container-low"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/30 px-gutter py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS[lang].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-px bg-outline-variant/30 my-4" />

          <div className="flex items-center gap-2">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-4 py-2 rounded-lg text-label-md font-label-md transition-colors ${
                  lang === code
                    ? "bg-primary-container text-on-primary-fixed font-bold"
                    : "border border-outline-variant text-on-surface-variant"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
