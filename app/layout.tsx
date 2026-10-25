import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import TallyPopupCloseButton from "@/components/TallyPopupCloseButton";
import TallyBrochureCompletion from "@/components/TallyBrochureCompletion";
import { LanguageProvider } from "@/components/LanguageContext";
import { COMPANY, OG_IMAGE, SITE_URL } from "@/lib/site";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const SITE_TITLE = "카본하이브 | 미래 그래핀 소재의 리더";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: COMPANY.description,
  openGraph: {
    type: "website",
    siteName: `${COMPANY.name} ${COMPANY.alternateName}`,
    title: SITE_TITLE,
    description: COMPANY.description,
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    // 이미지와 주소는 전체 주소(https://...)가 필요해서 SITE_URL이 있을 때만 넣습니다.
    ...(SITE_URL ? { url: SITE_URL, images: [OG_IMAGE] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: COMPANY.description,
    ...(SITE_URL ? { images: [OG_IMAGE.url] } : {}),
  },
  ...(SITE_URL
    ? { metadataBase: new URL(SITE_URL), alternates: { canonical: "/" } }
    : {}),
};

// 검색엔진에 회사 정보를 알려주는 구조화 데이터 (빈 값은 자동으로 제외)
const organizationJsonLd = Object.fromEntries(
  Object.entries({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: COMPANY.alternateName,
    legalName: COMPANY.legalName,
    description: COMPANY.description,
    url: SITE_URL,
    logo: COMPANY.logo,
    foundingDate: COMPANY.foundingDate,
    email: COMPANY.email,
    telephone: COMPANY.telephone,
    address: { "@type": "PostalAddress", ...COMPANY.address },
    sameAs: COMPANY.sameAs.length ? COMPANY.sameAs : "",
  }).filter(([, value]) => value !== ""),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoSansKR.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <TallyPopupCloseButton />
          <TallyBrochureCompletion />
        </LanguageProvider>
      </body>
    </html>
  );
}
