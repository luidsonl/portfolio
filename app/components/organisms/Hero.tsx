import { TranslationFunction } from "@/types/translations";
import Avatar from "../atoms/Avatar"

type Props = {
  t: TranslationFunction;
}

export default function Hero({t}: Props) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  return (
    <header className="py-10 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center md:gap-8">
        <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-4">{t('hero.greeting')} <span className="text-sky-600">{t('hero.name')}</span></h1>
            <div className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              <p>{t('hero.subtitle')}</p>
              <p className="mt-3">
                {t('hero.description')}
              </p>
                
            </div>
        </div>
        <div className="w-40 md:w-48">
          <Avatar src={`${basePath}/avatar.png`} alt="Luidson" size={192} />
        </div>
      </div>
    </header>
  )
}
