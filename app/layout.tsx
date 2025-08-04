import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/navigation";
import "@/styles/globals.css";

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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
