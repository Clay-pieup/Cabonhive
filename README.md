# 카본하이브 웹사이트

카본하이브(Carbonhive)의 공식 소개 사이트입니다.
초고속 광열 공정으로 바이오매스를 고순도 그래핀으로 만드는 기술과 제품을 소개합니다.

## 주요 기능
- 한 페이지 스크롤형 랜딩 페이지 (기술 · 제품 · 산업 적용 · 특허/인증 · 문의)
- 한국어 / 영어 전환
- 브로셔 다운로드: Tally 신청서를 제출하면 PDF가 자동으로 내려받아짐
- 문의하기: Tally 폼을 페이지에 넣었고, 제출하면 완료 문구가 표시됨

## 기술 스택
Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Tally(폼) · Cloudflare Pages(배포)

## 로컬에서 실행하기
```bash
npm install
npm run dev      # http://localhost:3000 에서 확인
npm run build    # 배포용 빌드 확인
npm run lint     # 코드 검사
```
> `.npmrc`에 `legacy-peer-deps=true`가 설정되어 있습니다 (Cloudflare 빌드 호환용).

## 폴더 구조
| 경로 | 설명 |
|---|---|
| `app/page.tsx` | 메인 페이지 (섹션 조립) |
| `app/layout.tsx` | 공통 틀: 글꼴, 메타 정보, Tally 스크립트 |
| `app/globals.css` | 디자인 토큰 (색상, 글자 크기 등) |
| `app/brochure-download/` | 브로셔 자동 다운로드 페이지 |
| `app/thank-you/` | 문의 감사 페이지 |
| `components/main/` | 메인 페이지 섹션별 부품 |
| `components/navLinks.ts` | 상단 메뉴 (한/영) |
| `components/LanguageContext.tsx` | 언어 상태 관리 |
| `components/Tally*.tsx` | 브로셔 팝업 관련 동작 |
| `public/` | 이미지, 파비콘, 브로셔 PDF |

## 자주 하는 수정
- **문구 수정:** `components/main/<섹션>.tsx` 맨 위의 `CONTENT` 안에서 `KO`와 `EN`을 함께 수정
- **브로셔 교체:** `public/carbonhive-brochure.pdf`를 같은 이름으로 교체
- **메뉴 수정:** `components/navLinks.ts`
- **사이트 제목/설명(SEO):** `app/layout.tsx`의 `metadata`

## 외부 서비스
| 용도 | 서비스 | 폼 ID | 위치 |
|---|---|---|---|
| 브로셔 신청 | Tally (팝업) | `Npv7XG` | `components/TallyBrochureCompletion.tsx`, `TallyPopupCloseButton.tsx` |
| 문의하기 | Tally (페이지 내장) | `kdXJzZ` | `components/main/ContactForm.tsx` |

폼 질문 내용과 응답 확인은 Tally 관리 화면에서 합니다.

## 배포
`main` 브랜치에 반영하면 Cloudflare Pages가 자동으로 빌드하고 배포합니다.
(빌드 명령: `npm run build`)

## 참고
- 이 프로젝트는 Next.js 16을 씁니다. 예전 버전과 다른 부분이 있으니 `node_modules/next/dist/docs/`를 참고하세요.
