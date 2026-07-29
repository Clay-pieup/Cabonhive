"use client";

import { useEffect } from "react";

const FORM_ID = "Npv7XG";
const REDIRECT_PATH = "/brochure-download";

export default function TallyRedirectOnSubmit() {
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
        window.location.href = REDIRECT_PATH;
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
