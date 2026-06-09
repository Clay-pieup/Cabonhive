const PRODUCTS = [
  {
    name: "하이브 잉크 C4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYD-NqEfC7q6LXs-85rrTJ5WKGoctf8dRA6b59u4ZbD9st-4SJFnTlGdMgxDhvCCEL5knaeVDgT7wiGofNQr171p0cnEX1hyJF8_AmI5UEX5zws3gaE431QoSpD7KX0xSIL7XUsV_NrmfmdxuNYnmh0ywtDyi3rhcxjC6fStiI1RRz6kzEcHqJBU43RDs7nEHfzOdjKQ28F0a4F70FzlKU_Q-7ISF8lsbWJxogi9AC-GvjqcZpK5Ih5n5M57XlrmFMerPc9y6J3XJf",
  },
  {
    name: "하이브 수지 R1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe3Zk3_EStx8mSzqNcsTZmdLoKJXBVlEFGzALRg8ew0ut4NMSdMKfDeUk9cjFcnGgCu5v2DHxH6TnkXIcZ4lTyb7okczjz8sOOhT2UrlVlDRvdxxJqg6fF50wVyMXgVFqnV0GVKVvgaG0Bv6Xgf5G2x8RKQkQCKtM-BheFYCJ3WEFbsn2nm25C_agbAuHqhJBpbxmAasl6h1prFKEuZREmCqfbQYR3gFEQ80ZDCKdGAgbrEuBiQHdiD2duEwf8O_Zz5kP7GLAEazrH",
  },
  {
    name: "하이브 파우더 G1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfJyGbKPkE5Db7qLHLqm6mspGJFvAwIXGQTAXldMjsuHUn_1FkBUc7nLzS4iVIDGZPb6qF9xnjWR2h__xVnlo55_UWoAcpmEFJBq2jjnXUgzqrzhbnOZhAm1QorWmIS5VpCCm5cOGpt4Hx4mP33mrq3KtZeS-gCbQw6_zgnmVY8aCVdhXK6uNSRXK0ywgVQbLp00F0bMC3pGQuHTJgapE5Fn7M910CXJBDnOfF2IpY4W18d__74p1PtG162ZqGRty4reDbT2Jzq7Le",
  },
];

export default function Products() {
  return (
    <section className="py-32" id="products">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-4 block">
              제품 소개
            </span>
            <h2 className="font-display-lg text-display-lg text-on-background mb-8">
              카본하이브의 차별화된 제품
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(({ name, src }) => (
            <div
              key={name}
              className="group relative overflow-hidden bg-white border-subtle"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={src}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
