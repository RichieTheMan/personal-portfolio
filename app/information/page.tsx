import { Page } from "@/components/layout";

export default function AboutPage() {
  return (
    <Page pageSrHeader="About Me">
      <video width="30%" autoPlay muted loop playsInline>
        <source src="/assets/videos/logo-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Page>
  );
}
