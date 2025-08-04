import { Page } from "@/components/layout";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JobHistorySection } from "@/components/sections/JobHistorySection";
import { LatestWorkSection } from "@/components/sections/LatestWorkSection";

export default function HomePage() {
  return (
    <Page pageSrHeader="My Work">
      <HeroSection />
      <JobHistorySection />
      <LatestWorkSection />
      <ContactSection />
    </Page>
  );
}
