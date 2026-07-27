"use client";

import { useLanguage } from "@/components/LanguageContext";

const CONTENT = {
  KO: {
    label: "문의하기",
    heading: "샘플로 직접 확인해보세요",
    body: "적용 목적과 요구 물성을 알려주시면, 적합한 소재를 제안해드립니다.",
    contactInfo: [
      { icon: "mail", label: "이메일 문의", value: "support@carbonhive.co.kr" },
      { icon: "call", label: "전화 번호", value: "055.351.2892" },
      {
        icon: "location_on",
        label: "본사 위치",
        value: "(51395) 경남 밀양시 부북면 무안로 761,\n나노융합센터 연구동 404호",
      },
    ],
    fields: [
      { label: "회사명", type: "text", required: true },
      { label: "담당자명", type: "text", required: true },
      { label: "이메일", type: "email", required: true, placeholder: "example@email.com" },
      { label: "연락처", type: "tel", required: false },
    ],
    productLabel: "관심 제품",
    productOptions: [
      { value: "", label: "제품 선택" },
      { value: "powder", label: "파우더" },
      { value: "paste_ink", label: "페이스트 · 잉크" },
      { value: "composites", label: "복합소재" },
      { value: "functional", label: "기능성 소재" },
    ],
    messageLabel: "문의 내용",
    submit: "문의하기",
  },
  EN: {
    label: "Contact Us",
    heading: "See It for Yourself with a Sample",
    body: "Tell us your application and required properties, and we'll recommend the right material.",
    contactInfo: [
      { icon: "mail", label: "Email", value: "support@carbonhive.co.kr" },
      { icon: "call", label: "Phone", value: "055.351.2892" },
      {
        icon: "location_on",
        label: "Headquarters",
        value: "761 Muan-ro, Bubuk-myeon, Miryang-si, Gyeongnam (51395),\nNano Convergence Center R&D Bldg. 404",
      },
    ],
    fields: [
      { label: "Company Name", type: "text", required: true },
      { label: "Contact Name", type: "text", required: true },
      { label: "Email", type: "email", required: true, placeholder: "example@email.com" },
      { label: "Phone", type: "tel", required: false },
    ],
    productLabel: "Product of Interest",
    productOptions: [
      { value: "", label: "Select a product" },
      { value: "powder", label: "Powder" },
      { value: "paste_ink", label: "Paste · Ink" },
      { value: "composites", label: "Composites" },
      { value: "functional", label: "Functional Materials" },
    ],
    messageLabel: "Message",
    submit: "Submit Inquiry",
  },
} as const;

export default function Contact() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section
      className="py-32 bg-surface-container-low border-t border-outline-variant/30"
      id="contact"
    >
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4 block">
                {t.label}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-8">
                {t.heading}
              </h2>
              <p className="font-body-md text-body-md text-on-tertiary-container mb-12">
                {t.body}
              </p>

              <div className="space-y-8">
                {t.contactInfo.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border-subtle flex-shrink-0">
                      <span className="material-symbols-outlined text-[#ffb800]">
                        {icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-label-sm text-label-sm text-on-tertiary-container uppercase mb-1">
                        {label}
                      </h4>
                      <p className="font-body-md font-bold text-on-background whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — contact form */}
          <div className="lg:col-span-4 bg-white p-8 rounded-lg shadow-sm border border-outline-variant/30">
            <form className="space-y-6">
              <div className="space-y-4">
                {t.fields.map(({ label, type, required, placeholder }) => (
                  <div key={label}>
                    <label className="block font-label-md text-label-md text-on-surface mb-2">
                      {label}{" "}
                      {required && (
                        <span className="text-[#ffb800]">*</span>
                      )}
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder={placeholder}
                      required={required}
                      type={type}
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    {t.productLabel}
                  </label>
                  <select className="w-full px-4 py-3 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                    {t.productOptions.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    rows={4}
                  />
                </div>
              </div>

              <button
                className="w-full bg-primary-container text-on-primary-fixed py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary-container/20"
                type="submit"
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
