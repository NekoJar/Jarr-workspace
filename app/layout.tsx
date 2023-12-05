import "./theme-config.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import NavBar from "./NavBar";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import {
  DarkModeProvider,
  useDarkMode,
} from "./components/context/DarkModeContext";

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
        <link rel="icon" href="./icon.ico" sizes="any" />
      </head>
      <DarkModeProvider>
        <body className="bg-[var(--bg-primary)]">
          <Toaster position="top-center" />
          <main>{children}</main>
        </body>
      </DarkModeProvider>
    </html>
  );
}
