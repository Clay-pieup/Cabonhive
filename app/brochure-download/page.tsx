"use client";

import { useEffect } from "react";

export default function BrochureDownloadPage() {
  useEffect(() => {
    // Tally 팝업(iframe) 안에서 열렸다면 부모 창으로 빠져나오기
    if (window.top && window.top !== window.self) {
      window.top.location.href = window.location.href;
      return;
    }
    // 자동 다운로드 시작
    const a = document.createElement("a");
    a.href = "/carbonhive-brochure.pdf";
    a.download = "카본하이브-브로셔.pdf";
    a.click();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-gutter">
      <div className="max-w-md text-center">
        <h1 className="font-display-lg text-display-lg text-on-background mb-6">
          브로셔를 보내드립니다
        </h1>
        <p className="font-body-lg text-body-lg text-on-tertiary-container mb-10">
          다운로드가 자동으로 시작됩니다. 시작되지 않으면 아래 버튼을 눌러주세요.
        </p>
        <a
          href="/carbonhive-brochure.pdf"
          download
          className="inline-flex items-center justify-center bg-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20"
        >
          브로셔 내려받기
        </a>
      </div>
    </main>
  );
}
