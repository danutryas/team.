import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Font = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "team.",
  description: "Instant collaboration for remote teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
