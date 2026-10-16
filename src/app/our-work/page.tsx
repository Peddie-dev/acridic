import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import OurWorkHero from "@/Components/our-work/OurWorkHero";
import WhatWeDoIntro from "@/Components/our-work/WhatWeDoIntro";
import FocusAreas from "@/Components/our-work/FocusAreas";
import EvidenceToChange from "@/Components/our-work/EvidenceToChange";
import WorkInPractice from "@/Components/our-work/WorkInPractice";
import CollaborateBanner from "@/Components/our-work/CollaborateBanner";

export const metadata: Metadata = {
  title: "Our Work | ACRIDC-Africa",
  description:
    "We combine research, collaboration, and expertise to address Africa's most pressing development challenges.",
};

export default function OurWorkPage() {
  return (
    <>
      <Navbar />
            <main className="relative z-0 overflow-x-clip bg-[#F8FAFC]">
      <OurWorkHero />
      <WhatWeDoIntro />
      <FocusAreas />
      <EvidenceToChange />
      <WorkInPractice />
      <CollaborateBanner />
      <Footer />
      </main>
    </>
  );
}