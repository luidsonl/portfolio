import Badge from "../atoms/Badge"
import React from "react"

type Project = {
  title: string
  description: string
  tech: string[]
  href?: string
}


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-slate-200 dark:border-slate-700 rounded-md p-4 hover:shadow-sm transition bg-white dark:bg-slate-900/40">
      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      {project.href && (
        <a href={project.href} className="text-sm text-sky-600 hover:underline mt-3 inline-block">github</a>
      )}
    </article>
  )
}
