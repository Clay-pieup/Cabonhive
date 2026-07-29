"use client";

import { useEffect } from "react";

const FORM_ID = "Npv7XG";
const FALLBACK_PATH = "/brochure-download";

function triggerDownload() {
  const a = document.createElement("a");
  a.href = "/carbonhive-brochure.pdf";
  a.download = "카본하이브-브로셔.pdf";
  a.click();
}

export default function TallyBrochureCompletion() {
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
      if (payload?.formId && payload.formId !== FORM_ID) return;

      const popup = document.querySelector<HTMLElement>(".tally-popup");
      const iframe = popup?.querySelector("iframe");
      const container = iframe?.parentElement;

      if (!popup || !iframe || !container) {
        window.location.href = FALLBACK_PATH;
        return;
      }

      const rect = container.getBoundingClientRect();
      container.style.position = "relative";
      container.style.width = `${rect.width}px`;
      container.style.height = `${rect.height}px`;
      iframe.style.display = "none";

      const overlay = document.createElement("div");
      overlay.className =
        "absolute inset-0 flex flex-col items-center justify-center text-center px-8 bg-white";
      overlay.innerHTML = `
        <span class="material-symbols-outlined text-5xl text-primary mb-6">check_circle</span>
        <h3 class="font-headline-sm text-headline-sm text-on-background mb-3">브로셔를 보내드립니다</h3>
        <p class="font-body-md text-body-md text-on-tertiary-container mb-8">
          다운로드가 자동으로 시작됩니다.<br />시작되지 않으면 아래 버튼을 눌러주세요.
        </p>
        <a href="/carbonhive-brochure.pdf" download="카본하이브-브로셔.pdf"
          class="inline-flex items-center justify-center bg-primary-container text-on-primary-fixed px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:scale-105 transition-transform shadow-lg shadow-primary-container/20">
          브로셔 내려받기
        </a>
      `;
      container.appendChild(overlay);

      triggerDownload();
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
