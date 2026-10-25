"use client";

import { useLanguage } from "@/components/LanguageContext";

const IMAGES = {
  energy:
    "/images/application-energy-storage.jpg",
  printed:
    "/images/application-printed-electronics.jpg",
  chemicals:
    "/images/application-chemicals-coatings.jpg",
  composites:
    "/images/application-composites.jpg",
  thermal:
    "/images/application-thermal-electronics.jpg",
} as const;

const CONTENT = {
  KO: {
    label: "산업적용",
    heading: "귀사의 공정에는 어떻게 적용될까요",
    subheading: "소재의 형태와 물성을 산업별 요구에 맞춰 설계합니다.",
    applications: [
      {
        category: "에너지 저장",
        title: "2차전지 도전재 및 전극 소재로 전기적 특성 향상",
        codes: "CH-PDG · CH-MAG",
        alt: "에너지 저장",
        src: IMAGES.energy,
      },
      {
        category: "인쇄전자",
        title: "RFID 안테나, 발열체, 유연 회로의 전도성 패턴 형성",
        codes: "CH-GP · CH-MGP · CH-PFCM",
        alt: "인쇄전자",
        src: IMAGES.printed,
      },
      {
        category: "화학 · 도료",
        title: "도료 및 코팅제에 분산해 전도성·기능성 부여",
        codes: "CH-PDG · CH-GNP",
        alt: "화학 · 도료",
        src: IMAGES.chemicals,
      },
      {
        category: "복합소재",
        title: "자동차·산업용 부품의 강도, 열전도, 내구성 향상",
        codes: "CH-GER · CH-GM",
        alt: "복합소재",
        src: IMAGES.composites,
      },
      {
        category: "방열 · 전자부품",
        title: "발열 부품의 열 관리 및 전자파 차폐",
        codes: "CH-GNP · CH-GP",
        alt: "방열 · 전자부품",
        src: IMAGES.thermal,
      },
    ],
  },
  EN: {
    label: "Applications",
    heading: "How It Fits Into Your Process",
    subheading: "Material format and properties engineered to your industry's requirements.",
    applications: [
      {
        category: "Energy Storage",
        title: "Improves electrical performance as a conductive additive and electrode material for secondary batteries",
        codes: "CH-PDG · CH-MAG",
        alt: "Energy Storage",
        src: IMAGES.energy,
      },
      {
        category: "Printed Electronics",
        title: "Forms conductive patterns for RFID antennas, heaters, and flexible circuits",
        codes: "CH-GP · CH-MGP · CH-PFCM",
        alt: "Printed Electronics",
        src: IMAGES.printed,
      },
      {
        category: "Chemicals & Coatings",
        title: "Dispersed in paints and coatings to add conductivity and functionality",
        codes: "CH-PDG · CH-GNP",
        alt: "Chemicals and Coatings",
        src: IMAGES.chemicals,
      },
      {
        category: "Composites",
        title: "Improves strength, thermal conductivity, and durability of automotive and industrial parts",
        codes: "CH-GER · CH-GM",
        alt: "Composites",
        src: IMAGES.composites,
      },
      {
        category: "Thermal & Electronics",
        title: "Thermal management and EMI shielding for heat-generating components",
        codes: "CH-GNP · CH-GP",
        alt: "Thermal Management",
        src: IMAGES.thermal,
      },
    ],
  },
} as const;

export default function Applications() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="py-32 bg-surface-container-lowest" id="applications-direction">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="text-center mb-20">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.3em] mb-6 block font-bold">
            {t.label}
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-6">
            {t.heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-3xl mx-auto">
            {t.subheading}
          </p>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.applications.map(({ category, title, codes, alt, src }) => (
            <div
              key={category}
              className="p-8 border border-outline-variant/30 bg-white hover:border-primary transition-all duration-500 group shadow-sm hover:shadow-xl rounded-lg flex flex-col"
            >
              <div className="aspect-[16/9] mb-6 overflow-hidden bg-surface-container rounded-lg">
                <img
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={src}
                />
              </div>
              <div className="mb-6">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  {category}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
                {title}
              </h3>
              <div className="mt-auto pt-6 border-t border-outline-variant/30">
                <p className="font-label-sm text-label-sm text-on-tertiary-container">
                  {codes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
