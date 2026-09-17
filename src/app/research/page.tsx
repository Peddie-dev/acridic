import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ResearchHero from "@/Components/research/ResearchHero";
import ResearchApproach from "@/Components/research/ResearchApproach";
import ResearchMethodology from "@/Components/research/ResearchMethodology";
import ResearchImpactStats from "@/Components/research/ResearchImpactStats";
import ResearchPrinciples from "@/Components/research/ResearchPrinciples";

export const metadata: Metadata = {
  title: "Research Overview | ACRIDC-Africa",
  description:
    "Evidence that drives better decisions across Africa — ACRIDC’s research philosophy, methodology, impact, and guiding principles.",
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-0 overflow-x-clip bg-[#F8FAFC]">
        <div className="research-overview">
          <div className="research-overview-stage">
            <ResearchHero />
            <ResearchApproach />
            <ResearchMethodology />
            <ResearchImpactStats />
            <ResearchPrinciples />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
