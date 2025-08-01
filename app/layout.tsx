import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/navigation/Footer";
import "../globals.css";

// const bebasNeue = localFont({
//   src: "../assets/fonts/BebasNeue-Regular.ttf",
//   variable: "--font-bebas-neue",
// });

// const openSans = localFont({
//   src: "../assets/fonts/OpenSans-Variable.ttf",
//   variable: "--font-open-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Ricardo Sousa",
  description: "Hello, I'm Ricardo, welcome to my digital portfolio.",
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
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
