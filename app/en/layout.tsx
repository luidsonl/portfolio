import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Luidson Lima Santos - Full Stack Developer",
  description: "Full Stack Developer | Node.js, Next.js, PHP, Laravel",

  alternates: {
    languages: {
      "pt-BR": "https://luidsonl.github.io/",
      "en": "https://luidsonl.github.io/en",
      "x-default": "https://luidsonl.github.io/",
    }
  }
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}