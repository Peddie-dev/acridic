import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AboutHero from "@/Components/about/AboutHero";
import WhoWeAre from "@/Components/about/WhoWeAre";
import OurJourney from "@/Components/about/OurJourney";
import OurFoundation from "@/Components/about/OurFoundation";
import Leadership from "@/Components/about/Leadership";
import ResearchAreas from "@/Components/about/ResearchAreas";
import AboutImpact from "@/Components/about/AboutImpact";
import AboutPartners from "@/Components/about/AboutPartners";

export const metadata: Metadata = {
  title: "About | ACRIDC-Africa",
  description:
    "Learn about ACRIDC-Africa — our mission, leadership, research areas, impact, and partnerships driving evidence-based development across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-0 overflow-x-clip bg-[#F8FAFC]">
        <AboutHero />
        <WhoWeAre />
        <OurJourney />
        <OurFoundation />
        <Leadership />
        <ResearchAreas />
        <AboutImpact />
        <AboutPartners />
        <Footer />
      </main>
    </>
  );
}
