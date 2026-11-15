import { COMPANY } from '../config'

export default function About() {
  return (
    <section id="sobre" className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">Sobre</h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">{COMPANY.about}</p>
      </div>
    </section>
  )
}
