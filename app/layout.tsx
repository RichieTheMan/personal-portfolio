import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
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
  title: "Ricardo Sousa | My Portfolio",
  description: "Lorem Ipsum",
  keywords: ["react", "front-end", "mobile"],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
