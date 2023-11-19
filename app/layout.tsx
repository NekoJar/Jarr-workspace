import "./theme-config.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import NavBar from "./NavBar";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jarrworkspace",
  description: "Jarr's Portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <Theme appearance="dark" accentColor="red">
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
