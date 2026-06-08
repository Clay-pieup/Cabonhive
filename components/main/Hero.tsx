const BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGbXy1nWgcNgfXW8B19vwSDnHjzBnJZI5Fab1Ru5vYQHimJWVxwn36Uy_sIinxJ7YlQSDHjZdyO93RffunvG3My7mjQlpuCy-cIbUrMconAeLb1_amYaRo3ZLevKnbnjTl5qshpHHUFoXN9Aef58CRwcOHLoEvjj_TYn2eC5d7BsNIFacgTFuk21h9-6Nur9XPmowpDfewVeWVpP-YJCuib1ed0XWZ6ynB6Qb9dvgrTPc0YwkGZ5AI6pKILC6mnaPS4kE8g9KTfs36Y7c";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-white">
      {/* Ken Burns 배경 — 오른쪽 정렬로 그래핀 구조가 우측에 위치 */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 animate-kenburns"
          style={{
            backgroundImage: `url("${BG_IMAGE}")`,
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-max-width mx-auto px-gutter w-full">
        <div className="max-w-3xl text-start">
          <h1
            className="animate-fade-up font-display-lg text-display-lg text-on-background mb-6 leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            빛으로 완성하는 <br />
            바이오매스 그래핀, 카본하이브
          </h1>

          <p
            className="animate-fade-up font-body-lg text-body-lg text-on-tertiary-container mb-10"
            style={{ animationDelay: "0.35s" }}
          >
            카본하이브는 초고속 광열탄화 공정을 통해 버려지는 바이오매스를
            고순도 그래핀으로 전환합니다.
            <br />
            환경적 한계와 높은 비용 구조를 극복하고, 산업 현장에 즉시 적용
            가능한 소재를 공급합니다.
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.55s" }}
          >
            <button className="bg-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
              회사 소개
            </button>
            <button className="border border-outline px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container transition-colors">
              기술 문의
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
