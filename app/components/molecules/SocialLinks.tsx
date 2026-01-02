import React from "react"

const socials = [
  { name: "GitHub", href: "https://github.com/luidsonl" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/luidson-lima-santos/" }
]

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
          {s.name}
        </a>
      ))}
    </div>
  )
}
