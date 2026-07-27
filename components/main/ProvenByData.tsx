const PLACEHOLDER_IMAGE =
  "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg";

const PATENTS = [
  "고속 광열 반응 기반 탄화물 제조법",
  "그래핀 층수 제어 정밀 공정 시스템",
  "금속-그래핀 하이브리드 입자 합성",
];

const CERTIFICATIONS = [
  { name: "ISO 9001", desc: "Quality Management" },
  { name: "ISO 14001", desc: "Environmental Mgmt" },
  { name: "REACH / RoHS", desc: "Safety Compliance", span: true },
];

export default function ProvenByData() {
  return (
    <section className="py-32 bg-white" id="proven-by-data">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="text-center mb-20">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.3em] mb-6 block font-bold">
            데이터로 증명합니다
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-6">
            신뢰할 수 있는 데이터 기반의 품질 관리
          </h2>
          <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-3xl mx-auto">
            모든 제품은 TEM, Raman, XRD, SEM 분석 데이터와 함께 제공됩니다.
          </p>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: 보유 특허 및 기술력 */}
          <div className="flex flex-col">
            <div className="aspect-square mb-8 overflow-hidden bg-surface-container rounded-lg border border-outline-variant/30">
              <img
                alt="특허 및 분석 시각화"
                className="w-full h-full object-cover"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              보유 특허 및 기술력
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed mb-6">
              광열 공정을 이용한 그래핀 박리 및 복합체 제조에 관한 핵심
              특허를 보유하고 있습니다.
            </p>
            <ul className="space-y-3">
              {PATENTS.map((item) => (
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

          {/* Column 2: 자체 제조 플랫폼 */}
          <div className="flex flex-col">
            <div className="aspect-square mb-8 overflow-hidden bg-surface-container rounded-lg border border-outline-variant/30">
              <img
                alt="제조 플랫폼 이미지"
                className="w-full h-full object-cover"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              자체 제조 플랫폼
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed">
              카본하이브의 독자적인 대량 생산 자동화 라인은 실시간 품질
              모니터링 시스템을 갖추고 있습니다. 밀리초 단위의 공정 데이터를
              전수 수집하여 로트(Lot) 간 편차를 최소화한 최첨단 자동화 생산
              체계를 구축했습니다.
            </p>
          </div>

          {/* Column 3: 글로벌 인증 현황 */}
          <div className="flex flex-col">
            <div className="aspect-square mb-8 overflow-hidden bg-surface-container rounded-lg border border-outline-variant/30">
              <img
                alt="인증 로고 이미지"
                className="w-full h-full object-cover"
                src={PLACEHOLDER_IMAGE}
              />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
              글로벌 인증 현황
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed mb-6">
              국제 표준 규격에 따른 엄격한 관리로 글로벌 시장이 요구하는
              신뢰성을 충족합니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {CERTIFICATIONS.map(({ name, desc, span }) => (
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
