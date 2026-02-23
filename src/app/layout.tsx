import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { ViewModeProvider } from "@/providers/ViewModeProvider";
import { LogoAnimationProvider } from "@/providers/LogoAnimationProvider";
import { NavigationDirectionProvider } from "@/providers/NavigationDirectionProvider";
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
              <NavigationDirectionProvider>
              <Header />
              {/* Top dissolve: anchored to navbar bottom edge */}
              <div
                className="fixed left-0 right-0 z-40 pointer-events-none top-16 h-24 sm:top-20 sm:h-28 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.6)_25%,rgba(255,255,255,0.25)_55%,rgba(255,255,255,0.08)_80%,transparent_100%)]"
              />
              {/* Bottom dissolve: anchored to viewport bottom */}
              <div
                className="fixed left-0 right-0 bottom-0 z-40 pointer-events-none h-24 sm:h-28 bg-[linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0.6)_25%,rgba(255,255,255,0.25)_55%,rgba(255,255,255,0.08)_80%,transparent_100%)]"
              />
              <main className="min-h-screen pt-16 sm:pt-20">
                {children}
              </main>
              <Footer />
              </NavigationDirectionProvider>
            </LogoAnimationProvider>
          </ViewModeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
