const PRODUCT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXTH_CAW0uGp5kFqBMrrPbELthlLynreTpvmQd5gFCEvdsN7LUQhmUlFfzKiORL2xq3jB3sgxXNZS9xSR9YHL6pm3aX7nWcpNayDKGn5IAnsa9X9ruUuf_heRnl41DBW5YJLVgy8JVeV1ZIoBMFpF3JzRqwUdg5Zl0MD19_uX8ejrm3_yHBPVLmBa7xNZNbVijT3_HG2bhcs3psRdsaz065EpCl_M2f4QB5nojqa5OgsuVeOzF_hQEe-1DeCihSkYA84ese77gKjTi";

const PRODUCTS = [
  {
    title: "파우더",
    codes: "CH-PDG · CH-GNP · CH-MAG",
    body: "고순도 그래핀 분체. 금속(Ag/Cu) 앵커링으로 전도성을 강화한 복합 분체까지 선택 가능합니다.",
    alt: "파우더 제품 이미지",
  },
  {
    title: "페이스트 · 잉크",
    codes: "CH-GP · CH-MGP · CH-PFCM",
    body: "스크린 인쇄에 최적화된 전도성 페이스트와 무입자형 금속 잉크. 인쇄전자·발열체·안테나 공정에 적용됩니다.",
    alt: "페이스트 잉크 제품 이미지",
  },
  {
    title: "복합소재",
    codes: "CH-GER · CH-GM",
    body: "에폭시 수지와 열가소성 마스터배치 형태. 기존 컴파운딩 공정을 바꾸지 않고 도입할 수 있습니다.",
    alt: "복합소재 제품 이미지",
  },
  {
    title: "기능성 소재",
    codes: "CH-CQD",
    body: "광학 특성을 활용한 탄소 양자점. 바이오이미징·센서 분야에 적용됩니다.",
    alt: "기능성 소재 제품 이미지",
  },
];

export default function Products() {
  return (
    <section className="py-32 bg-surface" id="products">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="mb-16 text-center">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4 block">
            제품 라인업
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-6">
            필요한 형태로 공급합니다
          </h2>
          <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-3xl mx-auto">
            동일한 광열 플랫폼에서, 공정에 바로 투입 가능한 형태로 제공합니다.
          </p>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(({ title, codes, body, alt }) => (
            <div
              key={title}
              className="p-8 border border-outline-variant/30 bg-white hover:border-primary transition-all duration-500 group shadow-sm hover:shadow-xl rounded-lg"
            >
              <div className="aspect-[4/3] mb-6 overflow-hidden bg-surface-container rounded">
                <img
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={PRODUCT_IMAGE}
                />
              </div>
              <h3 className="font-headline-md text-headline-md mb-1 text-on-background">
                {title}
              </h3>
              <p className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-wider">
                {codes}
              </p>
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
