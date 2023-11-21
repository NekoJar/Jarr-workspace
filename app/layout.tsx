import "./theme-config.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import NavBar from "./NavBar";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

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
      <head>
        <link rel="icon" href="/logo-white.ico" sizes="any" />
        <body className="bg-neutral-900">
          <Theme appearance="dark" accentColor="red">
            <Toaster position="top-center" />
            <main>{children}</main>
          </Theme>
        </body>
      </head>
    </html>
  );
}
