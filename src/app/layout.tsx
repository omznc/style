import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inria_Serif } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inriaSerif = Inria_Serif({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Style",
  description: "A personal stylist, on your phone",
  authors: {
    name: "Edvard Nyeso",
    url: "nyeso.edu@gmail.com",
  },
  metadataBase: new URL("https://thestyleapp.hu",)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inriaSerif.className}`}
      >
        {children}
      </body>
    </html>
  );
}
