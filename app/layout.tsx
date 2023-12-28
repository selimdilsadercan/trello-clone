import "./globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import ClerkProvider from "@/providers/clerk-provider";
const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [{ url: "/logo.svg", href: "/logo.svg" }]
};

////

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}

export default Layout;
