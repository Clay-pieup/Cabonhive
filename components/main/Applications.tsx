const APPLICATIONS = [
  {
    alt: "고효율 배터리 및 에너지 저장 장치 비주얼",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi-z_LD9Ha6SpFKJyWgir_Y3_B5-LU1A66GXIjqTZg_DvnCQrUW-BIqhW3mjufSxst-cdMA7G-j3ozmMp8dCWhe-ypDp_sdJQqdzCFk3e7ZZ8KzzFe038XJ5X6HEocZ44IYikftnfXRxZ5F-6oW2jSrcHKcylYDg25w0--JyEK8QmYdSmJB44kdC90dCa3Kz1FMhZCrcoT8WBcw41y3MmRZdkR0i82gbfJm2VFIbH0VHCOfdTZ-qvEqV3P8U2wraHMV_R_cgY9eXo8",
    title: "고효율 배터리 및 에너지 저장 장치",
    body: "차세대 이차전지의 에너지 밀도를 높이고 충전 속도를 혁신적으로 단축시킵니다.",
  },
  {
    alt: "차세대 방열 및 전도성 코팅재 비주얼",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgkbT0GgH9MFzClr1uDoFrW67cULC5vbjP4_RpU4834B1I7dEuXF4t8zNt9AjyDKr5ax893Sh7idYHWcXyqTUxT19MCICBipjogX59DNRhCdWfxKhaFvzrrCsTkjtCZvgSiZh-dtvWWDzoyi1WP-8AdQ7G-YorGSf_gyhmDU_b_PCGirVNTcmN68X8mk1Mkx1FaXND2VpyKYOVB7iP9HSshCAptsGjRR5rQpFdnDsL_hm4PH6I_Dik00N-0xJEfPgtOR7IZYI6F3xx",
    title: "차세대 방열 및 전도성 코팅재",
    body: "고집적 전자 기기의 열 관리 문제를 해결하고 우수한 전기 전도성을 부여합니다.",
  },
  {
    alt: "정밀 의료 및 생체 인식 센서 비주얼",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD00E5FDXGJnyBqXlg19MRj6Bcv_pm0jbIc6q0z5dtaU5OO6IOQhYk-3XOLSOEZFI0se26VUcHek-_d7iIVQB3UcYf9Qe2s78n0WRlfYZufDkOhmG8oNdrhfaH5C5Q6MLY2g91ZkpJqH58ZzPo9Qxw_JvQBnayy3hh_LEhng3lXGYV9NsfRPeoPuYxVvE7ookJPRl5v1IydjvRWNQtbowyvQNOIejl1MNg50WAGJLqrmL13C8vJdMs37FIqWXNMrhYFAG6diUcwx_uV",
    title: "정밀 의료 및 생체 인식 센서",
    body: "고감도 그래핀 센서를 통해 실시간 건강 모니터링 및 정밀 진단 솔루션을 제공합니다.",
  },
];

export default function Applications() {
  return (
    <section className="py-32 bg-surface" id="applications">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="mb-16">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4 block">
            산업별 응용 분야
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-6">
            카본하이브의 실질적 가치
          </h2>
          <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-3xl">
            카본하이브는 실험실의 성과에 머물지 않습니다. 검증된 나노 소재
            기술로 귀사의 제품에 실질적인 성능 향상과 원가 절감을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APPLICATIONS.map(({ alt, src, title, body }) => (
            <div
              key={title}
              className="flex flex-col bg-surface-container-low rounded-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={src}
                />
              </div>
              <div className="flex flex-col items-start px-4 py-8">
                <h3 className="font-headline-md text-headline-md mb-4 text-on-background">
                  {title}
                </h3>
                <p className="font-body-md text-body-md text-on-tertiary-container">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
