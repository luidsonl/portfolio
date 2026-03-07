import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luidson Lima Santos - Desenvolvedor Full-Stack",
  description: "Desenvolvedor Full-Stack | Node.js, Next.js, PHP, Laravel",

  verification: {
    google: "LFWW5_Q9YkGKqJ5b9BNMfvXshaTZZd9Fj4cUm8kEjQU",
  },

  alternates: {
    languages: {
      "pt-BR": "https://luidsonl.github.io/",
      en: "https://luidsonl.github.io/en",
      "x-default": "https://luidsonl.github.io/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
