import { TranslationFunction } from "@/types/translations";

type Props = {
  t: TranslationFunction;
};

export default function Experience({ t }: Props) {
  const experiences = [
    {
      role: t("experiences.kyraly.role"),
      company: t("experiences.kyraly.company"),
      period: t("experiences.kyraly.period"),
      description: t("experiences.kyraly.description"),
      bulletPoints: [
        t("experiences.kyraly.bulletPoints.shopifyDev"),
        t("experiences.kyraly.bulletPoints.performance"),
        t("experiences.kyraly.bulletPoints.automation"),
        t("experiences.kyraly.bulletPoints.wordpress"),
        t("experiences.kyraly.bulletPoints.shopifyCustom"),
        t("experiences.kyraly.bulletPoints.seoOptimization"),
      ],
    },
  ];

  return (
    <section className="py-10 md:py-16" id="experience">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold mb-6">
          {t("experiences.heading")}
        </h2>
        <div className="space-y-6">
          {experiences.map((e) => (
            <div
              key={e.role}
              className="border border-slate-200 dark:border-slate-700 rounded-md p-4 bg-white dark:bg-slate-900/40"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="text-lg font-medium">{e.role}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {e.period}
                </div>
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                {e.company}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                {e.description && <p>{e.description}</p>}
                {e.bulletPoints && (
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {e.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
