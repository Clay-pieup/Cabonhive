export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-gutter max-w-max-width mx-auto">
        <div className="space-y-4">
          <span className="font-headline-sm text-headline-sm font-black text-on-surface">
            카본하이브 | 그래핀 소재 전문 기업
          </span>
          <div className="space-y-1">
            <p className="font-body-sm text-body-sm text-on-tertiary-container">
              Tel. +82-55-351-2892 | support@carbonhive.co.kr
            </p>
            <p className="font-body-sm text-body-sm text-on-tertiary-container">
              경남 밀양시 부북면 무안로 761 나노융합센터 연구동 404호
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <button className="bg-primary-container text-on-primary-fixed px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
            기술 상담
          </button>
          <button
            data-tally-open="Npv7XG"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="group border border-outline px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container transition-all shadow-none hover:shadow-md flex items-center gap-2"
          >
            브로셔 다운로드
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-max-width mx-auto px-gutter mt-16 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
        <p className="font-label-sm text-label-sm text-on-tertiary-container">
          © 2026 카본하이브. 모든 권리 보유.
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
