"use client";

import { useLanguage } from "@/components/LanguageContext";
import { NAV_LINKS } from "@/components/navLinks";

const CONTENT = {
  KO: {
    companyLine: "카본하이브 | 그래핀 소재 전문 기업",
    contactLine: "Tel. +82-55-351-2892 | support@carbonhive.co.kr",
    addressLine: "경남 밀양시 부북면 무안로 761 나노융합센터 연구동 404호",
    ctaPrimary: "기술 상담",
    ctaSecondary: "브로셔 다운로드",
    copyright: "© 2026 카본하이브. 모든 권리 보유.",
  },
  EN: {
    companyLine: "Carbonhive | Graphene Materials Specialist",
    contactLine: "Tel. +82-55-351-2892 | support@carbonhive.co.kr",
    addressLine:
      "761 Muan-ro, Bubuk-myeon, Miryang-si, Gyeongnam, Korea (51395), Nano Convergence Center R&D Bldg. 404",
    ctaPrimary: "Talk to an Expert",
    ctaSecondary: "Download Brochure",
    copyright: "© 2026 Carbonhive. All rights reserved.",
  },
} as const;

export default function Footer() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-gutter max-w-max-width mx-auto">
        <div className="space-y-3">
          <span className="block font-headline-sm text-headline-sm font-black text-on-surface">
            {t.companyLine}
          </span>
          <div className="space-y-0">
            <p className="font-body-sm text-body-sm text-on-tertiary-container">
              {t.contactLine}
            </p>
            <p className="font-body-sm text-body-sm text-on-tertiary-container">
              {t.addressLine}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <button className="bg-primary-container text-on-primary-fixed px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
            {t.ctaPrimary}
          </button>
          <button
            data-tally-open="Npv7XG"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="group border border-outline px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container transition-all shadow-none hover:shadow-md flex items-center gap-2"
          >
            {t.ctaSecondary}
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      <nav className="max-w-max-width mx-auto px-gutter mt-12 pt-8 border-t border-outline-variant/30">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS[lang].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-label-md text-label-md text-on-tertiary-container hover:text-primary transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-max-width mx-auto px-gutter mt-8 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
        <p className="font-label-sm text-label-sm text-on-tertiary-container">
          {t.copyright}
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
