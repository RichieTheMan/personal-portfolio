import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JobHistorySection } from "@/components/sections/JobHistorySection";
import { LatestWorkSection } from "@/components/sections/LatestWorkSection";
import "@/globals.css";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JobHistorySection />
      <LatestWorkSection />
      <ContactSection />
    </>
  );
}
