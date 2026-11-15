import { COMPANY } from '../config'

// A logo PNG é exibida sem recorte nem distorção (object-contain, proporção original).
export default function Banner() {
  return (
    <section
      id="inicio"
      aria-label={COMPANY.name}
      className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-neutral-800 px-6 py-16 sm:min-h-[70vh] sm:py-24"
    >
      <img
        src={COMPANY.logo}
        alt={`Logo ${COMPANY.name}`}
        className="h-auto max-h-[50vh] w-full max-w-[280px] object-contain sm:max-w-md lg:max-w-xl"
        fetchpriority="high"
      />
    </section>
  )
}
