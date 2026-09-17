import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AreasHero from "@/Components/research/areas/AreasHero";
import AreasGrid from "@/Components/research/areas/AreasGrid";
import AreasProcess from "@/Components/research/areas/AreasProcess";
import AreasTogether from "@/Components/research/areas/AreasTogether";

export const metadata: Metadata = {
  title: "Research Areas | ACRIDC-Africa",
  description:
    "Eight interconnected research areas addressing Africa’s priority challenges — from agriculture and health to governance, innovation, and peace.",
};

export default function ResearchAreasPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-0 overflow-x-clip bg-[#F8FAFC]">
        <AreasHero />
        <AreasGrid />
        <AreasProcess />
        <AreasTogether />
        <Footer />
      </main>
    </>
  );
}
