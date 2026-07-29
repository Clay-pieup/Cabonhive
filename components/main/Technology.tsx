"use client";

import { useLanguage } from "@/components/LanguageContext";

const CONTENT = {
  KO: {
    label: "차세대기술",
    heading: "공정이 다르면, 소재가 다릅니다",
    subheading: "그래핀의 성능은 제조 방식에서 결정됩니다.",
    tableHeaders: ["구분", "기존 그래핀 제조", "카본하이브 광열 공정"],
    comparisonRows: [
      {
        label: "반응 시간",
        legacy: "수 시간 ~ 수 일",
        carbonhive: "밀리초(ms) 단위",
      },
      {
        label: "품질 제어",
        legacy: "배치별 편차 발생",
        carbonhive: "결함 제어 기반 균일 품질",
      },
      {
        label: "물성 조정",
        legacy: "제한적",
        carbonhive: "산업별 맞춤 설계",
      },
      {
        label: "소재 형태",
        legacy: "단일 형태 중심",
        carbonhive: "파우더·페이스트·마스터배치",
      },
    ],
    cards: [
      {
        icon: "bolt",
        title: "초고속 공정",
        body: "밀리초(ms) 단위의 광열 반응으로 탄화·팽창·박리가 순간적으로 완료됩니다.",
      },
      {
        icon: "track_changes",
        title: "정밀한 결함 제어",
        body: "반응 조건을 정밀하게 제어해 결함을 최소화하고, 우수한 전기·열적 특성을 확보합니다.",
      },
      {
        icon: "settings",
        title: "물성 설계",
        body: "산업별 요구에 맞춰 그래핀의 구조와 특성을 설계해 공급합니다.",
      },
    ],
  },
  EN: {
    label: "Technology",
    heading: "Different Process, Different Material",
    subheading: "Graphene performance is determined by how it's made.",
    tableHeaders: ["Category", "Conventional Graphene", "Carbonhive Photothermal"],
    comparisonRows: [
      {
        label: "Reaction Time",
        legacy: "Tens of minutes to hours",
        carbonhive: "Milliseconds (ms)",
      },
      {
        label: "Quality Control",
        legacy: "Batch-to-batch variation",
        carbonhive: "Uniform quality via defect control",
      },
      {
        label: "Property Tuning",
        legacy: "Limited",
        carbonhive: "Custom-engineered per industry",
      },
      {
        label: "Material Formats",
        legacy: "Single format only",
        carbonhive: "Powder · Paste · Masterbatch",
      },
    ],
    cards: [
      {
        icon: "bolt",
        title: "Ultra-Fast Process",
        body: "Carbonization, expansion, and exfoliation complete instantly through millisecond-scale photothermal reactions.",
      },
      {
        icon: "track_changes",
        title: "Precise Defect Control",
        body: "Reaction conditions are precisely controlled to minimize defects, securing superior electrical and thermal properties.",
      },
      {
        icon: "settings",
        title: "Property Engineering",
        body: "Graphene structure and properties are engineered and supplied to match each industry's requirements.",
      },
    ],
  },
} as const;

export default function Technology() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="py-32 bg-surface-container-lowest" id="technology">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="text-center mb-20">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.3em] mb-6 block font-bold">
            {t.label}
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-2">
            {t.heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-3xl mx-auto mt-4">
            {t.subheading}
          </p>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-8" />
        </div>

        {/* Comparison Table */}
        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-surface-container">
                <th className="p-6 text-start font-label-md text-label-md text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30 whitespace-nowrap">
                  {t.tableHeaders[0]}
                </th>
                <th className="p-6 text-center font-label-md text-label-md text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30 whitespace-nowrap">
                  {t.tableHeaders[1]}
                </th>
                <th className="p-6 text-center font-label-md text-label-md text-primary uppercase tracking-wider border-b-2 border-primary-container bg-primary-container/5 whitespace-nowrap">
                  {t.tableHeaders[2]}
                </th>
              </tr>
            </thead>
            <tbody className="font-body-md text-on-surface">
              {t.comparisonRows.map(({ label, legacy, carbonhive }, i) => (
                <tr
                  key={label}
                  className={
                    i < t.comparisonRows.length - 1
                      ? "border-b border-outline-variant/30"
                      : ""
                  }
                >
                  <td className="p-6 font-bold bg-surface-container-low/30 whitespace-nowrap">
                    {label}
                  </td>
                  <td className="p-6 text-center text-on-tertiary-container whitespace-nowrap">
                    {legacy}
                  </td>
                  <td className="p-6 text-center font-bold bg-primary-container/5 whitespace-nowrap">
                    {carbonhive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map(({ icon, title, body }) => (
            <div
              key={title}
              className="p-8 border border-outline-variant/30 bg-white hover:border-primary transition-all duration-500 group shadow-sm hover:shadow-xl rounded-lg"
            >
              <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-full mb-6 group-hover:bg-primary-container transition-colors duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-fixed text-headline-md">
                  {icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
                {title}
              </h3>
              <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
