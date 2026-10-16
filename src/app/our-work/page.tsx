import type { Metadata } from "next";
import OurWorkHero from "@/components/our-work/OurWorkHero";
import WhatWeDoIntro from "@/components/our-work/WhatWeDoIntro";
import FocusAreas from "@/components/our-work/FocusAreas";
import EvidenceToChange from "@/components/our-work/EvidenceToChange";
import WorkInPractice from "@/components/our-work/WorkInPractice";
import CollaborateBanner from "@/components/our-work/CollaborateBanner";
import BuildTogether from "@/components/our-work/BuildTogether";

export const metadata: Metadata = {
  title: "Our Work | ACRIDC-Africa",
  description:
    "We combine research, collaboration, and expertise to address Africa's most pressing development challenges.",
};

export default function OurWorkPage() {
  return (
    <>
      <OurWorkHero />
      <WhatWeDoIntro />
      <FocusAreas />
      <EvidenceToChange />
      <WorkInPractice />
      <CollaborateBanner />
      <BuildTogether />
    </>
  );
}