import { TranslationFunction } from "@/types/translations";

type Props = {
  t: TranslationFunction;
}

export default function Education({t}: Props) {
  const education = [
    {
      degree: t("education.dataScience.degree"),
      institution: t("education.dataScience.institution"),
      period: t("education.dataScience.period"),
    },
    {
      degree: t("education.systemsAnalysis.degree"),
      institution: t("education.systemsAnalysis.institution"),
      period: t("education.systemsAnalysis.period"),
    },
  ];

  return (
    <section className="py-10 md:py-16" id="education">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold mb-6">{t('education.heading')}</h2>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.degree} className="border border-slate-200 dark:border-slate-700 rounded-md p-4 bg-white dark:bg-slate-900/40">
              <div className="text-lg font-medium">{e.degree}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{e.institution} — {e.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
