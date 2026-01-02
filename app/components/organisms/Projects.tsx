import ProjectCard from "../molecules/ProjectCard"
import { projects } from "../../data/portfolio"

export default function Projects() {
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold mb-6">Projetos pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
