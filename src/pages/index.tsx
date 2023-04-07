export default function Home() {
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://media.graphassets.com/uQJ719UiT3CO2NurIGnm')` }}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-auto" >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              🚀 Superset Nextjs, Typescript, Tailwind {""}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
              Nextjs Typescript<span className="inline-block mt-2 text-indigo-600"> Tailwind Ready!</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tailwind CSS: A utility-first CSS framework that helps speed up UI development
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a rel="noopener noreferrer" target="_blank"
                href="https://github.com/EmmanuelPallares/Full-Stack-Gallery-Website-Nextjs-Typescript-Tailwind/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                GitHub Repo
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://tailwindcss.com/" className="text-sm font-semibold leading-6 text-gray-900">
                Go to <span className="underline">tailwind.com</span><span aria-hidden="true" >→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};