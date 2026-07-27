"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
      closePopup: (formId: string) => void;
      loadEmbeds: () => void;
    };
  }
}

const FORM_ID = "Npv7XG";
const CLOSE_BUTTON_CLASS = "custom-tally-close-button";

export default function TallyPopupCloseButton() {
  useEffect(() => {
    const attachCloseButton = (popup: HTMLElement) => {
      if (popup.querySelector(`:scope > .${CLOSE_BUTTON_CLASS}`)) return;

      const button = document.createElement("button");
      button.className = CLOSE_BUTTON_CLASS;
      button.type = "button";
      button.setAttribute("aria-label", "닫기");
      button.textContent = "✕";
      button.style.cssText = `
        position: absolute;
        top: 3px;
        right: 15px;
        z-index: 10000;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 9999px;
        background: #eef0f0;
        color: rgba(0, 0, 0, 0.6);
        font-size: 15px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      button.addEventListener("click", () => {
        window.Tally?.closePopup(FORM_ID);
      });

      popup.style.position ||= "fixed";
      popup.appendChild(button);
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("tally-popup")) {
            attachCloseButton(node);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
