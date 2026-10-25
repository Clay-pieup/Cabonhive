// 사이트 주소와 회사 정보를 한곳에서 관리합니다.
// 저장소 안에 있는 정보만 채웠습니다. 빈칸("")은 확인이 필요한 값이며,
// 비어 있으면 해당 항목은 검색엔진·공유용 정보에서 자동으로 빠집니다.

// 실제 사이트 주소 (예: "https://www.example.com"). 확인 후 입력해 주세요.
// 이 값이 있어야 공유 미리보기 이미지, sitemap.xml 주소, 대표 주소(canonical)가 생성됩니다.
export const SITE_URL: string = "https://carbonhive.co.kr";

export const COMPANY = {
  name: "카본하이브",
  alternateName: "Carbonhive",
  legalName: "Carbonhive Co., Ltd.",
  description:
    "초고속 광열탄화 공정으로 바이오매스를 고순도 그래핀으로 전환하는 카본하이브",
  email: "support@carbonhive.co.kr",
  // 화면 표시용 국제 형식
  telephone: "+82-55-351-2892",
  // tel: 링크용 (기호 없이 숫자만)
  telephoneDial: "+82553512892",
  address: {
    streetAddress: "761 Muan-ro, Bubuk-myeon, Nano Convergence Center R&D Bldg. 404",
    addressLocality: "Miryang-si",
    addressRegion: "Gyeongnam",
    postalCode: "51395",
    addressCountry: "KR",
  },
  // 로고 이미지 주소 (public/images/logo.png)
  logo: `${SITE_URL}/images/logo.png`,
  // 설립연도 (예: "2020"). 확인 후 입력해 주세요.
  foundingDate: "",
  // LinkedIn 등 공식 SNS 주소. 확인 후 입력해 주세요.
  sameAs: [] as string[],
} as const;

// 공유 미리보기에 쓸 이미지 (저장소 안의 이미지 중 가로형을 임시로 사용)
export const OG_IMAGE = {
  url: "/images/manufacturing-platform.png",
  width: 1376,
  height: 768,
  alt: "Carbonhive graphene manufacturing platform",
};
