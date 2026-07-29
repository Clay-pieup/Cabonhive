"use client";

import { useEffect, useState } from "react";

const FORM_ID = "kdXJzZ";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://tally.so") return;

      let data: unknown = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      if (
        typeof data !== "object" ||
        data === null ||
        !("event" in data) ||
        typeof (data as { event: unknown }).event !== "string"
      ) {
        return;
      }

      const eventName = (data as { event: string }).event.toLowerCase();
      if (!eventName.includes("submit")) return;

      const payload = (data as { payload?: { formId?: string } }).payload;
      if (!payload?.formId || payload.formId === FORM_ID) {
        setSubmitted(true);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <span className="material-symbols-outlined text-5xl text-primary mb-6">
          check_circle
        </span>
        <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">
          문의해 주셔서 감사합니다
        </h3>
        <p className="font-body-md text-body-md text-on-tertiary-container">
          담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <iframe
      data-tally-src="https://tally.so/embed/kdXJzZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      width="100%"
      height="500"
      frameBorder="0"
      title="문의하기"
    />
  );
}
