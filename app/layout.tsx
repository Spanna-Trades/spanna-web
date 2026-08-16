import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const FigtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spanna",
  description: "Spanna connects homeowners with verified electricians and plumbers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${FigtreeSans.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-screen relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
