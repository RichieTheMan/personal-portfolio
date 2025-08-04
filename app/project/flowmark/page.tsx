import { Page } from "@/components/layout";

export default function FlowmarkProjectPage() {
  return (
    <Page pageSrHeader="Flowmark Project">
      <video width="30%" autoPlay muted loop playsInline>
        <source src="/assets/videos/logo-animation.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Page>
  );
}
