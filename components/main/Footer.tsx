const NAV_LINKS = [
  { label: "기술", href: "#technology" },
  { label: "제품", href: "#products" },
  { label: "문의하기", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-gutter max-w-max-width mx-auto">
        <div className="col-span-1">
          <span className="font-headline-sm text-headline-sm font-black text-on-surface">
            카본하이브
          </span>
          <p className="mt-4 font-body-sm text-body-sm text-on-tertiary-container">
            정밀 엔지니어링을 통해 첨단 탄소 소재의 미래를 선도합니다.
          </p>
        </div>

        <div>
          <h4 className="font-label-md text-label-md font-bold mb-6">메뉴</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  className="text-on-tertiary-container font-body-sm text-body-sm hover:text-primary transition-colors"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-max-width mx-auto px-gutter mt-16 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
        <p className="font-label-sm text-label-sm text-on-tertiary-container">
          © 2024 카본하이브. 모든 권리 보유.
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
