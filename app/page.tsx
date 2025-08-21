import { Page } from "@/components/layout";
import { ContactSection } from "@/app/_components";
import { HeroSection } from "@/app/_components/HeroSection";
import { JobHistorySection } from "@/app/_components/JobHistorySection";
import { LatestWorkSection } from "@/app/_components/LatestWorkSection";
import { ToolsSection } from "./_components/ToolsSection";

export default function HomePage() {
  return (
    <Page pageSrHeader="My Work">
      <HeroSection />
      <JobHistorySection />
      <LatestWorkSection />
      <video width="30%" autoPlay muted loop playsInline>
        <source src="/assets/videos/logo-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <ToolsSection />
      <ContactSection />
    </Page>
  );
}
