import Hero from "./components/organisms/Hero"
import Experience from "./components/organisms/Experience"
import Projects from "./components/organisms/Projects"
import Education from "./components/organisms/Education"
import Contact from "./components/organisms/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Luidson Lima Santos — Feito com Next.js e Tailwind</footer>
    </main>
  )
}
