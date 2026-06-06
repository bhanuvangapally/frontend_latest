import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Flowchart from "@/components/Flowchart";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import FuturePlans from "@/components/FuturePlans";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Flowchart />
      <HowItWorks />
      <Features />
      <WhyChooseUs />
      <AboutUs />
      <FuturePlans />
      <CTA />
      <Footer />
    </main>
  );
}
