import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { ViewModeProvider } from "@/providers/ViewModeProvider";
import { LogoAnimationProvider } from "@/providers/LogoAnimationProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteMetadata } from "@/data/metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s — ${siteMetadata.author}`,
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LocaleProvider>
          <ViewModeProvider>
            <LogoAnimationProvider>
              <Header />
              <main className="min-h-screen pt-16 sm:pt-20">
                {children}
              </main>
              <Footer />
            </LogoAnimationProvider>
          </ViewModeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
