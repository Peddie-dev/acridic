import Navbar from "@/Components/Navbar";
import Hero  from "@/Components/Hero";
import About from "@/Components/About";
import WhatWeDo from "@/Components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      {/* rest of homepage content — hero section, etc. */}
    </main>
  );
}