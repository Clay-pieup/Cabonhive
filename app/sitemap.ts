import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// 사이트 주소(SITE_URL)가 입력되기 전에는 빈 sitemap을 내보냅니다.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
