import type { Metadata } from "next";
import ContactHero from "@/Components/contact/ContactHero";
import LocationSection from "@/Components/contact/Locationsection";
import ContactForm from "@/Components/contact/Contactform";
import PartnerBanner from "@/Components/contact/Partnerbanner";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "Contact | ACRIDC-Africa",
  description:
    "Get in touch with ACRIDC to collaborate on research, explore a partnership, or learn more about our work across Africa.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
            <main className="relative z-0 overflow-x-clip bg-[#F8FAFC]">
      <ContactHero />
      <LocationSection />
      <ContactForm />
      <PartnerBanner />
      <Footer />
      </main>
    </>
  );
}
