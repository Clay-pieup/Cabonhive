const APPLICATIONS = [
  {
    category: "에너지 저장",
    title: "2차전지 도전재 및 전극 소재로 전기적 특성 향상",
    codes: "CH-PDG · CH-MAG",
    alt: "Energy Storage",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEvK7j0V7kwM8XzHnOsJNLI40ZtYve5ZPKRfSGMRbROqq_ZqL8VzSFSwIybfhFeBsNfkoPO3OQEClW2Q6YOtan3rVDmnqCvPi3Y5BB7GD9uvZ1ZZWnPSs0VZmqn6nWiazPN-aTDwiE1C-wwhpss0dBBbI7KZgPa4d4kjHeOt_5XbAGJBkFz4uGpCNViv675gsFyJ4T6E_2YogFSsB-_n1aIhSyBUn1IBFWog9n6PFHk3d6ovW5hFmHKlmgJpe2aLDQbJr6LrMws65Z",
  },
  {
    category: "인쇄전자",
    title: "RFID 안테나, 발열체, 유연 회로의 전도성 패턴 형성",
    codes: "CH-GP · CH-MGP · CH-PFCM",
    alt: "Printed Electronics",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjIzE8nqvEmvVmdxr9CA5w7d-py9ZzU2YPBFkSQFaUVucVZa7l-pPNGNvkrmliiXbTjBi7wvingB-o4P57n0S439gJnh72j-KRvPmy2AJ1DFKxqQ6of4CCU92r-y-fGgymUldEjRkGMi0erXMOwQT8S8JKQXUDOQS8qIAatmsc1FusmwIgUlfEU4-xFKfrn6XgIvdNWUJhua0zsUGWa_oeAs7BftE-ddVwtSgTYX_LDzQQaxMv6eynvRFzDJvANFOn0WVhxL1w64UL",
  },
  {
    category: "화학 · 도료",
    title: "도료 및 코팅제에 분산해 전도성·기능성 부여",
    codes: "CH-PDG · CH-GNP",
    alt: "Chemicals and Coatings",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZNES0jz_7jI43RU9qSZajjwL4uCnyp6UcbkCfb_xlngVhsQJUzDVDmCeoKtiv0CE6hKYAJj4260jDNqlsmHXPCmbi5rusiOD1lAIiJFsB6fC2pgjCVL2e8Zjupn171NWe__6fSktOxYScK1EKFBUVbWmzFnx0icbbB8zWSnxghqQftKL9oxbZj1yyd3PGsi86mdIoCBk7QFYIxz9p46Ghe5_r3rWBhY8--dxFblE9ol_ge368h97R0v4Khw6DcKm-BuO_TAfGUo3x",
  },
  {
    category: "복합소재",
    title: "자동차·산업용 부품의 강도, 열전도, 내구성 향상",
    codes: "CH-GER · CH-GM",
    alt: "Composites",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDer_4MUfXFVF_Mmf_Ip2DzxzxKLC0Hy4RBHwXEYXbf4zDUQy9BVizchqOpg0yqJUYfuIh_OwZcRo1u93-hgdeIuZpOAwKTcmbEjELwsKTOJr1Bgn9gKc_Ie4k-0KwdPn1zxKTd1FPvCbqUeRYALFqZQhFYpBSTOF-gb-L9gI7JquD0n48TF67gAz6AOi2Z44MB9VIoh9B7_hq1gR-_9K6jwCasR24ru832PLuzk-8npLMJnsEDfwlOXpHOhCdB8QQbpNM5USyzPPqL",
  },
  {
    category: "방열 · 전자부품",
    title: "발열 부품의 열 관리 및 전자파 차폐",
    codes: "CH-GNP · CH-GP",
    alt: "Thermal Management",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAImwue1JTXWIdfMnM1ep3dlCBymUXzr0cD4LQTGPWrcTzjo9pFAtEea7JNpoZZ1OAoLTFnKBOL_NRKaMzDH9e15EYUqYkIXWEPGpo1n_iTep_Yui9JDQPs6vSO6noNGJwjJpl8MxqtIstk_gn334w3i5RZtG9LpEEijfHycrftd5-MtVdqyyuikRhNlumnNkXm3pYofqij0nCgL3ncwXJqupidP9CiMgSjONCuk74fIeGXaobDbB6wRwPrVsMzmThE2AsM08ogfMEG",
  },
];

export default function Applications() {
  return (
    <section className="py-32 bg-surface-container-lowest" id="applications-direction">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="text-center mb-20">
          <span className="font-label-md text-label-md text-primary uppercase tracking-[0.3em] mb-6 block font-bold">
            산업적용 방향
          </span>
          <h2 className="font-display-lg text-display-lg text-on-background mb-6">
            귀사의 공정에는 어떻게 적용될까요
          </h2>
          <p className="font-body-lg text-body-lg text-on-tertiary-container max-w-3xl mx-auto">
            소재의 형태와 물성을 산업별 요구에 맞춰 설계합니다.
          </p>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPLICATIONS.map(({ category, title, codes, alt, src }) => (
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
