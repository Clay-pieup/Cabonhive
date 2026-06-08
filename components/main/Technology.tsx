const CARDS = [
  {
    icon: "bolt",
    title: "한계 돌파형 전기 전도성",
    body: "구리 대비 100배 이상의 높은 전기 전도성을 실현하여 차세대 전력망과 배터리 성능을 혁신합니다.",
  },
  {
    icon: "eco",
    title: "친환경 공정",
    body: "유독성 물질 배제 및 탄소 배출 저감 공정을 통해 지속 가능한 첨단 소재 생산 생태계를 구축합니다.",
  },
  {
    icon: "tune",
    title: "맞춤형 제어 솔루션",
    body: "고객사 요구에 맞춘 정밀한 입자 크기 및 층수 제어 솔루션으로 최적의 소재 퍼포먼스를 제공합니다.",
  },
  {
    icon: "factory",
    title: "대량 양산 및 원가 절감",
    body: "급속 광열탄화 공정을 통해 압도적인 대량 양산 체계를 갖추고 시장 경쟁력 있는 단가 절감을 달성했습니다.",
  },
];

export default function Technology() {
  return (
    <section className="py-32 bg-surface-container-lowest" id="technology">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="text-center mb-20">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.3em] mb-6 block font-bold">
            혁신 파이프라인
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-2">
            카본하이브의 4대 핵심 기술 역량
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CARDS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="p-10 border border-outline-variant/30 bg-white hover:border-primary transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-full mb-8 group-hover:bg-primary-container transition-colors duration-500">
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
