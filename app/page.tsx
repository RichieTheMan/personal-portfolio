import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { JobHistorySection } from "@/components/JobHistorySection";
import { LatestWorkSection } from "@/components/LatestWorkSection";
import "@/globals.css";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JobHistorySection />
      <LatestWorkSection />
      <ContactSection />
      <video width="50%" autoPlay muted loop playsInline>
        <source src="/assets/videos/logo-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
