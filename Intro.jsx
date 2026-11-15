import { COMPANY } from '../config'

export default function Intro() {
  return (
    <section className="border-b border-neutral-200 bg-white px-4 py-12 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-widest sm:text-4xl">{COMPANY.name}</h1>
        <p className="mt-3 text-sm uppercase tracking-wide text-neutral-500 sm:text-base">
          {COMPANY.tagline}
        </p>
        <p className="mt-5 text-base text-neutral-700 sm:text-lg">{COMPANY.intro}</p>
      </div>
    </section>
  )
}
