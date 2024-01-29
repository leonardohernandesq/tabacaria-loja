import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tabacaria Online",
  description: "Compre essencias em Portugal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={clsx([inter.className, 'bg-slate-700'])}>
        <Navbar />
        <main className="h-screen py-16 px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
