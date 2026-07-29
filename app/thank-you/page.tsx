"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    // Tally 폼(iframe) 안에서 리다이렉트가 발생했다면 부모 창으로 빠져나오기
    if (window.top && window.top !== window.self) {
      window.top.location.href = window.location.href;
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-gutter">
      <div className="max-w-md text-center">
        <h1 className="font-display-lg text-display-lg text-on-background mb-6">
          문의해 주셔서 감사합니다
        </h1>
        <p className="font-body-lg text-body-lg text-on-tertiary-container mb-10">
          담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20"
        >
          홈으로 돌아가기
        </a>
      </div>
    </main>
  );
}
