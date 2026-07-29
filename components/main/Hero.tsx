"use client";

import { useLanguage } from "@/components/LanguageContext";

const BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGbXy1nWgcNgfXW8B19vwSDnHjzBnJZI5Fab1Ru5vYQHimJWVxwn36Uy_sIinxJ7YlQSDHjZdyO93RffunvG3My7mjQlpuCy-cIbUrMconAeLb1_amYaRo3ZLevKnbnjTl5qshpHHUFoXN9Aef58CRwcOHLoEvjj_TYn2eC5d7BsNIFacgTFuk21h9-6Nur9XPmowpDfewVeWVpP-YJCuib1ed0XWZ6ynB6Qb9dvgrTPc0YwkGZ5AI6pKILC6mnaPS4kE8g9KTfs36Y7c";

const CONTENT = {
  KO: {
    title: (
      <>
        빛으로 완성하는 <br />
        차세대 그래핀 제조 기술
      </>
    ),
    body: (
      <>
        초고속 광열 공정이 만드는 고순도 그래핀 솔루션
        <br />
        결함 제어된 그래핀을 산업별 요구 물성에 맞춰 설계합니다.
      </>
    ),
    ctaPrimary: "기술상담",
    ctaSecondary: "브로셔 다운로드",
  },
  EN: {
    title: (
      <>
        Precision Made <br />
        with Light
      </>
    ),
    body: (
      <>
        High-purity graphene from ultra-fast photothermal processing.
        <br />
        Defect-controlled graphene engineered to your industry's exact
        specifications.
      </>
    ),
    ctaPrimary: "Talk to an Expert",
    ctaSecondary: "Download Brochure",
  },
} as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Ken Burns 배경 */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 animate-kenburns"
          style={{
            backgroundImage: `url("${BG_IMAGE}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-max-width mx-auto px-gutter w-full">
        <div className="max-w-3xl text-start">
          <h1
            className="animate-fade-up font-display-lg text-display-lg text-on-background mb-6 leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            {t.title}
          </h1>

          <p
            className="animate-fade-up font-body-lg text-body-lg text-on-tertiary-container mb-10"
            style={{ animationDelay: "0.3s" }}
          >
            {t.body}
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#contact"
              className="flex items-center justify-center text-center bg-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20"
            >
              {t.ctaPrimary}
            </a>
            <button
              data-tally-open="Npv7XG"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="group border border-outline px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container transition-all shadow-none hover:shadow-md flex items-center gap-2"
            >
              {t.ctaSecondary}
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
