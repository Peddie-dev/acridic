import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import WhatWeDo from "@/Components/WhatWeDo";
import OurImpact from "@/Components/OurImpact";
import FeaturedResearch from "@/Components/FeaturedResearch";
import FeaturedProjects from "@/Components/FeaturedProjects";
import Partnership from "@/Components/Partnership";
import OurReach from "@/Components/OurReach";
import Publications from "@/Components/Publications";
import NewsEvents from "@/Components/NewsEvents";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip bg-[#F8FAFC]">
        <Hero />
        <About />
        <WhatWeDo />
        <OurImpact />
        <FeaturedResearch />
        <FeaturedProjects />
        <Partnership />
        <OurReach />
        <Publications />
        <NewsEvents />
        <Footer />
      </main>
    </>
  );
}
