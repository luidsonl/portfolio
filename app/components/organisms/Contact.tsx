import { TranslationFunction } from "@/types/translations";
import SocialLinks from "../molecules/SocialLinks"

type Props = {
  t: TranslationFunction;
}

export default function Contact({t}: Props) {


  return (
    <section className="py-10 md:py-16" id="contact">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold mb-6">{t('contact.heading')}</h2>

        <div className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        ">
          <div className="text-sm text-slate-700 dark:text-slate-300">
            {t('contact.sendEmail')}{" "}
            <a
              className="text-sky-600 hover:underline"
              href="mailto:luidsonlsti@gmail.com"
            >
              luidsonlsti@gmail.com
            </a>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
