import Hero from "../components/organisms/Hero"
import Experience from "../components/organisms/Experience"
import Projects from "../components/organisms/Projects"
import Education from "../components/organisms/Education"
import Contact from "../components/organisms/Contact"
import { TranslationFunction } from "../../types/translations"

interface HomeProps {
  t: TranslationFunction;
}

export function Home({ t }: HomeProps) {
  return (
    <main>
      <Hero t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Contact t={t} />
      <footer className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </footer>
    </main>
  )
}