import { Page } from "@/components/layout";
import { ContactSection } from "@/app/_components";
import { HeroSection } from "@/app/_components/HeroSection";
import { LatestWorkSection } from "@/app/_components/LatestWorkSection";
import { ToolsSection } from "./_components/ToolsSection";
import { LookingForJobSection } from "./_components/LookingForJobSection";

export default function HomePage() {
  return (
    <Page pageSrHeader="My Work">
      <HeroSection />
      <LookingForJobSection />
      <LatestWorkSection />
      <ToolsSection />
      <ContactSection />
    </Page>
  );
}
