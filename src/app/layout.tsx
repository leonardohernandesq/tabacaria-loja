import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "@/hooks/useCart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahla Hookah Online",
  description: "Venda de narguiles e acessórios em Portugal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="pt-BR">
        <body className={clsx([inter.className, 'bg-zinc-950'])}>
          <CartProvider>
            <ToastContainer position="bottom-right" pauseOnHover={false} closeOnClick />
            <Navbar />
            <main className="h-screen py-16 px-8 flex justify-center">
              {children}
            </main>
          </CartProvider>
        </body>
      </html>

  );
}
