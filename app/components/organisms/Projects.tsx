import ProjectCard from "../molecules/ProjectCard";
import { TranslationFunction } from "@/types/translations";

type Props = {
  t: TranslationFunction;
};

export default function Projects({ t }: Props) {
  const projects = [
    {
      title: t("projects.urlShortenerLaravel.title"),
      description: t("projects.urlShortenerLaravel.description"),
      tech: ["Laravel", "Redis", "PostgreSQL", "PHPUnit", "Vue.js"],
      github: "https://github.com/luidsonl/url-shortener-laravel-vue",
    },
    {
      title: t("projects.websocketChat.title"),
      description: t("projects.websocketChat.description"),
      tech: ["React", "WebSocket", "Node.js"],
      github: "https://github.com/luidsonl/websocket-chat",
    },
    {
      title: t("projects.laravelForum.title"),
      description: t("projects.laravelForum.description"),
      tech: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/luidsonl/Forum-Laravel",
    },
    {
      title: t("projects.organizagro.title"),
      description: t("projects.organizagro.description"),
      tech: ["Flutter", "Dart"],
      github: "https://github.com/luidsonl/organizagro",
    },
    {
      title: t("projects.tkinterAgenda.title"),
      description: t("projects.tkinterAgenda.description"),
      tech: ["Python", "Arquitetura MVC", "SQLite", "Matplotlib"],
      github: "https://github.com/luidsonl/agenda-tkinter-mvc",
    },
    {
      title: t("projects.wordGuessing.title"),
      description: t("projects.wordGuessing.description"),
      tech: ["Vue.js", "Tailwind.css", "Pinia"],
      github: "https://github.com/luidsonl/wordguessing-vue",
      deploy: "https://luidsonl.github.io/wordguessing-vue/",
    },
  ];

  return (
    <section className="py-10 md:py-16" id="projects">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold mb-6">{t("projects.heading")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
