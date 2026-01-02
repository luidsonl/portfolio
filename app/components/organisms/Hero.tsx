import Avatar from "../atoms/Avatar"

export default function Hero() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  return (
    <header className="py-10 md:py-20">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center md:gap-8">
        <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-4">Olá, me chamo <span className="text-sky-600">Luidson</span></h1>
            <div className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                <p>Soluciono problemas usando código.</p>
                <p className="mt-3">
                    Desenvolvedor Full-Stack com experiência em Node.js, Next.js, PHP, Laravel, criação e manutenção de temas para Wordpress e Shopify.
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
