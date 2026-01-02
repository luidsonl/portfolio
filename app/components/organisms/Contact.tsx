import SocialLinks from "../molecules/SocialLinks"

export default function Contact() {
  return (
    <section className="py-10 md:py-16" id="contact">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold mb-6">Contato</h2>

        <div className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        ">
          <div className="text-sm text-slate-700 dark:text-slate-300">
            Me mande um e-mail:{" "}
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
