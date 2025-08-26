import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/navigation";
import "@/styles/globals.css";
import { VisitProvider } from "@/contexts";

export const metadata: Metadata = {
  title: "Ricardo Sousa",
  description: "Hello, I'm Ricardo, welcome to my digital portfolio.",
  authors: { name: "Ricardo Sousa" },
  creator: "Ricardo Sousa",
  keywords: ["react", "react-native", "design", "front-end", "mobile"],
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <VisitProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <div id="modal-root" />
        </VisitProvider>
      </body>
    </html>
  );
}
