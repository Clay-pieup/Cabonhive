"use client";

import { useLanguage } from "@/components/LanguageContext";

const PLACEHOLDER_IMAGE =
  "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg";

const CONTENT = {
  KO: {
    label: "특허인증",
    heading: "신뢰할 수 있는 데이터 기반의 품질 관리",
    subheading: "모든 제품은 TEM, Raman, XRD, SEM 분석 데이터와 함께 제공됩니다.",
    col1Title: "보유 특허 및 기술력",
    col1Body: "광열 공정을 이용한 그래핀 박리 및 복합체 제조에 관한 핵심 특허를 보유하고 있습니다.",
    patents: [
      "고속 광열 반응 기반 탄화물 제조법",
      "그래핀 층수 제어 정밀 공정 시스템",
      "금속-그래핀 하이브리드 입자 합성",
    ],
    col2Title: "자체 제조 플랫폼",
    col2Body:
      "카본하이브의 독자적인 대량 생산 자동화 라인은 실시간 품질 모니터링 시스템을 갖추고 있습니다. 밀리초 단위의 공정 데이터를 전수 수집하여 로트(Lot) 간 편차를 최소화한 최첨단 자동화 생산 체계를 구축했습니다.",
    col3Title: "글로벌 인증 현황",
    col3Body: "국제 표준 규격에 따른 엄격한 관리로 글로벌 시장이 요구하는 신뢰성을 충족합니다.",
    certifications: [
      { name: "ISO 9001", desc: "Quality Management" },
      { name: "ISO 14001", desc: "Environmental Mgmt" },
      { name: "REACH / RoHS", desc: "Safety Compliance", span: true },
    ],
    altPatent: "특허 및 분석 시각화",
    altPlatform: "제조 플랫폼 이미지",
    altCert: "인증 로고 이미지",
  },
  EN: {
    label: "Patents & Certifications",
    heading: "Quality Management Backed by Reliable Data",
    subheading: "Every product ships with TEM, Raman, XRD, and SEM analysis data.",
    col1Title: "Patents & Core Technology",
    col1Body: "We hold core patents in graphene exfoliation and composite manufacturing using photothermal processing.",
    patents: [
      "Carbonization method based on high-speed photothermal reaction",
      "Precision process system for graphene layer control",
      "Synthesis of metal-graphene hybrid particles",
    ],
    col2Title: "In-House Manufacturing Platform",
    col2Body:
      "Carbonhive's proprietary mass-production automation line is equipped with a real-time quality monitoring system. It collects millisecond-scale process data across every unit, minimizing lot-to-lot variation through a state-of-the-art automated production system.",
    col3Title: "Global Certifications",
    col3Body: "Rigorous management under international standards meets the reliability the global market demands.",
    certifications: [
      { name: "ISO 9001", desc: "Quality Management" },
      { name: "ISO 14001", desc: "Environmental Mgmt" },
      { name: "REACH / RoHS", desc: "Safety Compliance", span: true },
    ],
    altPatent: "Patent and analysis visualization",
    altPlatform: "Manufacturing platform image",
    altCert: "Certification logo image",
  },
} as const;

export default function ProvenByData() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="py-32 bg-white" id="proven-by-data">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="aspect-square mb-8 overflow-hidden bg-surface-container rounded-lg border border-outline-variant/30">
              <img
                alt={t.altPatent}
                className="w-full h-full object-cover"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              {t.col1Title}
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed mb-6">
              {t.col1Body}
            </p>
            <ul className="space-y-3">
              {t.patents.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-primary text-lg">
                    verified
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="aspect-square mb-8 overflow-hidden bg-surface-container rounded-lg border border-outline-variant/30">
              <img
                alt={t.altPlatform}
                className="w-full h-full object-cover"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              {t.col2Title}
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed">
              {t.col2Body}
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="aspect-square mb-8 overflow-hidden bg-surface-container rounded-lg border border-outline-variant/30">
              <img
                alt={t.altCert}
                className="w-full h-full object-cover"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              {t.col3Title}
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed mb-6">
              {t.col3Body}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {t.certifications.map(({ name, desc, span }) => (
                <div
                  key={name}
                  className={`p-4 bg-surface-container-low border border-outline-variant/30 rounded text-center ${
                    span ? "col-span-2" : ""
                  }`}
                >
                  <p className="font-label-md font-bold text-on-background">
                    {name}
                  </p>
                  <p className="text-[10px] uppercase text-on-tertiary-container mt-1">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
