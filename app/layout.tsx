import type { Metadata } from "next";
import { Roboto, Cairo, Inter, Roboto_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin", "cyrillic"],
});

const defaultFont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

const cairoMono = Cairo({
  variable: "--font-cairo-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["cyrillic", "latin"]
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["cyrillic", "latin"]
});

export const metadata: Metadata = {
  title: "Demo Catalog App",
  description: "Developed by Eugene Bulgakov with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${cairoMono.variable} ${defaultFont.variable} ${robotoMono.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
