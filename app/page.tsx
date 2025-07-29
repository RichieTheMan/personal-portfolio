import { HeroSection } from "@/components/HeroSection";
import { JobHistorySection } from "@/components/JobHistorySection";
import "@/globals.css";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JobHistorySection />
      <video width="50%" autoPlay muted loop playsInline>
        <source src="/assets/videos/logo-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
