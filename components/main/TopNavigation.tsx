"use client";

import { useState } from "react";

export default function TopNavigation() {
  const [lang, setLang] = useState<"KO" | "EN">("KO");

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 bg-white/60 shadow-sm">
      <nav className="flex justify-between items-center px-gutter max-w-max-width mx-auto h-28">
        <div className="flex items-center gap-3">
          <img
            alt="카본하이브 로고"
            className="w-auto h-28 object-contain py-2"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMEf19P8qVeoVTBX4DIPLB0JMHM7PFozl8Ij0EZqTZrKEQmkWuDXNRJrWfoEIU6UHz5H6Men_1atvQTUkMXj_blYj52DIYPEGAuvzPAs1CWbhFFOkcS9jgn4zwGk7W7-7ilfs9mvhR9RkurL5BScNwjYF2DQ6646kMIB4cR1duuoEzAOlonWyYEaOCQm3NzAalsRKkG5i1Wo5M752JY8N7fM_VQjfaE2BUx0LyicnAyfUdwJoYggSRR_h4RC-XiNAvYxdATrLPSN3R"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors uppercase tracking-wider text-xs"
            href="#technology"
          >
            기술
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors uppercase tracking-wider text-xs"
            href="#products"
          >
            제품
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors uppercase tracking-wider text-xs"
            href="#contact"
          >
            문의
          </a>
          <div className="h-4 w-[1px] bg-outline-variant" />
          <div className="flex items-center gap-1 text-xs font-label-md">
            <button
              onClick={() => setLang("KO")}
              className={`px-1.5 py-0.5 transition-colors ${
                lang === "KO"
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              KO
            </button>
            <span className="text-outline-variant">/</span>
            <button
              onClick={() => setLang("EN")}
              className={`px-1.5 py-0.5 transition-colors ${
                lang === "EN"
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
}
