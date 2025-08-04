import { Page } from "@/components/layout";
import { ContactSection } from "@/app/_components";
import { HeroSection } from "@/app/_components/HeroSection";
import { JobHistorySection } from "@/app/_components/JobHistorySection";
import { LatestWorkSection } from "@/app/_components/LatestWorkSection";

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
