import TopNavigation from "@/components/main/TopNavigation";
import Hero from "@/components/main/Hero";
import Technology from "@/components/main/Technology";
import Products from "@/components/main/Products";
import Applications from "@/components/main/Applications";
import ProvenByData from "@/components/main/ProvenByData";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <main>
        <Hero />
        <Technology />
        <Products />
        <Applications />
        <ProvenByData />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
